(function () {
  "use strict";

  var lab = document.querySelector("[data-modality-lab]");
  var copyButton = document.querySelector("[data-copy-bibtex]");

  if (lab) {
    var toggles = Array.prototype.slice.call(lab.querySelectorAll("[data-modality]"));
    var summary = lab.querySelector("[data-modality-summary]");
    var output = lab.querySelector("[data-output-label]");
    var memory = lab.querySelector("[data-memory-stage]");
    var labels = {
      text: "text",
      audio: "audio",
      video: "video"
    };

    function listWords(words) {
      if (words.length < 2) {
        return words[0] || "";
      }
      if (words.length === 2) {
        return words[0] + " and " + words[1];
      }
      return words.slice(0, -1).join(", ") + ", and " + words[words.length - 1];
    }

    function renderLab() {
      var observed = [];
      var missing = [];

      toggles.forEach(function (toggle) {
        var name = toggle.dataset.modality;
        var isObserved = toggle.getAttribute("aria-pressed") === "true";
        toggle.classList.toggle("is-missing", !isObserved);
        toggle.querySelector(".modality-status").textContent = isObserved ? "Observed" : "Missing";
        (isObserved ? observed : missing).push(labels[name]);
      });

      if (missing.length === 0) {
        summary.textContent = "With all modalities observed, the teacher disentangles shared semantics and builds modality-specific primitive memories.";
        output.textContent = "Full-modality representation";
        memory.classList.remove("is-active");
        return;
      }

      summary.textContent = "With " + listWords(missing) + " missing, PriMD uses the shared semantics of " + listWords(observed) + " to retrieve constrained " + listWords(missing) + " primitives.";
      output.textContent = missing.length === 1 ? "Constrained compensation" : "Joint compensation";
      memory.classList.add("is-active");
    }

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var isObserved = toggle.getAttribute("aria-pressed") === "true";
        var observedCount = toggles.filter(function (item) {
          return item.getAttribute("aria-pressed") === "true";
        }).length;

        if (isObserved && observedCount === 1) {
          return;
        }

        toggle.setAttribute("aria-pressed", String(!isObserved));
        renderLab();
      });
    });

    renderLab();
  }

  if (copyButton) {
    var code = document.getElementById("bibtex-code");
    var status = document.querySelector("[data-copy-status]");

    function setCopyStatus(message) {
      status.textContent = message;
      window.setTimeout(function () {
        if (status.textContent === message) {
          status.textContent = "";
        }
      }, 2400);
    }

    copyButton.addEventListener("click", function () {
      var text = code.textContent;
      var request = navigator.clipboard && window.isSecureContext
        ? navigator.clipboard.writeText(text)
        : new Promise(function (resolve, reject) {
            var textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.setAttribute("readonly", "");
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            try {
              document.execCommand("copy") ? resolve() : reject(new Error("Copy failed"));
            } catch (error) {
              reject(error);
            }
            textarea.remove();
          });

      request.then(function () {
        copyButton.textContent = "Copied";
        setCopyStatus("BibTeX copied to clipboard.");
        window.setTimeout(function () {
          copyButton.textContent = "Copy BibTeX";
        }, 1800);
      }).catch(function () {
        setCopyStatus("Select the citation text to copy it.");
      });
    });
  }

  if ("IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    var sections = navLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    }).filter(Boolean);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        navLinks.forEach(function (link) {
          var isActive = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, {
      rootMargin: "-22% 0px -68% 0px",
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
}());
