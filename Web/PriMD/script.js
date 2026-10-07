(function () {
  "use strict";

  var button = document.querySelector("[data-copy-bibtex]");
  var code = document.getElementById("bibtex-code");
  var status = document.querySelector("[data-copy-status]");
  var label = button ? button.querySelector("[data-copy-label]") : null;

  if (!button || !code) {
    return;
  }

  function copyFallback(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(field);
    return copied ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
  }

  function setButtonState(copied) {
    if (label) {
      label.textContent = copied ? "Copied" : "Copy";
    }
    button.classList.toggle("is-copied", copied);
  }

  button.addEventListener("click", function () {
    var text = code.textContent;
    var request = navigator.clipboard && window.isSecureContext
      ? navigator.clipboard.writeText(text)
      : copyFallback(text);

    request.then(function () {
      setButtonState(true);
      if (status) {
        status.textContent = "BibTeX copied to clipboard.";
      }
      window.setTimeout(function () {
        setButtonState(false);
        if (status) {
          status.textContent = "";
        }
      }, 1800);
    }).catch(function () {
      if (status) {
        status.textContent = "Select the BibTeX text and copy it manually.";
      }
    });
  });
}());

(function () {
  "use strict";

  var modal = document.getElementById("poster-modal");
  var openButton = document.querySelector("[data-poster-open]");
  var image = document.querySelector("[data-poster-image]");
  var imageSource = image ? image.getAttribute("data-poster-src") : null;
  var zoomValue = document.querySelector("[data-poster-zoom-value]");
  var zoomIn = document.querySelector("[data-poster-zoom-in]");
  var zoomOut = document.querySelector("[data-poster-zoom-out]");
  var zoomReset = document.querySelector("[data-poster-zoom-reset]");
  var closeButtons = document.querySelectorAll("[data-poster-close]");
  var viewport = document.querySelector("[data-poster-viewport]");
  var zoom = 1;
  var opener = null;

  if (!modal || !openButton || !image) {
    return;
  }

  function updateZoom() {
    var availableWidth = viewport ? viewport.clientWidth - 44 : 780;
    var baseWidth = Math.min(780, Math.max(240, availableWidth));
    image.style.width = Math.round(baseWidth * zoom) + "px";
    if (zoomValue) {
      zoomValue.textContent = Math.round(zoom * 100) + "%";
    }
  }

  function setOpen(open) {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("poster-modal-open", open);
    if (open) {
      opener = document.activeElement;
      if (imageSource && !image.getAttribute("src")) {
        image.setAttribute("src", imageSource);
      }
      zoom = 1;
      updateZoom();
      window.setTimeout(function () {
        var close = modal.querySelector(".poster-modal__control--close");
        if (close) {
          close.focus();
        }
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

  openButton.addEventListener("click", function () {
    history.replaceState(null, "", window.location.pathname + window.location.search + "#poster-preview");
    setOpen(true);
  });

  Array.prototype.forEach.call(closeButtons, function (button) {
    button.addEventListener("click", function () {
      setOpen(false);
      if (window.location.hash === "#poster-preview") {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    });
  });

  if (zoomIn) {
    zoomIn.addEventListener("click", function () { changeZoom(0.2); });
  }
  if (zoomOut) {
    zoomOut.addEventListener("click", function () { changeZoom(-0.2); });
  }
  if (zoomReset) {
    zoomReset.addEventListener("click", function () {
      applyZoom(1);
    });
  }

  if (viewport) {
    viewport.addEventListener("wheel", function (event) {
      if (!event.ctrlKey) return;
      event.preventDefault();
      var factor = event.deltaY < 0 ? 1.15 : 1 / 1.15;
      applyZoom(zoom * factor, event);
    }, { passive: false });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      setOpen(false);
      if (window.location.hash === "#poster-preview") {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  });

  window.addEventListener("resize", updateZoom);

  if (window.location.hash === "#poster-preview") {
    setOpen(true);
  }
}());
