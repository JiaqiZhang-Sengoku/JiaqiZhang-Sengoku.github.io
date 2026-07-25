import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const projectRoot = process.cwd();
const aboutFile = path.join(projectRoot, "_pages", "about.md");
const configFile = path.join(projectRoot, "_config.yml");
const thumbnailRoot = "Images/Thumbnails";
const shouldRewrite = process.argv.includes("--rewrite");
const checkOnly = process.argv.includes("--check");

const rasterPattern = /\.(?:png|jpe?g)$/i;
const htmlCommentPattern = /<!--[\s\S]*?-->/g;

function toPosix(value) {
  return value.replaceAll("\\", "/");
}

function cleanImageReference(value) {
  return toPosix(value.split(/[?#]/, 1)[0]).replace(/^\/+/, "");
}

function isSourceRaster(value) {
  const source = cleanImageReference(value);
  return source.startsWith("Images/")
    && !source.startsWith(`${thumbnailRoot}/`)
    && rasterPattern.test(source);
}

function thumbnailPathFor(source) {
  const normalized = cleanImageReference(source);
  const relative = normalized.slice("Images/".length);
  const parsed = path.posix.parse(relative);
  const sourceExtension = parsed.ext.slice(1).toLowerCase();
  return path.posix.join(
    thumbnailRoot,
    parsed.dir,
    `${parsed.name}-${sourceExtension}.webp`
  );
}

function stripHtmlComments(content) {
  return content.replace(htmlCommentPattern, "");
}

function imageSettings(source) {
  if (source === "Images/profile.png") {
    return { width: 384, height: 384, fit: "inside", quality: 86 };
  }

  if (source.startsWith("Images/Contact/")) {
    return {
      width: 640,
      height: 640,
      fit: "inside",
      quality: 95,
      smartSubsample: false
    };
  }

  if (source.startsWith("Images/Logos/")) {
    return { width: 256, height: 256, fit: "inside", quality: 88 };
  }

  if (source.startsWith("Images/Award/")) {
    return { width: 900, height: 1260, fit: "inside", quality: 82 };
  }

  if (source.startsWith("Images/Publication/")) {
    return { width: 960, height: 640, fit: "inside", quality: 84 };
  }

  return { width: 960, height: 960, fit: "inside", quality: 84 };
}

async function activeContentFiles() {
  const aboutContent = stripHtmlComments(await fs.readFile(aboutFile, "utf8"));
  const matches = aboutContent.matchAll(/{%\s*include_relative\s+([^\s%]+)\s*%}/g);
  const files = [];

  for (const match of matches) {
    files.push(path.resolve(path.dirname(aboutFile), match[1]));
  }

  return files;
}

function imageTags(content) {
  return [...stripHtmlComments(content).matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
}

function attributeValue(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = tag.match(new RegExp(`\\b${escapedName}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match?.[2];
}

function setAttribute(tag, name, value) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`\\s${escapedName}\\s*=\\s*(["'])[^"']*\\1`, "i");
  const attribute = ` ${name}="${value}"`;

  if (pattern.test(tag)) {
    return tag.replace(pattern, attribute);
  }

  return tag.replace(/\s*(\/?>)$/, `${attribute}$1`);
}

async function collectSources(files) {
  const sources = new Set();

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    for (const tag of imageTags(content)) {
      const original = attributeValue(tag, "data-original-src");
      const source = original || attributeValue(tag, "src");
      if (source && isSourceRaster(source)) {
        sources.add(cleanImageReference(source));
      }
    }
  }

  const config = await fs.readFile(configFile, "utf8");
  for (const key of ["avatar", "wechat_qr"]) {
    const match = config.match(new RegExp(`^\\s*${key}\\s*:\\s*["']?([^"'#\\s]+)`, "m"));
    if (match && isSourceRaster(match[1])) {
      sources.add(cleanImageReference(match[1]));
    }
  }

  return [...sources].sort((left, right) => left.localeCompare(right, "en"));
}

async function generateThumbnail(source) {
  const output = thumbnailPathFor(source);
  const absoluteSource = path.join(projectRoot, ...source.split("/"));
  const absoluteOutput = path.join(projectRoot, ...output.split("/"));
  const settings = imageSettings(source);

  await fs.mkdir(path.dirname(absoluteOutput), { recursive: true });

  const pipeline = sharp(absoluteSource, {
    limitInputPixels: false,
    sequentialRead: true
  })
    .rotate()
    .resize({
      width: settings.width,
      height: settings.height,
      fit: settings.fit,
      withoutEnlargement: true
    });

  const webpOptions = settings.lossless
    ? { lossless: true, effort: 6 }
    : {
        quality: settings.quality,
        alphaQuality: 100,
        smartSubsample: settings.smartSubsample ?? true,
        effort: 6
      };

  const info = await pipeline.webp(webpOptions).toFile(absoluteOutput);
  const sourceStat = await fs.stat(absoluteSource);
  const outputStat = await fs.stat(absoluteOutput);

  return {
    source,
    thumbnail: output,
    sourceBytes: sourceStat.size,
    thumbnailBytes: outputStat.size,
    width: info.width,
    height: info.height
  };
}

async function runInBatches(items, worker, batchSize = 4) {
  const results = [];

  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);
    results.push(...await Promise.all(batch.map(worker)));
  }

  return results;
}

function rewriteActiveSegment(segment, catalog) {
  return segment.replace(/<img\b[^>]*>/gi, (tag) => {
    const originalAttribute = attributeValue(tag, "data-original-src");
    const srcAttribute = attributeValue(tag, "src");
    const original = originalAttribute || srcAttribute;

    if (!original || !isSourceRaster(original)) {
      return tag;
    }

    const source = cleanImageReference(original);
    const item = catalog.get(source);
    if (!item) {
      return tag;
    }

    let rewritten = tag;
    rewritten = setAttribute(rewritten, "src", item.thumbnail);
    rewritten = setAttribute(rewritten, "data-original-src", source);
    rewritten = setAttribute(rewritten, "loading", "lazy");
    rewritten = setAttribute(rewritten, "decoding", "async");
    rewritten = setAttribute(rewritten, "width", String(item.width));
    rewritten = setAttribute(rewritten, "height", String(item.height));
    return rewritten;
  });
}

async function rewriteContentFiles(files, items) {
  const catalog = new Map(items.map((item) => [item.source, item]));

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const segments = content.split(/(<!--[\s\S]*?-->)/g);
    const rewritten = segments
      .map((segment, index) => index % 2 === 0 ? rewriteActiveSegment(segment, catalog) : segment)
      .join("");

    if (rewritten !== content) {
      await fs.writeFile(file, rewritten, "utf8");
    }
  }
}

async function rewriteConfigThumbnails(items) {
  const catalog = new Map(items.map((item) => [item.source, item]));
  let config = await fs.readFile(configFile, "utf8");

  for (const key of ["avatar", "wechat_qr"]) {
    const sourceMatch = config.match(
      new RegExp(`^\\s*${key}\\s*:\\s*["']?([^"'#\\s]+)`, "m")
    );
    if (!sourceMatch) {
      continue;
    }

    const item = catalog.get(cleanImageReference(sourceMatch[1]));
    if (!item) {
      continue;
    }

    const thumbnailKey = `${key}_thumbnail`;
    const thumbnailLine = `  ${thumbnailKey}: "${item.thumbnail}"`;
    const existingThumbnail = new RegExp(`^\\s*${thumbnailKey}\\s*:.*$`, "m");

    if (existingThumbnail.test(config)) {
      config = config.replace(existingThumbnail, thumbnailLine);
    } else {
      const sourceLine = new RegExp(`^(\\s*${key}\\s*:.*)$`, "m");
      config = config.replace(sourceLine, `$1\n${thumbnailLine}`);
    }
  }

  await fs.writeFile(configFile, config, "utf8");
}

async function validate(files, sources) {
  const missing = [];
  const invalid = [];
  const directOriginals = [];

  for (const source of sources) {
    const output = thumbnailPathFor(source);
    const absoluteOutput = path.join(projectRoot, ...output.split("/"));
    try {
      await fs.access(absoluteOutput);
      const metadata = await sharp(absoluteOutput).metadata();
      if (metadata.format !== "webp" || !metadata.width || !metadata.height) {
        invalid.push(output);
      }
    } catch {
      missing.push(output);
    }
  }

  for (const file of files) {
    const content = stripHtmlComments(await fs.readFile(file, "utf8"));
    for (const tag of imageTags(content)) {
      const src = attributeValue(tag, "src");
      if (src && isSourceRaster(src)) {
        directOriginals.push(`${toPosix(path.relative(projectRoot, file))}: ${src}`);
      }
    }
  }

  if (missing.length || invalid.length || directOriginals.length) {
    if (missing.length) {
      console.error(`Missing thumbnails:\n${missing.join("\n")}`);
    }
    if (invalid.length) {
      console.error(`Invalid WebP thumbnails:\n${invalid.join("\n")}`);
    }
    if (directOriginals.length) {
      console.error(`Homepage images still loading originals:\n${directOriginals.join("\n")}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Validated ${sources.length} homepage WebP thumbnails.`);
}

const files = await activeContentFiles();
const sources = await collectSources(files);

if (checkOnly) {
  await validate(files, sources);
} else {
  const absoluteThumbnailRoot = path.resolve(
    projectRoot,
    ...thumbnailRoot.split("/")
  );
  const expectedThumbnailRoot = path.resolve(
    projectRoot,
    "Images",
    "Thumbnails"
  );

  if (absoluteThumbnailRoot !== expectedThumbnailRoot) {
    throw new Error(`Refusing to clean unexpected path: ${absoluteThumbnailRoot}`);
  }

  await fs.rm(absoluteThumbnailRoot, { recursive: true, force: true });
  sharp.concurrency(Math.min(4, sharp.concurrency()));
  const items = await runInBatches(sources, generateThumbnail);

  if (shouldRewrite) {
    await rewriteContentFiles(files, items);
    await rewriteConfigThumbnails(items);
  }

  const manifestPath = path.join(projectRoot, ...thumbnailRoot.split("/"), "manifest.json");
  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  await fs.writeFile(
    manifestPath,
    `${JSON.stringify({ version: 1, items }, null, 2)}\n`,
    "utf8"
  );

  const sourceBytes = items.reduce((sum, item) => sum + item.sourceBytes, 0);
  const thumbnailBytes = items.reduce((sum, item) => sum + item.thumbnailBytes, 0);
  const reduction = sourceBytes
    ? ((1 - thumbnailBytes / sourceBytes) * 100).toFixed(1)
    : "0.0";

  console.log(
    `Generated ${items.length} WebP thumbnails: `
    + `${(sourceBytes / 1024 / 1024).toFixed(2)} MB -> `
    + `${(thumbnailBytes / 1024 / 1024).toFixed(2)} MB `
    + `(${reduction}% smaller).`
  );
}
