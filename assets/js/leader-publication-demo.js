(function () {
  "use strict";

  var assetVersion = "20260818-demo-sync";
  var animationFallbackDelay = 3400;
  var reducedMotionCycleDelay = 3100;
  var holdDelay = 420;
  var retryDelay = 1600;
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
      image.decoding = "async";
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

  function afterNextPaint() {
    return new Promise(function (resolve) {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(resolve);
      });
    });
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
    var fallbackTimer = null;
    var activeCycleId = 0;
    var cycleCompleted = true;
    var transitionToken = 0;
    var isTransitioning = false;
    var restartAfterTransition = false;
    var isNearViewport = !("IntersectionObserver" in window);
    var preloadAllPromise = null;
    var observer = null;
    var disposed = false;
    var reducedMotion = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false };

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

    function decodeDisplayedImages() {
      return Promise.all(Object.keys(images).map(function (key) {
        var image = images[key];
        if (typeof image.decode !== "function") {
          return Promise.resolve();
        }
        return image.decode().catch(function () {
          // The preloader already confirmed the asset; keep the rendered fallback.
        });
      }));
    }

    function canAnimate() {
      return !disposed && isNearViewport && !document.hidden;
    }

    function clearCycleSchedule() {
      window.clearTimeout(cycleTimer);
      window.clearTimeout(fallbackTimer);
      cycleTimer = null;
      fallbackTimer = null;
      activeCycleId += 1;
      cycleCompleted = true;
    }

    function stopCycle() {
      transitionToken += 1;
      restartAfterTransition = false;
      clearCycleSchedule();
      root.classList.remove("is-cycle-running", "is-cycle-reset");
      root.setAttribute("aria-busy", "false");
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
    }

    function finishCycle(cycleId) {
      if (cycleId !== activeCycleId || cycleCompleted || !canAnimate()) {
        return;
      }

      cycleCompleted = true;
      window.clearTimeout(fallbackTimer);
      fallbackTimer = null;
      cycleTimer = window.setTimeout(function () {
        cycleTimer = null;
        advanceDemo();
      }, holdDelay);
    }

    function armCycleCompletion() {
      window.clearTimeout(cycleTimer);
      window.clearTimeout(fallbackTimer);
      cycleTimer = null;
      fallbackTimer = null;

      var cycleId = ++activeCycleId;
      var nextIndex = (currentIndex + 1) % demos.length;
      cycleCompleted = false;

      prepareDemo(demos[nextIndex]).catch(function () {
        // A failed prefetch is retried before the actual swap.
      });

      fallbackTimer = window.setTimeout(function () {
        finishCycle(cycleId);
      }, reducedMotion.matches ? reducedMotionCycleDelay : animationFallbackDelay);
    }

    function activateCycle() {
      if (!canAnimate()) {
        return false;
      }

      root.classList.add("is-cycle-running");
      root.classList.remove("is-cycle-reset");
      root.setAttribute("aria-busy", "false");
      armCycleCompletion();
      return true;
    }

    async function renderCycle(index, updateContent) {
      var token = ++transitionToken;

      try {
        await prepareDemo(demos[index]);
      } catch (error) {
        return false;
      }

      if (token !== transitionToken || !canAnimate()) {
        return false;
      }

      clearCycleSchedule();
      root.setAttribute("aria-busy", "true");
      root.classList.remove("is-cycle-running");
      root.classList.add("is-cycle-reset");
      void root.offsetWidth;

      if (updateContent) {
        applyDemo(index);
      }

      await decodeDisplayedImages();
      await afterNextPaint();

      if (token !== transitionToken || !canAnimate()) {
        if (token === transitionToken) {
          root.classList.remove("is-cycle-reset");
          root.setAttribute("aria-busy", "false");
        }
        return false;
      }

      return activateCycle();
    }

    function queueRetry() {
      window.clearTimeout(cycleTimer);
      if (!canAnimate()) {
        return;
      }
      cycleTimer = window.setTimeout(function () {
        cycleTimer = null;
        startCurrentCycle();
      }, retryDelay);
    }

    async function startCurrentCycle() {
      if (!canAnimate() || root.classList.contains("is-cycle-running")) {
        return;
      }
      if (isTransitioning) {
        restartAfterTransition = true;
        return;
      }

      isTransitioning = true;
      restartAfterTransition = false;
      var started = await renderCycle(currentIndex, false);
      isTransitioning = false;

      if (!started && canAnimate()) {
        if (restartAfterTransition) {
          startCurrentCycle();
        } else {
          queueRetry();
        }
      }
    }

    async function advanceDemo() {
      if (!canAnimate() || isTransitioning) {
        return;
      }

      isTransitioning = true;
      restartAfterTransition = false;
      var switched = false;

      for (var offset = 1; offset <= demos.length; offset += 1) {
        if (!canAnimate()) {
          break;
        }
        var nextIndex = (currentIndex + offset) % demos.length;
        if (await renderCycle(nextIndex, true)) {
          switched = true;
          break;
        }
      }

      isTransitioning = false;
      if (!switched && canAnimate()) {
        if (restartAfterTransition) {
          startCurrentCycle();
        } else {
          queueRetry();
        }
      }
    }

    function warmAndStart() {
      preloadAll();
      if (!canAnimate()) {
        return;
      }
      if (isTransitioning) {
        restartAfterTransition = true;
        return;
      }
      startCurrentCycle();
    }

    images.ours.addEventListener("animationend", function (event) {
      if (event.animationName === "leader-publication-reveal-final") {
        finishCycle(activeCycleId);
      }
    });

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(function (entries) {
        isNearViewport = entries.some(function (entry) {
          return entry.isIntersecting;
        });

        if (isNearViewport) {
          warmAndStart();
        } else {
          stopCycle();
        }
      }, { rootMargin: "180px 0px" });
      observer.observe(root);
    } else {
      warmAndStart();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopCycle();
      } else if (isNearViewport) {
        warmAndStart();
      }
    });

    window.addEventListener("pagehide", function () {
      disposed = true;
      stopCycle();
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
