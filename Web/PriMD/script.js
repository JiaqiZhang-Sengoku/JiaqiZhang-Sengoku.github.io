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
