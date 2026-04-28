<span class='anchor' id='projects'></span>
<div class="section-heading section-heading--projects">
  <h2 class="section-heading__title">🔨 Projects</h2>
</div>
<style>
.projects-panel {
  display: grid;
  gap: 18px;
}

.paper-box {
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  border: 1px solid rgba(102, 126, 234, 0.10);
  box-shadow: 0 8px 22px rgba(20, 32, 70, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.paper-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(20, 32, 70, 0.14);
  border-color: rgba(102, 126, 234, 0.18);
}

.paper-box-image {
  background: #f6f8fc;
}

.paper-box-image img {
  transition: transform 0.35s ease, filter 0.35s ease;
  display: block;
}

.paper-box:hover .paper-box-image img {
  transform: scale(1.02);
  filter: saturate(1.03) contrast(1.02);
}

.paper-box-text {
  padding: 18px 20px 20px;
  font-size: 13px;
  line-height: 1.8;
  color: #445066;
}

.paper-box-text strong:first-child {
  font-size: 16px;
  line-height: 1.45;
  color: #1f2a44;
}

.paper-box-text strong {
  color: #2f3b66;
}

.paper-box-text a {
  color: #315fd6;
  text-decoration: none;
}

.paper-box-text a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .paper-box-text {
    padding: 14px 14px 16px;
    font-size: 12.5px;
    line-height: 1.7;
  }

  .paper-box-text strong:first-child {
    font-size: 14px;
  }
}
</style>
<div class="projects-panel">
  line-height: 1.75;
}

.paper-box-text strong {
  color: #2f3b66;
}

.paper-box-text {
  font-size: 13px;
  line-height: 1.75;
  color: #444;
}

.paper-box-text a {
  color: #4d63d2;
  text-decoration: none;
}

.paper-box-text a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .paper-box-text {
    padding: 14px 14px 16px;
    font-size: 12.5px;
    line-height: 1.7;
  }

  .paper-box-text br + * {
    margin-left: 0 !important;
    padding-left: 0 !important;
    text-indent: 0 !important;
  }

  .paper-box-text strong:first-child {
    font-size: 14px;
  }
}
</style>
<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_1.png" alt="Pro_1" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>Insightful Vision: 基于增强-恢复-识别的智能眼底疾病医疗系统</strong><br>
    项目负责人 | 2024年12月 – 2025年08月<br>
    <strong>项目简介:</strong><br>
    针对临床中低质量的眼底图像，我们首先采用IM-LIME双目亮度增强算法优化对比度，并结合扩散模型与变分自编码器进行保真修复，确保诊断数据的可靠性。在识别环节，系统通过自主研发的Oception双分支架构，深度聚合左右眼跨眼特征与多尺度信息，实现对青光眼、白内障等8种眼疾的精准多标签分类。最后，系统接入多模态大模型，将分类特征转化为符合医疗规范的结构化诊断报告，实现了从影像到诊断反馈的流程闭环。<br>
    <strong>项目成果:</strong><br>
    第二十七届中国机器人及人工智能大赛-人工智能创新赛：国家级一等奖 <br>
    第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项：国家级三等奖 <br>
    第七届全球校园人工智能算法精英大赛-算法创新赛-AI+应用创新-新医科：省级优秀奖 <br>
    第二十七届中国机器人及人工智能大赛-人工智能创新赛：省级二等奖 <br>
    第十六届中国大学生服务外包创新创业大赛东部区域赛-企业命题类：省级三等奖 <br>
    第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项省级二等奖 <br>
    受理一项软件著作权
  </div>
</div>

<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_2.png" alt="Pro_2" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>BQAI+:基于知识图谱的中医药科普与在线问诊平台</strong><br>
    项目核心成员 | 2024年01月 – 2024年12月<br>
    <strong>项目简介:</strong><br>
    本项目针对中医专家知识匮乏及语言模型幻觉等问题。通过构建中医知识图谱，结合RAG技术，实现症状与疾病关系的动态推理，提供个性化诊疗建议。用时通过专家知识库溯源增强结果可信度。本人负责中医实体提取和图谱搭建，Prompt设计优化，RAG链路实现。本项目已部署在百度飞桨AI Studio。<br>
    <strong>项目成果:</strong><br>
    第十七届中国大学生计算机设计大赛-软件应用与开发-Web应用与开发：国家级二等奖 <br>
    第二十七届中国机器人及人工智能大赛-人工智能创新赛：国家级一等奖 <br>
    第六届全球校园人工智能算法精英大赛-睡眠医学诊断及推理知识图谱：国家级三等奖
  </div>
</div>

<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_3.png" alt="Pro_3" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>RF-Nav: 基于动态代价预测的越野机器人建图与混合路径规划系统</strong><br>
    项目负责人 | 2024年07月 – 2025年08月<br>
    <strong>项目简介:</strong><br>
    本项目采用Gmapping算法并优化RBpf粒子滤波，实现先定位后高精度建图。导航阶段基于AMCL算法结合已知地图实时跟踪位姿以完成精准定位，并借助Move_Base框架实现分层路径规划。其中，局部规划采用TEB算法进行实时敏捷避障。全局规划则融合了随机森林与Dijkstra算法，利用随机森林评估环境特征并预测通行代价，动态优化搜索权重，从而指导Dijkstra高效求取最优路径。最终构建出兼具全局预测与局部快速反应的自主导航系统。<br>
    <strong>项目成果:</strong><br>
    第二十届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛：国家级二等奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶：国家级一等奖 <br>
    第十九届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛：国家级三等奖 <br>
    第二十届全国大学生智能汽车竞赛-南部赛区室外ROS无人车赛：省级一等奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶：省级一等奖 <br>
    第十九届全国大学生智能汽车竞赛-华东赛区室外ROS无人车赛：省级一等奖
  </div>
</div>

<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_4.png" alt="Pro_4" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>基于多模态大模型与多传感器信息融合的智能机器人</strong><br>
    项目负责人 | 2024年09月 – 2025年11月<br>
    <strong>项目简介:</strong><br>
    本项目基于ROS2开发了一款集环境感知、自主导航、目标检测与自然交互于一体的智能机器人。底层融合激光雷达与IMU，实现高精度SLAM建图与自主避障导航。在核心的移动射击模块，系统创首先通过卡尔曼滤波对视野内的动态特征进行轨迹跟踪与预测，随后将锁定的区域交由多模态大模型进行精准目标识别与射击决策，并结合位姿补偿以实现精准打击。此外，依托大模型，机器人还具备语音识别和合成功能，可以接收语音指令并给予反馈。<br>
    <strong>项目架构:</strong><br>
    ROS机器人操作系统、SLAM导航算法、激光雷达感知模块、视觉识别与跟踪系统、IMU姿态传感器、多模态大模型、PID控制算法、Python/C++混合编程<br>
    <strong>项目成果:</strong><br>
    第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛：国家级三等奖 <br>
    第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛：国家级优秀奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击：国家级一等奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航：国家级一等奖 <br>
    第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛：省级一等奖 <br>
    第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛：省级二等奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航：省级一等奖 <br>
    第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击：省级二等奖
  </div>
</div>

<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_5.png" alt="Pro_5" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>基于时序行为模式与多阶段数据融合的智能图书推荐系统</strong><br>
    项目负责人 | 2025年06月 – 2025年11月<br>
    <strong>项目简介:</strong><br>
    本项目针对传统推荐系统中时序特征利用不足、多阶段数据融合困难、序列隐含模式挖掘不深等痛点，提出了一种基于融合规则策略混合推荐系统，系统主要包含三大核心模块：一是阶段差异分析模块，通过对比不同阶段的借阅集合差异，挖掘用户的潜在需求。二是序列模式匹配模块，利用书籍ID的连续性特征，发现规律性模式并推荐缺失书籍。三是历史学习模块，为规则无法覆盖的情况提供预测支持。在执行层面，系统构建了包含Stage2增量、Stage1增量、序列模式和历史回溯的四级优先级推荐策略。充分挖掘了借阅数据的时序特征与序列模式，在保证高推荐准确率的同时，显著提升了系统的可解释性与鲁棒性。<br>
    <strong>项目成果:</strong><br>
    第七届全球校园人工智能算法精英大赛-算法挑战赛-基于图书借阅数据的用户潜在借阅预测推荐：国家级一等奖（全国第一名）
  </div>
</div>

<div class="paper-box" id="Projects">
  <div class="paper-box-image">
    <div>
      <img src="images/Projects/Pro_6.png" alt="Pro_6" width="100%">
    </div>
  </div>
  <div class="paper-box-text">
    <strong>LSAR：面向大规模SAR图像的有向目标检测框架</strong><br>
    项目核心成员 | 2025年06月 – 2025年11月<br>
    <strong>项目简介:</strong><br>
    针对SAR雷达图像中因斑点噪声严重、几何畸变以及散射特性复杂多变而导致的目标背景区分困难和弱目标容易漏检等问题。我们设计了一个多层次的自适应目标检测框架，其核心在于三大协同优化的创新策略：采用为超分辨率模块升维保留更多特征与细节信息、使用保真度数据增强以保持物理特征的真实性，以及引入低置信度检测策略来有效减少弱信号目标的漏检率。在算法架构上，该框架还结合了小核特征提取、多级池化和位置敏感注意力等技术。最终的性能评估结果表明，我们的方法实现了多维度性能的全面提升，其中总体mAP@0.5提升了8.5%，小目标召回率提升了12%。<br>
    <strong>项目成果:</strong><br>
    第七届全球校园人工智能算法精英大赛-算法挑战赛-大规模SAR图像多类别有向目标检测：国家一等奖
  </div>
</div>
</div>
