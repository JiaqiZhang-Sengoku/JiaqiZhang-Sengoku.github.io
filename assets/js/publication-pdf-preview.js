import * as pdfjsLib from "./vendor/pdfjs/pdf.min.js";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "./vendor/pdfjs/pdf.worker.min.js",
  import.meta.url,
).href;

const MAX_PIXEL_RATIO = 3;

async function initializePreview(canvas) {
  const source = canvas.dataset.pdfSrc;
  const frame = canvas.closest(".paper-box-image > div");

  if (!source || !frame) return;

  const documentTask = pdfjsLib.getDocument(source);
  const pdf = await documentTask.promise;
  const page = await pdf.getPage(1);
  const baseViewport = page.getViewport({ scale: 1 });
  let renderTask = null;
  let renderTimer = null;

  const render = async () => {
    const displayedWidth = canvas.getBoundingClientRect().width;
    if (!displayedWidth) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
    const viewport = page.getViewport({
      scale: (displayedWidth * pixelRatio) / baseViewport.width,
    });

    if (renderTask) renderTask.cancel();

    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext("2d", { alpha: false });
    const currentTask = page.render({ canvasContext: context, viewport });
    renderTask = currentTask;

    try {
      await currentTask.promise;
      canvas.classList.add("is-ready");
    } catch (error) {
      if (error?.name !== "RenderingCancelledException") throw error;
    } finally {
      if (renderTask === currentTask) renderTask = null;
    }
  };

  const scheduleRender = () => {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(() => {
      window.requestAnimationFrame(() => void render());
    }, 30);
  };

  await render();

  frame.addEventListener("pointerenter", scheduleRender, { passive: true });
  frame.addEventListener("pointerleave", scheduleRender, { passive: true });
  window.addEventListener("resize", scheduleRender, { passive: true });
}

document.querySelectorAll(".paper-pdf-preview").forEach((canvas) => {
  initializePreview(canvas).catch((error) => {
    console.warn("Unable to render publication PDF preview.", error);
  });
});
