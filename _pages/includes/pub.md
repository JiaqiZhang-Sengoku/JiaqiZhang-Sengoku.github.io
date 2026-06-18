<style>
.publications-panel {
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
}

.publications-note {
  margin: 0 0 14px;
  color: var(--muted-color, #667085);
  font-size: 0.94rem;
}

.paper-box {
  margin: 0 0 16px;
  border-radius: var(--radius-card, 18px);
  overflow: hidden;
  background: var(--surface-bg, #ffffff);
  border: 1px solid var(--card-border, rgba(102, 126, 234, 0.10));
  box-shadow: var(--card-shadow, 0 8px 22px rgba(20, 32, 70, 0.08));
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.publications-panel .paper-box {
  margin-bottom: 0;
}

.paper-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover, 0 16px 34px rgba(20, 32, 70, 0.13));
  border-color: rgba(102, 126, 234, 0.18);
}

.paper-box-image {
  background: var(--surface-soft, #f6f8fc);
}

.paper-box-image img {
  transition: transform 0.35s ease, filter 0.35s ease;
  display: block;
  border-radius: 0;
}

.paper-box:hover .paper-box-image img {
  transform: scale(1.02);
  filter: saturate(1.03) contrast(1.02);
}

.paper-box-text {
  padding: 6px 8px 6px 0;
  font-size: 0.94rem;
  line-height: 1.78;
  color: var(--text-color, #445066);
}

.paper-box-text a:first-of-type {
  display: inline-block;
  margin-bottom: 6px;
  font-weight: 700;
  line-height: 1.55;
}

.paper-box-text strong:first-child {
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--heading-color, #1f2a44);
}

.paper-box-text a {
  color: var(--accent, #3b5fc7);
  text-decoration: none;
}

.paper-box-text a:hover {
  text-decoration: underline;
}

.other-publications-panel {
  display: grid;
  gap: 14px;
  margin-bottom: 22px;
}

.other-paper-item {
  padding: 18px 22px;
  border-radius: var(--radius-card, 18px);
  background: var(--surface-bg, #ffffff);
  border: 1px solid var(--card-border, rgba(102, 126, 234, 0.10));
  box-shadow: var(--card-shadow, 0 8px 22px rgba(20, 32, 70, 0.08));
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.other-paper-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--card-shadow-hover, 0 16px 34px rgba(20, 32, 70, 0.13));
  border-color: rgba(102, 126, 234, 0.18);
}

.other-paper-title {
  margin-bottom: 6px;
  color: var(--heading-color, #1f2a44);
  font-size: 1.02rem;
  font-weight: 700;
  line-height: 1.55;
}

.other-paper-authors {
  color: var(--text-color, #445066);
  font-size: 0.94rem;
  line-height: 1.7;
}

@media (max-width: 600px) {
  .paper-box-text {
    padding: 2px 0 0;
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .paper-box-text strong:first-child {
    font-size: 0.98rem;
  }

  .other-paper-item {
    padding: 15px;
  }

  .other-paper-title {
    font-size: 0.98rem;
  }

  .other-paper-authors {
    font-size: 0.9rem;
  }
}
</style>

<span class='anchor' id='publications'></span>
<div class="section-heading section-heading--publications">
  <h2 class="section-heading__title">📝 Selected Publications</h2>
</div>
<p class="publications-note"><sup>†</sup> Corresponding Author, <sup>*</sup> Equal Contribution</p>

<div class="publications-panel">

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/Agent.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[From Agent Traces to Trust: A Survey of Evidence Tracing and Execution Provenance in LLM Agents]()
<br>
<br>
Yiqi Wang, **Jiaqi Zhang**, Taotao Cai, Zirui Liu, Mingyi Liu, Qingqiang Sun, Zequn Sun, Zhangkai Wu, Mingkai Zheng, Xuefei Yin, Yanming Zhu, Tianyu Shi<sup>†</sup>
<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/ΠSkill.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[𝜋Skill: High-Density Knowledge Extraction from Single Trajectories via Circular Step-Level Analysis]()
<br>
Empirical Methods in Natural Language Processing (EMNLP) **Under Review**
<br>
Chenxi Qiu, Zichen Luo, Jiarui Fan, Keming Gu, **Jiaqi Zhang**, Chunbo Zhang, Peng Zhang <sup>†</sup>
<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/DeltaFlow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[DeltaFlow: Intent-Driven Latent World Model]()
<br>
Empirical Methods in Natural Language Processing (EMNLP) **Under Review**
<br>
Zichen Luo, Qiyuan Zhang, Siying Li, **Jiaqi Zhang**, Ke Shi, Chunbo Zhang, Zhaoxin Wang, Fanqi Kong, Ziming Zhao <sup>†</sup>
<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/D2IB.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Differentiated Dual-Level Information Bottleneck for Imperfect Multimodal Emotion Recognition]()
<br>
Empirical Methods in Natural Language Processing (EMNLP) **Under Review**
<br>
Zheng Pang, **Jiaqi Zhang**, Mengting Li, Yiqi Wang, Guangyuan Dong, Yusen Wu, Chao Xue, Haoyu Wang, Hongsen Zhang, Zihao Li, Jiachen Luo <sup>†</sup>
<br>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/PriMD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Modality Disentangled Learning for Incomplete Multimodal Emotion Recognition: A Primitive Memory Distillation Perspective]()
<br>
Empirical Methods in Natural Language Processing (EMNLP) **Under Review**
<br>
**Jiaqi Zhang**, Zheng Pang, Mengting Li, Yiqi Wang, Guangyuan Dong, Chao Xue, Yusen Wu, Zihao Li, Huy Phan, Sicheng Zhao, Björn Schuller, Jiachen Luo <sup>†</sup>
<br>
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/Uni-IMD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Unified Medical Incomplete Multimodal Diagnosis Framework Based on Optimal Feature Disentanglement]()
<br>
Pattern Recognition (PR) **Under Review**
<br>
Chongwen Lyu, Kai Han, Jun Chen, **Jiaqi Zhang**, Qiaoying Teng, Zhe Liu <sup>†</sup>
<br>
</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/IGR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Information-Guided Rebalance for Multimodal Classification]()
<br>
Expert Systems With Applications (ESWA) **Under Review**
<br>
Zhe Liu, Lingling Yan, Chongwen Lyu, **Jiaqi Zhang**, Yi Liu, Jun Chen <sup>†</sup>, Kai Han <sup>†</sup>
<br>
[Code](https://github.com/JiaqiZhang-Sengoku/IGR)
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCES</div><img src='images/Publication/.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Attention-Aware Multi-Scale Segmentation for Industrial Defects with Low Contrast and High Intra-Class Variation]()
<br>
International Conference on Computational & Experimental Engineering and Sciences (ICCES)
<br>
Xiaocheng Hu, **Jiaqi Zhang**, Jianguo Zhu, Xudong Ren, Kai Han, Zhe Liu<sup>†</sup>
<br>
</div>
</div> -->

<!-- </div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCES</div><img src='images/Publication/ProtoDBSeg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Prototype Guided Dual-Branch Framework for Industrial Surface Defect Segmentation]()
<br>
International Conference on Computational & Experimental Engineering and Sciences (ICCES)
<br>
**Jiaqi Zhang**, Xinjie Li, Jianguo Zhu, Xudong Ren, Kai Han, Zhe Liu<sup>†</sup>
<br>
</div>
</div> -->


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/AMON-Flow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[AMON-Flow: Adaptive Momentum and Noise Scaling for Plug-and-Play Image Restoration]()
<br>

<br>
Xiaoyu Gu, **Jiaqi Zhang**, Lanling Zeng, Yang Yang <sup>†</sup>
<br>
</div>
</div> -->



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/OrthoSeg.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Learning Orthogonal Disentanglement for Modality-Agnostic Medical Image Segmentation]()
<br>
Journal of Biomedical and Health Informatics (JBHI) **Under Review**
<br>
Kai Han, **Jiaqi Zhang**, Chongwen Lyu, Mengting Li, Jun Chen, Laihua Yang, Guangquan Zhou, Yang Chen, Zhe Liu <sup>†</sup>
<br>
[Paper](/Paper/OrthoSeg_Paper.pdf)<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/DDDM.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Structure-preserving Image Decomposition via Plug-and-Play Diffusion Models]()
<br>
IEEE Transactions on Image Processing (TIP) **Under Review**
<br>
Yang Yang <sup>†</sup> <sup>*</sup>, Pengyu Li <sup>*</sup>, **Jiaqi Zhang**, Lanling Zeng
<br>
</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/Amphisbaena.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Amphisbaena: Dual-Sided Neuron Intervention for Hallucination Mitigation in Vision-Language Models]()
<br>
ACM International Conference on Multimedia (ACM MM 2026) **Under Review**
<br>
**Jiaqi Zhang**(Second Author), Anonymous
<br>
</div>
</div> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/LEADer.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Local Epistemic Uncertainty Guided Active Sampling for Plug-and-play Diffusive Image Restoration]()
<br>
ACM International Conference on Multimedia (ACM MM 2026) **Under Review**
<br>
**Jiaqi Zhang**(First Author), Anonymous
<br>
[Paper](/Paper/LEADer_Paper.pdf) | [Supplementary Material](/Paper/LEADer_Supplementary_Material.pdf)<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/DynKD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Rethinking Knowledge Distillation for Incomplete Multimodal
Emotion Recognition: A Dynamic Approach]()
<br>
ACM International Conference on Multimedia (ACM MM 2026) **Under Review**
<br>
**Jiaqi Zhang**(First Author), Anonymous
<br>
[Paper](/Paper/DynKD_Paper.pdf)<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/NeuroCom.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[A Survey of Deep Learning-based Multimodal Fusion Techniques for Medical Classification]()
<br>
Neurocomputing **Under Review**
<br>
Zhe Liu, Lingling Yan, Jun Chen, Chongwen Lyu, **Jiaqi Zhang**, Qingli Li, Kai Han <sup>†</sup>, Lu Liu <sup>†</sup>, Zipeng Lu <sup>†</sup>
<br>
</div>
</div>

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Adaptive Risk-aware Implicit Quantile Network: Towards Safe andEnergy-Efficient USV Navigation in Dynamic Environments]()
<br>
International Conference On Intelligent Computing (ICIC 2026) **Under Review**
<br>
Wenjing Wang, Jintao Liu, Songyan Wang, Wenlong Meng, **Jiaqi Zhang**
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/SCA-Net.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[SCA-Net: A Scale- and Contrast-Aware Network for Subtle and Low-Contrast Polyp Segmentation]()
<br>
Journal of Imaging Informatics in Medicine (JIIM) **Under Review**
<br>
**Jiaqi Zhang**(Third Author), Anonymous
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/DG-SCL.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[DG-SCL: Diffusion-Guided Semantic Contrastive Learning for Imbalanced Malicious
Traffic Detectionl]()
<br>
Information Sciences **Under Review**
<br>
Bingbing Gu <sup>*</sup>, Saihua Cai <sup>*</sup>, <sup>†</sup>, Jing Wang, Zhuole Li, Xiheng Jia, **Jiaqi Zhang**
<br>
</div>
</div> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/A2L.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Breaking Confirmation Bias: Single-Round Active Manifold Calibration for Source-Free Domain Adaptation in Segmentation]()
<br>
European Conference on Computer Vision (ECCV 2026) **Under Review**
<br>
**Jiaqi Zhang**(First Author), Anonymous
<br>
[Paper](/Paper/A2L_Paper.pdf) | [Supplementary Material](/Paper/A2L_Supplementary_Meterial.pdf)<br>
</div>
</div>


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/Agent-SAM-I2V.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Agent-SAM-I2V: Self-Correcting Promptable Video Segmentation via Agentic Drift Detection and Multi-Prompt Fusion]()
<br>
International Conference On Intelligent Computing (ICIC 2026) **Under Review**
<br>
**Jiaqi Zhang**(Second Author), Anonymous
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICIC 2026</div><img src='images/Publication/IFCLNet.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Intrinsic Feature Consistency Learning Network for Generalizable Medical Image Segmentation]()
<br>
International Conference On Intelligent Computing (ICIC 2026)
<br>
**Jiaqi Zhang**, Xinjie Li, Guo Yang, Kang Yang, Wenjing Wang, Yang Yang<sup>†</sup>
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/Mamba.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[PathoMamba: Piecewise-Diffeomorphic Registration via Stiffness-Modulated State Space Dynamics]()
<br>
Medical Image Computing and Computer Assisted Intervention (MICCAI 2026) **Under Review**
<br>
**Jiaqi Zhang**, Anonymous
<br>
</div>
</div> -->


<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/AH-Trans-Diff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[AH-Trans-Diff: Physics-Consistent Heteroscedastic Latent Diffusion for Uncertainty-Aware MR Restoration and Tumor Segmentation]()
<br>
ICME 2026: IEEE International Conference on Multimedia & Expo **Under Review**
<br>
Anonymous ICME submission
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 Finding</div><img src='images/Publication/RRGCL.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Rethinking Imbalance in Radiology Report Generation: A Curriculum Learning Perspective]()
<br>
IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2026 Finding)
<br>
Chongwen Lyu, Kai Han, **Jiaqi Zhang**, Qiaoying Teng, Jun Chen, Zhe Liu<sup>†</sup>
<br>
[Paper](/Paper/RRGCL_Paper.pdf)<br>
</div>
</div> -->



<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/HQS-PnP.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Zero-shot Single Image Super-resolution via Plug-and-play Diffusive Sampling]()
<br>
Journal of Electronic Imaging **Under Review**
<br>
Xiaoya Song, **Jiaqi Zhang**, Lanling Zeng, Yang Yang<sup>†</sup>(Corresponding Author)
<br>
</div>
</div> -->

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/LR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Laplacian Regularization for Edge-preserving Image Smoothing]()
<br>
Signal, Image and Video Processing **Under Review**
<br>
Yang Yang<sup>†</sup>(Corresponding Author), Qi Wu, Jiaqi Zhang, Lanling Zeng
<br>
</div>
</div> -->

<!-- 3 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/FC-Net.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[FC-Net: Frequency–spatial Cooperation Network for Robust Medical Image Segmentation]()
<br>
Biomedical Signal Processing and Control (BSPC) **Under Review**
<br>
Jialiang Qiu, Kai Han, Jun Chen, **Jiaqi Zhang**, Yan Zhu, Chongwen Lyu, Min Xu<sup>†</sup>(Corresponding Author), Zhe Liu<sup>†</sup>(Corresponding Author)
<br>
</div>
</div>

<!-- 2 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/FDGR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Image Restoration via Optimizing Fidelity with Diffusion and Gradient Regularization]()
<br>
Engineering Applications of Artificial Intelligence (EAAI) **Under Review**
<br>
**Jiaqi Zhang**, Guo Yang, Zheng Pang, Yao Zhu, Bingbing Gu, Yang Yang<sup>†</sup>(Corresponding Author)
<br>
[Code](https://github.com/JiaqiZhang-Sengoku/FDGR)
</div>
</div>

<!-- 1 -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/Publication/DDGF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Zero-Shot Medical Image Super-Resolution Using Denoising Diffusion Models with Gradient-Frequency Priors]() <br>
Biomedical Signal Processing and Control (BSPC) **Under Review**
<br>
**Jiaqi Zhang**, Guo Yang, Rongrong Gao, Yang Yang<sup>†</sup>
<br>
[Code](https://github.com/JiaqiZhang-Sengoku/DDGF)
</div>
</div>

<span class='anchor' id='other-publications'></span>
<div class="section-heading section-heading--other-publications">
  <h2 class="section-heading__title">📚 Other Publications</h2>
</div>

<div class="other-publications-panel">
  <div class="other-paper-item">
    <div class="other-paper-title">SCA-Net: A Scale- and Contrast-Aware Network for Subtle and Low-Contrast Polyp Segmentation</div>
    <div class="other-paper-authors">Journal of Imaging Informatics in Medicine (JIIM 2026)</div>
    <div class="other-paper-authors">Jiaxu Huang, Yiyue Li, <strong>Jiaqi Zhang</strong>, Xiaocheng Hu, Yang Yang<sup>†</sup></div>
    <div class="other-paper-authors"></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">PathoMamba: Piecewise-Diffeomorphic Registration via Stiffness-Modulated State Space Dynamics</div>
    <div class="other-paper-authors">International Conference on Medical Image Computing and Computer Assisted Intervention (MICCAI 2026)</div>
    <div class="other-paper-authors">Ernest Asimeng, Jun Chen, Godbless Mensah, <strong>Jiaqi Zhang</strong>, Kai Han, Yang Chen, Zhe Liu<sup>†</sup></div>
    <div class="other-paper-authors"></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">Zero-shot Diffusive Image Restoration with Consistency</div>
    <div class="other-paper-authors">Signal Processing (2026)</div>
    <div class="other-paper-authors">Yi Wang, Lanling Zeng, <strong>Jiaqi Zhang</strong>, Yang Yang<sup>†</sup></div>
    <div class="other-paper-authors"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0165168426002197">Paper</a></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">Intrinsic Feature Consistency Learning Network for Generalizable Medical Image Segmentation</div>
    <div class="other-paper-authors">International Conference On Intelligent Computing (ICIC 2026 Oral)</div>
    <div class="other-paper-authors"><strong>Jiaqi Zhang</strong>, Xinjie Li, Guo Yang, Kang Yang, Wenjing Wang, Yang Yang<sup>†</sup></div>
    <div class="other-paper-authors"></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">Agent-SAM-I2V: Self-Correcting Promptable Video Segmentation via Agentic Drift Detection and Multi-Prompt Fusion</div>
    <div class="other-paper-authors">International Conference On Intelligent Computing (ICIC 2026 Oral)</div>
    <div class="other-paper-authors">Guo Yang, <strong>Jiaqi Zhang</strong>, Yao Zhu, Longze Fan<sup>†</sup></div>
    <div class="other-paper-authors"></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">Adaptive Risk-aware Implicit Quantile Network: Towards Safe and Energy-E!cient USV Navigation in Dynamic Environments</div>
    <div class="other-paper-authors">International Conference On Intelligent Computing (ICIC 2026 Oral)</div>
    <div class="other-paper-authors">Wenjing Wang, <strong>Jiaqi Zhang</strong></div>
    <div class="other-paper-authors"></div>
  </div>
  <div class="other-paper-item">
    <div class="other-paper-title">Parameterized Image Restoration with Diffusion and Gradient Priors</div>
    <div class="other-paper-authors">Knowledge-Based Systems (KBS 2026)</div>
    <div class="other-paper-authors">Yang Yang<sup>†</sup>, Xi Zhang, <strong>Jiaqi Zhang</strong>, Lanling Zeng
<br></div>
    <div class="other-paper-authors"><a href="https://www.sciencedirect.com/science/article/abs/pii/S0950705126002303">Paper</a>   <a href="https://github.com/AKA-hhh/PIRP">Code</a></div>
  </div>
</div>

<!-- # 🎖 Academical Services

Reviewer of ACM Transactions on Knowledge Discovery from Data (TKDD), ICASSP 2026. -->


