<style>
:root {
  --page-bg: #f7f8fb;
  --surface-bg: #ffffff;
  --surface-soft: #f3f6fb;
  --card-bg: #ffffff;
  --card-border: #dfe7f3;
  --section-border: #e3e9f2;
  --card-shadow: 0 10px 26px rgba(26, 39, 70, 0.07);
  --card-shadow-hover: 0 16px 34px rgba(26, 39, 70, 0.11);
  --radius-card: 18px;
  --radius-inner: 14px;
  --heading-color: #202b3d;
  --text-color: #3f4c63;
  --muted-color: #66758d;
  --accent: #3b5fc7;
  --accent-soft: rgba(59, 95, 199, 0.11);
}

body {
  background: var(--page-bg);
}

#main {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px 28px;
}

.hero-card {
  margin-top: 0;
}

.hero-card,
.news-panel {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-card);
  box-shadow: var(--card-shadow);
}

.hero-card {
  width: min(100%, 1200px);
  margin: 0 auto 22px;
  padding: 30px 34px;
  box-sizing: border-box;
}

.hero-title {
  margin: 0 0 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--section-border);
  font-size: 1.9rem;
  line-height: 1.16;
  color: var(--heading-color);
  letter-spacing: 0;
}

.hero-subtitle {
  margin: 0 0 10px;
  font-size: 0.98rem;
  color: var(--muted-color);
  font-weight: 600;
}

.hero-description {
  margin: 12px 0 0;
  color: var(--text-color);
  line-height: 1.85;
  max-width: 980px;
}

.section-heading {
  margin: 28px 0 14px;
  padding: 0 0 12px;
  border-bottom: 1px solid var(--section-border);
}

.section-heading__title {
  font-size: 1.45rem;
  margin: 0;
  line-height: 1.25;
  color: var(--heading-color);
  letter-spacing: 0;
  font-weight: 700;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-heading__title {
  display: inline-flex;
  align-items: center;
}

.section-heading__title::after {
  content: "";
  display: inline-block;
  width: 64px;
  height: 3px;
  margin-left: 12px;
  vertical-align: middle;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), rgba(59, 95, 199, 0.18));
}

.news-panel {
  max-height: 340px;
  overflow-y: auto;
  padding: 18px 24px;
  margin-bottom: 20px;
  background: var(--surface-bg);
  border-color: var(--card-border);
}

.news-panel ul {
  margin: 0;
  padding-left: 1.15rem;
}

.news-panel li {
  margin: 0.55rem 0;
  line-height: 1.78;
  color: var(--text-color);
}

.news-panel a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.news-panel a:hover {
  text-decoration: underline;
}

.news-panel ul ul {
  margin-top: 0.35rem;
}

@media (max-width: 900px) {
  #main {
    padding: 14px 16px 40px;
  }

  .hero-card {
    padding: 22px 20px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.45rem;
  }

  .section-heading__title {
    font-size: 1.18rem;
  }

  .section-heading__title::after {
    width: 42px;
  }

  .news-panel {
    padding: 15px;
  }
}
</style>

<div class="hero-card" id="about-me">
  <h1 class="hero-title">Hi! I am Jiaqi Zhang (Chinese name: 张家旗)</h1>
  <p class="hero-subtitle">Undergraduate Student · Jiangsu University</p>
  <p class="hero-description">I am an undergraduate student from the <a href="https://cs.ujs.edu.cn/">School of Computer Science and Communication Engineering</a>, Jiangsu University, majoring in Computer Science and Technology. During my undergraduate studies, my academic advisor was <a href="https://ujsyyoung.github.io/homepage/">Associate Professor Yang Yang</a>. I am deeply grateful to him for introducing me to the world of research.</p>
</div>

<span class='anchor' id='news'></span>
<div class="section-heading section-heading--news">
  <h2 class="section-heading__title">🔥 News</h2>
</div>

<div class="news-panel" markdown="1">
- *2026.05*: &nbsp;🎉🎉 Our work [DPG](https://www.sciencedirect.com/science/article/abs/pii/S0165168426002197) has been accepted by **Signal Processing**.
- *2026.04*: &nbsp;🎉🎉 Three papers have been accepted as **Oral** presentations by **ICIC** 2026!
  - IFCLNet: Intrinsic Feature Consistency Learning Network for Generalizable Medical Image Segmentation.
  - Agent-SAM-I2V: Self-Correcting Framework for Robust Video Segmentation via Agentic Control Layer.
  - Adaptive IQN: Adaptive Risk-Aware Network for Safe, Energy-Efficient Unmanned Surface Vehicle Navigation.
- *2026.02*: &nbsp;🎉🎉 Our work [RRGCL]() has been accepted by **CVPR Finding**.
- *2026.02*: &nbsp;🎉🎉 Our work [PIRP](https://www.sciencedirect.com/science/article/abs/pii/S0950705126002303) has been accepted by **Knowledge-Based Systems**. It is a parameterized image restoration method that combines diffusion and gradient dual priors.
</div>

