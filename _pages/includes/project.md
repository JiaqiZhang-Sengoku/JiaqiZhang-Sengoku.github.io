<span class='anchor' id='projects'></span>
<div class="section-heading section-heading--projects">
  <h2 class="section-heading__title">🔨 Projects</h2>
</div>

<style>
.projects-panel {
  display: grid;
  gap: 18px;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,255,0.98) 100%);
  border: 1px solid rgba(102, 126, 234, 0.12);
  box-shadow: 0 10px 28px rgba(20, 32, 70, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(20, 32, 70, 0.14);
  border-color: rgba(102, 126, 234, 0.18);
}

.project-card__top {
  display: grid;
  grid-template-columns: minmax(280px, 38%) 1fr;
}

.project-card__media {
  background: #f6f8fc;
  border-right: 1px solid rgba(102, 126, 234, 0.08);
}

.project-card__image {
  width: 100%;
  display: block;
  height: auto;
}

.project-card__content {
  padding: 18px 20px 18px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #445066;
}

.project-card__content strong:first-child {
  font-size: 1.05rem;
  line-height: 1.45;
  color: #1f2a44;
}

.project-card__content strong {
  color: #2f3b66;
}

.project-card__content a {
  color: #315fd6;
  text-decoration: none;
}

.project-card__content a:hover {
  text-decoration: underline;
}

.project-card__results {
  border-top: 1px solid rgba(102, 126, 234, 0.08);
  background: linear-gradient(180deg, rgba(244,248,255,0.95) 0%, rgba(255,255,255,0.98) 100%);
  padding: 14px 20px 18px;
}

.project-card__results-title {
  display: inline-block;
  margin: 0 0 10px;
  font-size: 0.92rem;
  font-weight: 700;
  color: #2446a8;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(77, 99, 210, 0.10);
}

.project-card__results-list {
  margin: 0;
  padding-left: 1.15rem;
  color: #4a5568;
  line-height: 1.7;
  font-size: 0.92rem;
}

.project-card__results-list li + li {
  margin-top: 6px;
}

@media (max-width: 900px) {
  .project-card__top {
    grid-template-columns: 1fr;
  }

  .project-card__media {
    border-right: none;
    border-bottom: 1px solid rgba(102, 126, 234, 0.08);
  }
}

@media (max-width: 600px) {
  .projects-panel {
    gap: 14px;
  }

  .project-card {
    border-radius: 18px;
  }

  .project-card__content {
    padding: 14px 14px 14px;
    font-size: 0.9rem;
    line-height: 1.72;
  }

  .project-card__content strong:first-child {
    font-size: 0.98rem;
  }

  .project-card__results {
    padding: 12px 14px 14px;
  }

  .project-card__results-title {
    font-size: 0.85rem;
  }

  .project-card__results-list {
    font-size: 0.86rem;
    line-height: 1.58;
  }
}
</style>

<div class="projects-panel">
  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_1.png" alt="Pro_1">
      </div>
      <div class="project-card__content">
        <strong>Insightful Vision: 基于增强-恢复-识别的智能眼底疾病医疗系统</strong><br>
        项目负责人 | 2024年12月 – 2025年08月<br>
        <strong>项目简介:</strong><br>
        针对临床中低质量的眼底图像，我们首先采用IM-LIME双目亮度增强算法优化对比度，并结合扩散模型与变分自编码器进行保真修复，确保诊断数据的可靠性。在识别环节，系统通过自主研发的Oception双分支架构，深度聚合左右眼跨眼特征与多尺度信息，实现对青光眼、白内障等8种眼疾的精准多标签分类。最后，系统接入多模态大模型，将分类特征转化为符合医疗规范的结构化诊断报告，实现了从影像到诊断反馈的流程闭环。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第二十七届中国机器人及人工智能大赛-人工智能创新赛：国家级一等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项：国家级三等奖</li>
        <li>第七届全球校园人工智能算法精英大赛-算法创新赛-AI+应用创新-新医科：省级优秀奖</li>
        <li>第二十七届中国机器人及人工智能大赛-人工智能创新赛：省级二等奖</li>
        <li>第十六届中国大学生服务外包创新创业大赛东部区域赛-企业命题类：省级三等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项：省级二等奖</li>
        <li>受理一项软件著作权</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_2.png" alt="Pro_2">
      </div>
      <div class="project-card__content">
        <strong>BQAI+: 基于知识图谱的中医药科普与在线问诊平台</strong><br>
        项目核心成员 | 2024年01月 – 2024年12月<br>
        <strong>项目简介:</strong><br>
        本项目针对中医专家知识匮乏及语言模型幻觉等问题，通过构建中医知识图谱，结合RAG技术，实现症状与疾病关系的动态推理，提供个性化诊疗建议，同时通过专家知识库溯源增强结果可信度。本人负责中医实体提取和图谱搭建、Prompt设计优化以及RAG链路实现，本项目已部署在百度飞桨AI Studio。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第十七届中国大学生计算机设计大赛-软件应用与开发-Web应用与开发：国家级二等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-人工智能创新赛：国家级一等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-睡眠医学诊断及推理知识图谱：国家级三等奖</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_3.png" alt="Pro_3">
      </div>
      <div class="project-card__content">
        <strong>RF-Nav: 基于动态代价预测的越野机器人建图与混合路径规划系统</strong><br>
        项目负责人 | 2024年07月 – 2025年08月<br>
        <strong>项目简介:</strong><br>
        本项目采用Gmapping算法并优化RBpf粒子滤波，实现先定位后高精度建图。导航阶段基于AMCL算法结合已知地图实时跟踪位姿以完成精准定位，并借助Move_Base框架实现分层路径规划。其中，局部规划采用TEB算法进行实时敏捷避障。全局规划则融合随机森林与Dijkstra算法，利用随机森林评估环境特征并预测通行代价，动态优化搜索权重，从而指导Dijkstra高效求取最优路径。最终构建出兼具全局预测与局部快速反应的自主导航系统。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第二十届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛：国家级二等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶：国家级一等奖</li>
        <li>第十九届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛：国家级三等奖</li>
        <li>第二十届全国大学生智能汽车竞赛-南部赛区室外ROS无人车赛：省级一等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶：省级一等奖</li>
        <li>第十九届全国大学生智能汽车竞赛-华东赛区室外ROS无人车赛：省级一等奖</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_4.png" alt="Pro_4">
      </div>
      <div class="project-card__content">
        <strong>基于多模态大模型与多传感器信息融合的智能机器人</strong><br>
        项目负责人 | 2024年09月 – 2025年11月<br>
        <strong>项目简介:</strong><br>
        本项目基于ROS2开发了一款集环境感知、自主导航、目标检测与自然交互于一体的智能机器人。底层融合激光雷达与IMU，实现高精度SLAM建图与自主避障导航。在核心的移动射击模块，系统首先通过卡尔曼滤波对视野内的动态特征进行轨迹跟踪与预测，随后将锁定的区域交由多模态大模型进行精准目标识别与射击决策，并结合位姿补偿以实现精准打击。此外，依托大模型，机器人还具备语音识别和合成功能，可以接收语音指令并给予反馈。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛：国家级三等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛：国家级优秀奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击：国家级一等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航：国家级一等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛：省级一等奖</li>
        <li>第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛：省级二等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航：省级一等奖</li>
        <li>第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击：省级二等奖</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_5.png" alt="Pro_5">
      </div>
      <div class="project-card__content">
        <strong>基于时序行为模式与多阶段数据融合的智能图书推荐系统</strong><br>
        项目负责人 | 2025年06月 – 2025年11月<br>
        <strong>项目简介:</strong><br>
        本项目针对传统推荐系统中时序特征利用不足、多阶段数据融合困难、序列隐含模式挖掘不深等痛点，提出了一种融合规则策略的混合推荐系统。系统主要包含阶段差异分析模块、序列模式匹配模块和历史学习模块，形成包含Stage2增量、Stage1增量、序列模式和历史回溯的四级优先级推荐策略，在提升推荐准确率的同时增强了系统可解释性与鲁棒性。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第七届全球校园人工智能算法精英大赛-算法挑战赛-基于图书借阅数据的用户潜在借阅预测推荐：国家级一等奖（全国第一名）</li>
      </ul>
    </div>
  </div>

  <div class="project-card">
    <div class="project-card__top">
      <div class="project-card__media">
        <img class="project-card__image" src="images/Projects/Pro_6.png" alt="Pro_6">
      </div>
      <div class="project-card__content">
        <strong>LSAR：面向大规模SAR图像的有向目标检测框架</strong><br>
        项目核心成员 | 2025年06月 – 2025年11月<br>
        <strong>项目简介:</strong><br>
        针对SAR雷达图像中因斑点噪声严重、几何畸变以及散射特性复杂多变而导致的目标背景区分困难和弱目标容易漏检等问题，我们设计了一个多层次的自适应目标检测框架。该框架围绕超分辨率模块升维、保真度数据增强和低置信度检测策略三大方向进行优化，并结合小核特征提取、多级池化和位置敏感注意力等技术，最终实现多维度性能提升。
      </div>
    </div>
    <div class="project-card__results">
      <div class="project-card__results-title">项目成果</div>
      <ul class="project-card__results-list">
        <li>第七届全球校园人工智能算法精英大赛-算法挑战赛-大规模SAR图像多类别有向目标检测：国家一等奖</li>
      </ul>
    </div>
  </div>
</div>
