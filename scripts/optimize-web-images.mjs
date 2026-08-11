import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const projectRoot = process.cwd();
const assetRoots = ["Images", "Web"];
const obsoleteThumbnailRoot = "Images/Thumbnails";
const protectedPdfs = new Set(["Images/CV.pdf"]);
const rasterExtensions = new Set([".png", ".jpg", ".jpeg"]);
const textExtensions = new Set([
  ".css", ".html", ".js", ".json", ".md", ".mjs", ".scss",
  ".txt", ".webmanifest", ".xml", ".yaml", ".yml"
]);
const ignoredDirectories = new Set([
  ".git", ".jekyll-cache", ".sass-cache", "_site", "node_modules"
]);
const shouldWrite = process.argv.includes("--write");
const checkOnly = process.argv.includes("--check");

if (shouldWrite === checkOnly) {
  throw new Error("Use exactly one mode: --write or --check.");
}

function toPosix(value) {
  return value.replaceAll("\\", "/");
}

function absolutePath(relativePath) {
  return path.join(projectRoot, ...relativePath.split("/"));
}

function relativePath(absoluteFile) {
  return toPosix(path.relative(projectRoot, absoluteFile));
}

async function exists(relativeFile) {
  try {
    await fs.access(absolutePath(relativeFile));
    return true;
  } catch {
    return false;
  }
}

async function walk(absoluteDirectory, options = {}) {
  const files = [];
  const entries = await fs.readdir(absoluteDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) {
      continue;
    }

    const absoluteEntry = path.join(absoluteDirectory, entry.name);
    const relativeEntry = relativePath(absoluteEntry);
    if (options.skip?.(relativeEntry, entry)) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...await walk(absoluteEntry, options));
    } else if (entry.isFile()) {
      files.push(relativeEntry);
    }
  }

  return files;
}

function isRaster(relativeFile) {
  return rasterExtensions.has(path.posix.extname(relativeFile).toLowerCase());
}

function isVisualPdf(relativeFile) {
  return path.posix.extname(relativeFile).toLowerCase() === ".pdf"
    && !protectedPdfs.has(relativeFile)
    && (relativeFile.startsWith("Images/") || relativeFile.startsWith("Web/"));
}

function isVisualSvg(relativeFile) {
  return /^Web\/LEADer\/Figures\/PaperTable\d+\.svg$/i.test(relativeFile);
}

function stemFor(relativeFile) {
  const parsed = path.posix.parse(relativeFile);
  return path.posix.join(parsed.dir, parsed.name);
}

function settingsFor(relativeFile) {
  if (/^Images\/(?:android-chrome-|apple-touch-icon|favicon-)/i.test(relativeFile)) {
    return { width: 512, height: 512, quality: 100, lossless: true };
  }

  if (/^Images\/profile\.(?:png|jpe?g|pdf)$/i.test(relativeFile)) {
    return { width: 384, height: 384, quality: 88 };
  }

  if (relativeFile.startsWith("Images/Contact/")) {
    return { width: 640, height: 640, quality: 95, smartSubsample: false };
  }

  if (relativeFile.startsWith("Images/Logos/")) {
    return { width: 512, height: 512, quality: 92 };
  }

  if (relativeFile.startsWith("Images/Award/")) {
    return { width: 900, height: 1260, quality: 84 };
  }

  if (relativeFile === "Images/Publication/LEADer.webp") {
    return { width: 1800, height: 1200, quality: 88 };
  }

  if (relativeFile.startsWith("Images/Publication/")) {
    return { width: 1200, height: 900, quality: 86 };
  }

  if (relativeFile.startsWith("Images/Projects/") || relativeFile.startsWith("Images/Soft/")) {
    return { width: 1400, height: 1000, quality: 86 };
  }

  if (/^Web\/LEADer\/Figures\/(?:Input|Others|Ours)\//.test(relativeFile)) {
    return { width: 1024, height: 1024, quality: 90 };
  }

  if (/^Web\/LEADer\/Figures\/PaperTable/i.test(relativeFile)) {
    return { width: 2200, height: 1800, quality: 90 };
  }

  if (relativeFile === "Web/LEADer/Figures/HeroBackground.webp") {
    return { width: 1920, height: 1200, quality: 88 };
  }

  if (relativeFile.startsWith("Web/LEADer/Figures/")) {
    return { width: 2000, height: 1600, quality: 89 };
  }

  return { width: 1600, height: 1200, quality: 86 };
}

async function collectAssetSources() {
  const files = [];

  for (const root of assetRoots) {
    const absoluteRoot = absolutePath(root);
    files.push(...await walk(absoluteRoot, {
      skip: (relativeEntry, entry) => entry.isDirectory()
        && relativeEntry === obsoleteThumbnailRoot
    }));
  }

  return files.filter((file) => isRaster(file) || isVisualPdf(file) || isVisualSvg(file)).sort();
}

function buildCatalog(sources) {
  const rasters = sources.filter((source) => isRaster(source) || isVisualSvg(source));
  const rasterGroups = new Map();

  for (const source of rasters) {
    const stem = stemFor(source).toLowerCase();
    const group = rasterGroups.get(stem) || [];
    group.push(source);
    rasterGroups.set(stem, group);
  }

  const outputBySource = new Map();
  for (const source of rasters) {
    const parsed = path.posix.parse(source);
    const group = rasterGroups.get(stemFor(source).toLowerCase());
    const extensionSuffix = group.length > 1
      ? `-${parsed.ext.slice(1).toLowerCase()}`
      : "";
    outputBySource.set(
      source,
      path.posix.join(parsed.dir, `${parsed.name}${extensionSuffix}.webp`)
    );
  }

  for (const source of sources.filter(isVisualPdf)) {
    const matchingRasters = rasterGroups.get(stemFor(source).toLowerCase()) || [];
    if (matchingRasters.length === 1) {
      outputBySource.set(source, outputBySource.get(matchingRasters[0]));
      continue;
    }

    const parsed = path.posix.parse(source);
    const suffix = matchingRasters.length > 1 ? "-pdf" : "";
    outputBySource.set(source, path.posix.join(parsed.dir, `${parsed.name}${suffix}.webp`));
  }

  return outputBySource;
}

async function pdfPageBuffer(source, settings) {
  const canvasModule = await import("@napi-rs/canvas");
  globalThis.DOMMatrix = globalThis.DOMMatrix || canvasModule.DOMMatrix;
  globalThis.ImageData = globalThis.ImageData || canvasModule.ImageData;
  globalThis.Path2D = globalThis.Path2D || canvasModule.Path2D;

  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = new Uint8Array(await fs.readFile(absolutePath(source)));
  const canvasFactory = {
    create(width, height) {
      const canvas = canvasModule.createCanvas(width, height);
      return { canvas, context: canvas.getContext("2d") };
    },
    reset(target, width, height) {
      target.canvas.width = width;
      target.canvas.height = height;
    },
    destroy(target) {
      target.canvas.width = 0;
      target.canvas.height = 0;
      target.canvas = null;
      target.context = null;
    }
  };

  const document = await pdfjs.getDocument({
    data,
    canvasFactory,
    disableWorker: true,
    useSystemFonts: true,
    verbosity: 0
  }).promise;

  try {
    const page = await document.getPage(1);
    const baseViewport = page.getViewport({ scale: 1 });
    const targetWidth = settings.width || 1600;
    const scale = Math.max(1, Math.min(4, targetWidth / baseViewport.width));
    const viewport = page.getViewport({ scale });
    const canvas = canvasModule.createCanvas(
      Math.ceil(viewport.width),
      Math.ceil(viewport.height)
    );
    await page.render({
      canvasContext: canvas.getContext("2d"),
      viewport
    }).promise;
    return await canvas.encode("png");
  } finally {
    await document.destroy();
  }
}

async function convertSource(source, output) {
  const settings = settingsFor(source);
  const input = isVisualPdf(source)
    ? await pdfPageBuffer(source, settings)
    : absolutePath(source);
  const absoluteOutput = absolutePath(output);
  await fs.mkdir(path.dirname(absoluteOutput), { recursive: true });

  const pipeline = sharp(input, {
    limitInputPixels: false,
    sequentialRead: true
  })
    .rotate()
    .resize({
      width: settings.width,
      height: settings.height,
      fit: "inside",
      withoutEnlargement: !(isVisualPdf(source) || isVisualSvg(source))
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
  const sourceStat = await fs.stat(absolutePath(source));
  const outputStat = await fs.stat(absoluteOutput);
  return {
    source,
    output,
    sourceBytes: sourceStat.size,
    outputBytes: outputStat.size,
    width: info.width,
    height: info.height
  };
}

async function runInBatches(items, worker, batchSize = 3) {
  const results = [];
  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);
    results.push(...await Promise.all(batch.map(worker)));
  }
  return results;
}

async function oldThumbnailMappings(outputBySource) {
  const mappings = new Map();
  const manifest = `${obsoleteThumbnailRoot}/manifest.json`;
  if (!await exists(manifest)) {
    return mappings;
  }

  const data = JSON.parse(await fs.readFile(absolutePath(manifest), "utf8"));
  for (const item of data.items || []) {
    const output = outputBySource.get(item.source);
    if (output) {
      mappings.set(item.thumbnail, output);
    }
  }
  return mappings;
}

async function textFiles() {
  const files = await walk(projectRoot);
  return files.filter((file) => textExtensions.has(path.posix.extname(file).toLowerCase()));
}

async function rewriteReferences(outputBySource) {
  const mappings = new Map(outputBySource);
  for (const [oldThumbnail, output] of await oldThumbnailMappings(outputBySource)) {
    mappings.set(oldThumbnail, output);
  }
  const replacements = [...mappings.entries()].sort((left, right) => right[0].length - left[0].length);

  for (const file of await textFiles()) {
    if (file === "scripts/optimize-web-images.mjs") {
      continue;
    }
    let content = await fs.readFile(absolutePath(file), "utf8");
    const original = content;
    for (const [source, output] of replacements) {
      content = content.replaceAll(source, output);
    }
    content = content.replace(/\sdata-original-src\s*=\s*(["']).*?\1/gi, "");
    content = content.replace(
      /(Web\/LEADer\/Figures\/(?:Input|Others|Ours)\/\$\{index\})\.png/g,
      "$1.webp"
    );

    if (content !== original) {
      await fs.writeFile(absolutePath(file), content, "utf8");
    }
  }
}

async function validateGeneratedOutputs(outputBySource) {
  const failures = [];
  for (const output of new Set(outputBySource.values())) {
    try {
      const metadata = await sharp(absolutePath(output)).metadata();
      if (metadata.format !== "webp" || !metadata.width || !metadata.height) {
        failures.push(output);
      }
    } catch {
      failures.push(output);
    }
  }
  if (failures.length) {
    throw new Error(`Invalid generated WebP files:\n${failures.join("\n")}`);
  }
}

async function validateRepository() {
  const sourceAssets = await collectAssetSources();
  const errors = [];
  if (sourceAssets.length) {
    errors.push(`Unconverted source images:\n${sourceAssets.join("\n")}`);
  }
  if (await exists(obsoleteThumbnailRoot)) {
    errors.push(`Obsolete directory still exists: ${obsoleteThumbnailRoot}`);
  }

  const missingReferences = [];
  const legacyReferences = [];
  const referencePattern = /\/?(?:Images|Web)\/[^"'()<>\s?#]+\.(?:png|jpe?g)/gi;
  const webpPattern = /\/?(?:Images|Web)\/[^"'()<>\s?#]+\.webp/gi;
  for (const file of await textFiles()) {
    if (file === "scripts/optimize-web-images.mjs") {
      continue;
    }
    const content = await fs.readFile(absolutePath(file), "utf8");
    for (const match of content.matchAll(referencePattern)) {
      legacyReferences.push(`${file}: ${match[0]}`);
    }
    for (const match of content.matchAll(webpPattern)) {
      const reference = match[0].replace(/^\//, "");
      if (!reference.includes("${") && !await exists(reference)) {
        missingReferences.push(`${file}: ${match[0]}`);
      }
    }
  }

  if (legacyReferences.length) {
    errors.push(`Legacy raster references:\n${legacyReferences.join("\n")}`);
  }
  if (missingReferences.length) {
    errors.push(`Missing WebP references:\n${missingReferences.join("\n")}`);
  }

  const webpFiles = [];
  for (const root of assetRoots) {
    const files = await walk(absolutePath(root));
    webpFiles.push(...files.filter((file) => path.posix.extname(file).toLowerCase() === ".webp"));
  }
  const invalidWebps = [];
  await runInBatches(webpFiles, async (file) => {
    try {
      const metadata = await sharp(absolutePath(file)).metadata();
      if (metadata.format !== "webp" || !metadata.width || !metadata.height) {
        invalidWebps.push(file);
      }
    } catch {
      invalidWebps.push(file);
    }
  }, 6);
  if (invalidWebps.length) {
    errors.push(`Invalid WebP assets:\n${invalidWebps.join("\n")}`);
  }

  if (errors.length) {
    throw new Error(errors.join("\n\n"));
  }
  console.log(`Validated ${webpFiles.length} WebP assets with no legacy image references.`);
}

if (checkOnly) {
  await validateRepository();
} else {
  const sources = await collectAssetSources();
  const outputBySource = buildCatalog(sources);
  const conversionJobs = [...outputBySource.entries()].filter(([source]) => {
    if (!isVisualPdf(source)) {
      return true;
    }
    const rasterWithSameOutput = [...outputBySource.entries()].some(
      ([candidate, output]) => (isRaster(candidate) || isVisualSvg(candidate))
        && output === outputBySource.get(source)
    );
    return !rasterWithSameOutput;
  });

  sharp.concurrency(Math.min(4, sharp.concurrency()));
  const converted = await runInBatches(
    conversionJobs,
    ([source, output]) => convertSource(source, output)
  );
  await validateGeneratedOutputs(outputBySource);
  await rewriteReferences(outputBySource);

  for (const source of sources) {
    await fs.rm(absolutePath(source), { force: true });
  }
  await fs.rm(absolutePath(obsoleteThumbnailRoot), { recursive: true, force: true });
  await validateRepository();

  const sourceBytes = converted.reduce((sum, item) => sum + item.sourceBytes, 0);
  const outputBytes = converted.reduce((sum, item) => sum + item.outputBytes, 0);
  const reduction = sourceBytes
    ? ((1 - outputBytes / sourceBytes) * 100).toFixed(1)
    : "0.0";
  console.log(
    `Converted ${converted.length} source images: `
    + `${(sourceBytes / 1024 / 1024).toFixed(2)} MB -> `
    + `${(outputBytes / 1024 / 1024).toFixed(2)} MB `
    + `(${reduction}% smaller).`
  );
}
