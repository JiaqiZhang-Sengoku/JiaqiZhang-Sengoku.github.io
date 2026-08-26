(function () {
  "use strict";

  var assetVersion = "20260818-demo-sync";
  var cycleDelay = 2800;
  var methods = ["ProDiff", "ProDiff", "DDNM", "DDPG", "SITCOM"];
  var preloadCache = new Map();

  function assetPath(group, index) {
    return "/Web/LEADer/Figures/" + group + "/" + index + ".webp?v=" + assetVersion;
  }

  var demos = methods.map(function (method, offset) {
    var index = offset + 1;
    return {
      method: method,
      input: assetPath("Input", index),
      baseline: assetPath("Others", index),
      leader: assetPath("Ours", index)
    };
  });

  function preloadImage(url) {
    if (preloadCache.has(url)) {
      return preloadCache.get(url);
    }

    var request = new Promise(function (resolve, reject) {
      var image = new Image();
      image.onload = async function () {
        try {
          if (typeof image.decode === "function") {
            await image.decode();
          }
        } catch (error) {
          // Loading succeeded; decoding can safely fall back to the browser.
        }
        resolve(url);
      };
      image.onerror = function () {
        reject(new Error("Unable to load LEADer demo asset: " + url));
      };
      image.src = url;
    });

    preloadCache.set(url, request);
    request.catch(function () {
      preloadCache.delete(url);
    });
    return request;
  }

  function initializeDemo(root) {
    if (root.dataset.leaderDemoInitialized === "true") {
      return;
    }

    var images = {
      input: root.querySelector('[data-leader-demo-image="input"]'),
      middleFrom: root.querySelector('[data-leader-demo-image="middle-from"]'),
      baseline: root.querySelector('[data-leader-demo-image="baseline"]'),
      finalFrom: root.querySelector('[data-leader-demo-image="final-from"]'),
      ours: root.querySelector('[data-leader-demo-image="ours"]')
    };
    var baselineLabel = root.querySelector("[data-leader-demo-label]");

    if (!images.input || !images.middleFrom || !images.baseline || !images.finalFrom || !images.ours || !baselineLabel) {
      return;
    }

    root.dataset.leaderDemoInitialized = "true";

    var currentIndex = 0;
    var cycleTimer = null;
    var transitionToken = 0;
    var isNearViewport = !("IntersectionObserver" in window);
    var preloadAllPromise = null;
    var observer = null;

    function prepareDemo(demo) {
      return Promise.all([
        preloadImage(demo.input),
        preloadImage(demo.baseline),
        preloadImage(demo.leader)
      ]);
    }

    function preloadAll() {
      if (!preloadAllPromise) {
        preloadAllPromise = Promise.allSettled(demos.reduce(function (urls, demo) {
          return urls.concat([demo.input, demo.baseline, demo.leader]);
        }, []).map(preloadImage));
      }
      return preloadAllPromise;
    }

    function canAnimate() {
      return isNearViewport && !document.hidden;
    }

    function restartRevealAnimations() {
      root.querySelectorAll(".leader-publication-demo__reveal").forEach(function (image) {
        image.style.animation = "none";
        void image.offsetWidth;
        image.style.animation = "";
      });
    }

    function applyDemo(index) {
      var demo = demos[index];
      images.input.src = demo.input;
      images.input.alt = "Degraded input for the " + demo.method + " example";
      images.middleFrom.src = demo.input;
      images.middleFrom.alt = "Input before " + demo.method + " restoration";
      images.baseline.src = demo.baseline;
      images.baseline.alt = "Restoration produced by " + demo.method;
      images.finalFrom.src = demo.baseline;
      images.finalFrom.alt = demo.method + " restoration before LEADer refinement";
      images.ours.src = demo.leader;
      images.ours.alt = demo.method + " enhanced with LEADer";
      baselineLabel.textContent = demo.method;
      root.dataset.demoIndex = String(index + 1);
      currentIndex = index;
      restartRevealAnimations();
    }

    async function showDemo(index) {
      var token = ++transitionToken;
      root.classList.add("is-preparing");
      root.setAttribute("aria-busy", "true");

      try {
        await prepareDemo(demos[index]);
      } catch (error) {
        if (token === transitionToken) {
          root.classList.remove("is-preparing");
          root.setAttribute("aria-busy", "false");
        }
        return false;
      }

      if (token !== transitionToken || !canAnimate()) {
        root.classList.remove("is-preparing");
        root.setAttribute("aria-busy", "false");
        return false;
      }

      await new Promise(function (resolve) {
        window.requestAnimationFrame(resolve);
      });

      if (token !== transitionToken || !canAnimate()) {
        root.classList.remove("is-preparing");
        root.setAttribute("aria-busy", "false");
        return false;
      }

      applyDemo(index);

      await new Promise(function (resolve) {
        window.requestAnimationFrame(resolve);
      });

      if (token === transitionToken) {
        root.classList.remove("is-preparing");
        root.setAttribute("aria-busy", "false");
      }
      return true;
    }

    function scheduleNext() {
      window.clearTimeout(cycleTimer);
      if (!canAnimate()) {
        return;
      }
      cycleTimer = window.setTimeout(advanceDemo, cycleDelay);
    }

    async function advanceDemo() {
      if (!canAnimate()) {
        return;
      }

      for (var offset = 1; offset <= demos.length; offset += 1) {
        if (!canAnimate()) {
          break;
        }
        var nextIndex = (currentIndex + offset) % demos.length;
        if (await showDemo(nextIndex)) {
          break;
        }
      }
      scheduleNext();
    }

    function warmAndSchedule() {
      preloadAll().then(scheduleNext);
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(function (entries) {
        isNearViewport = entries.some(function (entry) {
          return entry.isIntersecting;
        });

        if (isNearViewport) {
          warmAndSchedule();
        } else {
          window.clearTimeout(cycleTimer);
        }
      }, { rootMargin: "180px 0px" });
      observer.observe(root);
    } else {
      warmAndSchedule();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        window.clearTimeout(cycleTimer);
      } else if (isNearViewport) {
        warmAndSchedule();
      }
    });

    window.addEventListener("pagehide", function () {
      window.clearTimeout(cycleTimer);
      if (observer) {
        observer.disconnect();
      }
    });
  }

  function initializeAll() {
    document.querySelectorAll("[data-leader-publication-demo]").forEach(initializeDemo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAll, { once: true });
  } else {
    initializeAll();
  }
}());
