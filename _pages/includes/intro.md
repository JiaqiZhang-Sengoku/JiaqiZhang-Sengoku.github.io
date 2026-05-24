<style>
:root {
  --page-bg: #f5f7fb;
  --surface-bg: #ffffff;
  --surface-soft: #f6f8fc;
  --card-bg: rgba(255, 255, 255, 0.94);
  --card-border: rgba(102, 126, 234, 0.12);
  --section-border: #e6ecf7;
  --card-shadow: 0 8px 22px rgba(20, 32, 70, 0.08);
  --card-shadow-hover: 0 16px 34px rgba(20, 32, 70, 0.13);
  --radius-card: 18px;
  --radius-inner: 14px;
  --heading-color: #18233a;
  --text-color: #405066;
  --muted-color: #60708e;
  --accent: #315fd6;
}

body {
  background: radial-gradient(circle at top, #fbfcff 0%, var(--page-bg) 58%, #eef3fb 100%);
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
  backdrop-filter: blur(6px);
}

.hero-card {
  width: min(100%, 1200px);
  margin: 0 auto 18px;
  padding: 24px 28px;
  box-sizing: border-box;
}

.hero-title {
  margin: 0 0 6px;
  font-size: 1.9rem;
  line-height: 1.16;
  color: var(--heading-color);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  margin: 0 0 10px;
  font-size: 0.98rem;
  color: var(--muted-color);
  font-weight: 600;
}

.hero-description {
  margin: 0;
  color: var(--text-color);
  line-height: 1.85;
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
  letter-spacing: -0.01em;
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
  background: linear-gradient(90deg, #4d63d2, rgba(77, 99, 210, 0.18));
}

.news-panel {
  max-height: 340px;
  overflow-y: auto;
  padding: 18px 22px;
  margin-bottom: 20px;
  background: var(--surface-bg);
  border-color: var(--card-border);
}

.news-panel ul {
  margin: 0;
  padding-left: 1.15rem;
}

.news-panel li {
  margin: 0.5rem 0;
  line-height: 1.85;
  color: #36435d;
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
    padding: 20px 18px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .section-heading__title {
    font-size: 1.18rem;
  }

  .section-heading__title::after {
    width: 42px;
  }

  .news-panel {
    padding: 14px 15px;
  }
}
</style>

<div class="hero-card" id="about-me">
  <h1 class="hero-title">Hi! I am Jiaqi Zhang (Chinese name: 张家旗)</h1>
  <p class="hero-subtitle">Undergraduate Student · Jiangsu University</p>
  <p class="hero-description">I am an undergraduate student from the <a href="https://cs.ujs.edu.cn/">School of Computer Science and Communication Engineering</a>, Jiangsu University, majoring in Computer Science and Technology. During my undergraduate studies, my academic advisor was <a href="https://ujsyyoung.github.io/homepage/">Associate Professor Yang Yang</a>, <a href="https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-TW">Professor Zhe Liu</a>, and <a href="https://scholar.google.com/citations?user=QS9gjHUAAAAJ&hl=zh-TW&oi=sra">Kai Han</a>. I also benefited from the guidance of <a href="https://chenyang10.github.io/chengyang/">Professor Yang Chen</a> and <a href="https://scholar.google.com/citations?user=HTWQB-UAAAAJ&hl=zh-CN&oi=sra">Professor Guangquan Zhou</a>. I am deeply grateful to them for introducing me to the world of research.</p>
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

