(function () {
  "use strict";

  var modal = document.querySelector("[data-publication-poster-modal]");
  var openButtons = document.querySelectorAll("[data-poster-open]");
  var image = modal ? modal.querySelector("[data-poster-image]") : null;
  var title = modal ? modal.querySelector("[data-poster-title]") : null;
  var zoomValue = modal ? modal.querySelector("[data-poster-zoom-value]") : null;
  var viewport = modal ? modal.querySelector("[data-poster-viewport]") : null;
  var zoom = 1;
  var source = "";
  var opener = null;

  if (!modal || !image || !openButtons.length) return;

  function updateZoom() {
    var availableWidth = viewport ? viewport.clientWidth - 44 : 780;
    var baseWidth = Math.min(780, Math.max(240, availableWidth));
    image.style.width = Math.round(baseWidth * zoom) + "px";
    if (zoomValue) zoomValue.textContent = Math.round(zoom * 100) + "%";
  }

  function setOpen(open) {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("publication-poster-modal-open", open);
    if (open) {
      opener = document.activeElement;
      image.setAttribute("src", source);
      applyZoom(1);
      window.setTimeout(function () {
        var close = modal.querySelector("[data-poster-close].publication-poster-modal__control");
        if (close) close.focus();
      }, 0);
    } else if (opener && typeof opener.focus === "function") {
      opener.focus();
    }
  }

  function applyZoom(nextZoom, pointer) {
    var oldWidth = image.offsetWidth;
    var oldHeight = image.offsetHeight;
    var oldLeft = image.offsetLeft;
    var oldTop = image.offsetTop;
    var viewportRect = viewport ? viewport.getBoundingClientRect() : null;
    var pointX = pointer && viewportRect ? pointer.clientX - viewportRect.left + viewport.scrollLeft : null;
    var pointY = pointer && viewportRect ? pointer.clientY - viewportRect.top + viewport.scrollTop : null;
    var ratioX = pointX !== null && oldWidth ? (pointX - oldLeft) / oldWidth : 0.5;
    var ratioY = pointY !== null && oldHeight ? (pointY - oldTop) / oldHeight : 0.5;

    zoom = Math.min(2.6, Math.max(0.6, +nextZoom.toFixed(2)));
    updateZoom();

    if (pointer && viewportRect && viewport) {
      var nextLeft = image.offsetLeft + ratioX * image.offsetWidth - (pointer.clientX - viewportRect.left);
      var nextTop = image.offsetTop + ratioY * image.offsetHeight - (pointer.clientY - viewportRect.top);
      viewport.scrollLeft = Math.max(0, nextLeft);
      viewport.scrollTop = Math.max(0, nextTop);
    }
  }

  function changeZoom(amount) {
    applyZoom(zoom + amount);
  }

  Array.prototype.forEach.call(openButtons, function (button) {
    button.addEventListener("click", function () {
      source = button.getAttribute("data-poster-src") || "";
      if (title) title.textContent = button.getAttribute("data-poster-title") || "Poster";
      setOpen(true);
    });
  });

  Array.prototype.forEach.call(modal.querySelectorAll("[data-poster-close]"), function (button) {
    button.addEventListener("click", function () { setOpen(false); });
  });

  modal.querySelector("[data-poster-zoom-in]")?.addEventListener("click", function () { changeZoom(0.2); });
  modal.querySelector("[data-poster-zoom-out]")?.addEventListener("click", function () { changeZoom(-0.2); });
  modal.querySelector("[data-poster-zoom-reset]")?.addEventListener("click", function () {
    applyZoom(1);
  });

  if (viewport) {
    viewport.addEventListener("wheel", function (event) {
      if (!event.ctrlKey) return;
      event.preventDefault();
      var factor = event.deltaY < 0 ? 1.15 : 1 / 1.15;
      applyZoom(zoom * factor, event);
    }, { passive: false });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) setOpen(false);
  });

  window.addEventListener("resize", updateZoom);
}());
