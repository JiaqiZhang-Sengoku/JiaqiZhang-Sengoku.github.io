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
      zoom = 1;
      updateZoom();
      window.setTimeout(function () {
        var close = modal.querySelector("[data-poster-close].publication-poster-modal__control");
        if (close) close.focus();
      }, 0);
    } else if (opener && typeof opener.focus === "function") {
      opener.focus();
    }
  }

  function changeZoom(amount) {
    zoom = Math.min(2.6, Math.max(0.6, +(zoom + amount).toFixed(2)));
    updateZoom();
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
    zoom = 1;
    updateZoom();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) setOpen(false);
  });

  window.addEventListener("resize", updateZoom);
}());
