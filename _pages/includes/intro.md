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
- *2026.04*: &nbsp;🎉🎉 Our work [ProgressLM](https://progresslm.github.io/ProgressLM/) on General Reward Model for Embodied Agents has been accepted to ***ACL 2026 Main Conference*** and ***ICLR 2026 Workshop on World Models***!
- *2026.02*: &nbsp;🎉🎉 Our work [fMRI-LM](https://arxiv.org/abs/2511.21760) on Medical Foundation Models has been accepted by ***CVPR 2026***!
- *2026.01*: &nbsp;🎉🎉 Three first/co-first author papers have been accepted by ***ICLR 2026***!
  - [DecAlign](https://arxiv.org/abs/2503.11892): Aligning Cross-Modal Semantics for Multimodal Foundation Models
  - [AutoDrive-R²](https://arxiv.org/abs/2509.01944v2): Towards Physical-Grounded Multimodal Reasoning for Autonomous Driving
  - [Video-STAR](https://arxiv.org/abs/2510.08480): Tool-Augmented Agentic RL for Thinking with Videos
- *2026.01*: &nbsp;🎉🎉 We propose [ProgressLM](https://progresslm.github.io/ProgressLM/), which further investigates whether VLMs can acquire human-like, generalizable mental understanding and simulation in embodied scenarios from a single example, and serves as an early step toward building general-purpose reward models. See More: <a href="https://progresslm.github.io/ProgressLM/">[Website]</a> <a href="https://arxiv.org/abs/2601.15224">[Paper]</a> <a href="https://github.com/Raymond-Qiancx/ProgressLM">[Code]</a> <a href="https://huggingface.co/collections/Raymond-Qiancx/progresslm">[Model]</a> <a href="https://huggingface.co/datasets/Raymond-Qiancx/ProgressLM-Dataset">[Dataset]</a>
- *2025.11*: &nbsp;🎉🎉 Our work [LiMT](https://arxiv.org/abs/2511.19889), an unified multi-task liver image benchmark work, has been accepted by ***Journal of Biomedical and Health Informatics (JBHI)***!
- *2025.10*: &nbsp;🎉🎉 Our work [DVP-MVS++](https://arxiv.org/abs/2506.13215), a multi-view stereo method that integrates depth-normal-edge priors and visibility guidance for robust 3D Reconstruction, has been accepted by ***IEEE Transactions on Circuits and Systems for Video Technology***!
- *2025.10*: &nbsp;🎉🎉 My [first-author work](https://arxiv.org/abs/2503.12218) on Medical Segmentation under sparse and noisy labeled annotations has been accepted by ***BIBM AIBH 2025***!
- *2025.10*: &nbsp;🎉🎉 We propose [Video-STAR](https://arxiv.org/abs/2510.08480), a powerful Tool-Augmented Agentic RL approach for Thinking with Videos. On open-vocabulary action recognition benchmarks like K-400 and HMDB-51, our 3B VLM achieves nearly 40% accuracy improvement over base models!🔥
- *2025.09*: &nbsp;🎉🎉 Our work [HALF-GS](https://arxiv.org/abs/2506.09518), an efficient dynamic 3D reconstruction framework combining sparse anchors, self-supervised guidance, and hierarchical propagation to improve reconstruction quality and temporal consistency, has been accepted by ***NeurIPS 2025***!
- *2025.09*: &nbsp;🎉🎉 We propose [AutoDrive-R²](https://arxiv.org/abs/2509.01944v1), Incentivizing Reasoning and Self-Reflection Capacity for VLA Model in Autonomous Driving. We're also honored that our work was featured by [AutoDrive Heart (自动驾驶之心)](https://mp.weixin.qq.com/s/7y0-CMAkls16iumNK3mlXg)!
- *2025.08*: &nbsp;🎉🎉 Our work [Re-Align](https://taco-group.github.io/Re-Align/) has been accepted by ***EMNLP 2025 Main Conference***!
- *2025.07*: &nbsp;🎉🎉 Our work on [Generalizable Medical Vision](https://ieeexplore.ieee.org/document/11080080) has been ***Accepted*** by ***IEEE Transactions on Medical Imaging***.
- *2025.05*: &nbsp;🎉🎉 Our work [CLIMD](https://arxiv.org/abs/2508.01594) has been ***Early Accepted*** by ***MICCAI 2025*** (Top 9%).
- *2025.03*: &nbsp;🎉🎉 Excited to propose my first-author work [DecAlign](https://taco-group.github.io/DecAlign/), a novel cross-modal decoupling and alignment framwork for multimodal representation learning.
- *2024.11*: &nbsp;🎉🎉 Excited to propose my first-author work [DynCIM](https://arxiv.org/abs/2503.06456), a novel dynamic multimodal curriculum learning framework in addressing cross-modal competition and imbalances, which is now available on ArXiv!
- *2024.10*: &nbsp;🎉🎉 We propose [FASS](https://arxiv.org/abs/2510.11005), a novel frequency domain-enhanced approach for Medical Image Segmentation under Low-Contrast environment.
</div>