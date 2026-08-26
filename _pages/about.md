---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include_relative includes/intro.md %}

{% include_relative includes/new.md %}

{% include_relative includes/pub.md %}

<!-- {% include_relative includes/project.md %}
<br> -->

{% include_relative includes/internships.md %}

{% include_relative includes/honers.md %}

<section class="visitor-stats" data-visitor-stats aria-labelledby="visitor-stats-title">
  <header class="visitor-stats__header">
    <div class="visitor-stats__identity">
      <span class="visitor-stats__mark" aria-hidden="true"><i class="fas fa-globe-asia"></i></span>
      <div>
        <span class="visitor-stats__eyebrow">Visitor Footprint</span>
        <h2 class="visitor-stats__title" id="visitor-stats-title">Visits Across Time and Place</h2>
      </div>
    </div>
    <span class="visitor-stats__status"><span class="visitor-stats__status-dot" aria-hidden="true"></span><span data-visitor-status>Connecting</span></span>
  </header>

  <div class="visitor-stats__body">
    <div class="visitor-stats__metrics" aria-label="Cumulative visitor statistics">
      <article class="visitor-stat">
        <span class="visitor-stat__icon" aria-hidden="true"><i class="fas fa-eye"></i></span>
        <div class="visitor-stat__copy">
          <span class="visitor-stat__label">Total Views</span>
          <strong class="visitor-stat__value" id="busuanzi_value_site_pv" data-visitor-value aria-live="polite">--</strong>
          <span class="visitor-stat__hint">Page impressions</span>
        </div>
      </article>
      <article class="visitor-stat">
        <span class="visitor-stat__icon" aria-hidden="true"><i class="fas fa-user-friends"></i></span>
        <div class="visitor-stat__copy">
          <span class="visitor-stat__label">Visitors</span>
          <strong class="visitor-stat__value" id="busuanzi_value_site_uv" data-visitor-value aria-live="polite">--</strong>
          <span class="visitor-stat__hint">Unique readers</span>
        </div>
      </article>
    </div>

    <aside class="visitor-session" aria-label="Current visit details">
      <div class="visitor-session__header">
        <span class="visitor-session__title">Current Visit</span>
        <span class="visitor-session__scope">City-level estimate</span>
      </div>
      <div class="visitor-session__details">
        <div class="visitor-session__detail">
          <span class="visitor-session__icon" aria-hidden="true"><i class="fas fa-clock"></i></span>
          <div>
            <span class="visitor-session__label">Visit Time</span>
            <time class="visitor-session__value" data-visitor-time>Detecting local time...</time>
            <span class="visitor-session__meta" data-visitor-timezone>Local time zone</span>
          </div>
        </div>
        <div class="visitor-session__detail">
          <span class="visitor-session__icon" aria-hidden="true"><i class="fas fa-map-marker-alt"></i></span>
          <div>
            <span class="visitor-session__label">Approx. Location</span>
            <span class="visitor-session__value" data-visitor-location aria-live="polite">Locating...</span>
            <span class="visitor-session__meta">Based on network location</span>
          </div>
        </div>
      </div>
    </aside>
  </div>

  <p class="visitor-stats__note"><span class="visitor-stats__note-line" aria-hidden="true"></span><span>Thank you for following my research journey from around the world.</span></p>
</section>

<script src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js" defer></script>
<script src="/assets/js/visitor-stats.js?v=20260827" defer></script>
