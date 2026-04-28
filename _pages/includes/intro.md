<style>
:root {
  --page-bg: #f5f7fb;
  --card-bg: rgba(255, 255, 255, 0.92);
  --card-border: rgba(102, 126, 234, 0.12);
  --card-shadow: 0 12px 30px rgba(20, 32, 70, 0.08);
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
  padding: 26px 22px 64px;
}

.page__inner-wrap {
  padding: 0;
}

.page__content {
  font-size: 15px;
}

.hero-card,
.news-panel {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 22px;
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(6px);
}

.hero-card {
  padding: 30px 34px;
  margin-bottom: 26px;
}

.hero-title {
  margin: 0 0 8px;
  font-size: 2.1rem;
  line-height: 1.18;
  color: var(--heading-color);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  margin: 0 0 14px;
  font-size: 1rem;
  color: var(--muted-color);
  font-weight: 600;
}

.hero-description {
  margin: 0;
  color: var(--text-color);
  line-height: 1.95;
}

.section-heading {
  margin: 18px 0 14px;
}

.section-heading__title {
  font-size: 1.35rem;
  margin: 0;
  color: var(--heading-color);
  letter-spacing: -0.01em;
}

.section-heading__title::after {
  content: "";
  display: block;
  width: 64px;
  height: 3px;
  margin-top: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #4d63d2, rgba(77, 99, 210, 0.18));
}

.news-panel {
  max-height: 380px;
  overflow-y: auto;
  padding: 16px 20px;
  margin-bottom: 26px;
  background: linear-gradient(135deg, rgba(244, 248, 255, 0.96) 0%, rgba(233, 242, 255, 0.9) 100%);
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
    padding: 18px 16px 56px;
  }

  .hero-card {
    padding: 24px 20px;
    border-radius: 18px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.6rem;
  }

  .section-heading__title {
    font-size: 1.15rem;
  }

  .news-panel {
    padding: 12px 14px;
    border-radius: 18px;
  }
}
</style>

<span class='anchor' id='about-me'></span>
<div class="hero-card">
  <h1 class="hero-title">Hi! I am Jiaqi Zhang (Chinese name: 张家旗)</h1>
  <p class="hero-subtitle">Undergraduate Student · Jiangsu University</p>
  <p class="hero-description">I am an undergraduate student from the <a href="https://cs.ujs.edu.cn/">School of Computer Science and Communication Engineering</a>, Jiangsu University, majoring in Computer Science and Technology. During my undergraduate studies, my academic advisor was <a href="https://ujsyyoung.github.io/homepage/">Associate Professor Yang Yang</a>, <a href="https://scholar.google.com/citations?user=k32nt3sAAAAJ&hl=zh-TW">Professor Zhe Liu</a>, and <a href="https://scholar.google.com/citations?user=QS9gjHUAAAAJ&hl=zh-TW&oi=sra">Kai Han</a>. I also benefited from the guidance of <a href="https://chenyang10.github.io/chengyang/">Professor Yang Chen</a> and <a href="https://scholar.google.com/citations?user=HTWQB-UAAAAJ&hl=zh-CN&oi=sra">Professor Guangquan Zhou</a>. I am deeply grateful to them for introducing me to the world of research.</p>
</div>

<span class='anchor' id='news'></span>
<div class="section-heading section-heading--news">
  <h2 class="section-heading__title">🔥 News</h2>
</div>

<div class="news-panel" markdown="1">
- *2025.02*: &nbsp;🎉🎉 Our work [PIRP](https://www.sciencedirect.com/science/article/abs/pii/S0950705126002303) has been accepted by **Knowledge-Based Systems**. It is a parameterized image restoration method that combines diffusion and gradient dual priors.
</div>

