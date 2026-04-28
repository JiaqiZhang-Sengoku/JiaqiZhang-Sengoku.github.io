<span class='anchor' id='honors'></span>
<div class="section-heading section-heading--honors">
  <h2 class="section-heading__title">📜 Honors</h2>
</div>

<style>
.awards-container {
    max-width: 1400px;
    margin: 28px auto 36px;
}
.section-title {
    font-size: 24px;
    font-weight: 700;
    color: #2b2b2b;
    margin: 30px 0 18px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #667eea;
    letter-spacing: 0.2px;
}

.awards-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px 0;
}

.award-card {
    background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: pointer;
    border: 1px solid rgba(102, 126, 234, 0.08);
}

.award-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.16);
}

.award-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background: #f6f8fc;
}

.award-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
}

.award-card:hover .award-image {
    transform: scale(1.03);
}

.award-info {
    padding: 14px 14px 12px;
}

.award-title {
    font-size: 13px;
    line-height: 1.6;
    color: #333;
    margin-bottom: 8px;
    min-height: 40px;
}

.award-date {
    font-size: 11px;
    color: #7f8794;
    font-weight: 600;
}

/* 灯箱样式 */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.88);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.25s ease;
    backdrop-filter: blur(2px);
}

.lightbox.active {
    display: flex;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    animation: zoomIn 0.25s ease;
}

@keyframes zoomIn {
    from {
        transform: scale(0.85);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.lightbox-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.08);
}

.lightbox-close {
    position: absolute;
    top: -42px;
    right: 0;
    color: white;
    font-size: 36px;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0.9;
}

.lightbox-close:hover {
    transform: scale(1.15);
    opacity: 1;
}

.lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 48px;
    font-weight: bold;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 20px;
    width: 60px;
    height: 60px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    transition: all 0.25s ease;
    user-select: none;
    backdrop-filter: blur(4px);
}

.lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.18);
    transform: translateY(-50%) scale(1.08);
}

.lightbox-prev {
    left: 20px;
}

.lightbox-next {
    right: 20px;
}

.lightbox-caption {
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    color: white;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

@media (max-width: 1200px) {
    .awards-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }
}

@media (max-width: 900px) {
    .awards-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
}

@media (max-width: 600px) {
    .awards-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    
    .award-image-container {
        height: 150px;
    }
    
    .section-title {
        font-size: 20px;
        margin: 24px 0 14px 0;
    }
    
    .award-card {
        border-radius: 12px;
    }
    
    .award-info {
        padding: 12px 12px 10px;
    }
    
    .lightbox-nav {
        font-size: 32px;
        padding: 10px;
        width: 45px;
        height: 45px;
    }
    
    .lightbox-prev {
        left: 10px;
    }
    
    .lightbox-next {
        right: 10px;
    }
}
</style>

<div class="awards-container" id="Software Copyrights">

<div class="awards-grid">

<div class="award-card" onclick="openLightbox('images/Soft/Soft_2.png')">
    <div class="award-image-container">
        <img class="award-image" src="images/Soft/Soft_2.png" alt="软著1">
    </div>
    <div class="award-info">
        <div class="award-title">高清图像修复增强系统 V1.0</div>
        <div class="award-date">2024年11月29日</div>
    </div>
</div>

<div class="award-card" onclick="openLightbox('images/Soft/Soft_3.png')">
    <div class="award-image-container">
        <img class="award-image" src="images/Soft/Soft_3.png" alt="软著2">
    </div>
    <div class="award-info">
        <div class="award-title">基于深度卷积神经网络的图像破损修复系统 V1.0</div>
        <div class="award-date">2024年12月27日</div>
    </div>
</div>

<div class="award-card" onclick="openLightbox('images/Soft/Soft_1.png')">
    <div class="award-image-container">
        <img class="award-image" src="images/Soft/Soft_1.png" alt="软著3">
    </div>
    <div class="award-info">
        <div class="award-title">基于Mamba网络的钢铁表面瑕疵智能检测系统 V1.0</div>
        <div class="award-date">2025年04月27日</div>
    </div>
</div>

</div>



<style>
.awards-container {
    max-width: 1400px;
    margin: 30px auto;
}

.section-title {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 30px 0 20px 0;
    padding-bottom: 10px;
    border-bottom: 3px solid #667eea;
}

.awards-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 20px 0;
}

.award-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.award-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.award-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.award-info {
    padding: 12px;
}

.award-title {
    font-size: 13px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 6px;
    min-height: 40px;
}

.award-date {
    font-size: 11px;
    color: #888;
    font-weight: 500;
}

@media (max-width: 1200px) {
    .awards-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
    }
}

@media (max-width: 900px) {
    .awards-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
}

@media (max-width: 600px) {
    .awards-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    
    .award-image {
        height: 150px;
    }
}
</style>

<h1>🥇 Honors</h1>

<div class="awards-container">

<div class="section-title" style="font-size: 16px;">
  🏆 National Level awards (21)
</div>


<div class="awards-grid">

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_21.png" alt="国奖21">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-算法挑战赛-大规模SAR图像多类别有向目标检测 <br><strong>国家级一等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_22.png" alt="国奖22">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-算法挑战赛-基于图书借阅数据的用户潜在借阅预测推荐<br><strong>国家级一等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_23.png" alt="国奖23">
    <div class="award-info">
        <div class="award-title">第二十届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛<br><strong>国家级二等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_24.png" alt="国奖24">
    <div class="award-info">
        <div class="award-title">第二十届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛<br><strong>国家级二等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_14.png" alt="国奖14">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶<br>
        <strong>国家级一等奖</strong></div>
        <div class="award-date">2025年08月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_15.png" alt="国奖15">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击<br>
        <strong>国家级一等奖</strong></div>
        <div class="award-date">2025年08月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_16.png" alt="国奖16">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-人工智能创新赛<br>
        <strong>国家级一等奖</strong></div>
        <div class="award-date">2025年08月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_17.png" alt="国奖17">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航<br>
        <strong>国家级一等奖</strong></div>
        <div class="award-date">2025年08月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_11.jpg" alt="国奖11">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-公益项<br>
        <strong>国家级二等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_12.jpg" alt="国奖12">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项<br>
        <strong>国家级三等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_13.png" alt="国奖13">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-非命题-三维动画类<br>
        <strong>国家级三等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_1.png" alt="国奖1">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法专项赛-算法巅峰赛<br>
        <strong>国家级二等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_7.png" alt="国奖7">
    <div class="award-info">
        <div class="award-title">第十九届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛<br><strong>国家级三等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_8.png" alt="国奖8">
    <div class="award-info">
        <div class="award-title">第十九届全国大学生智能汽车竞赛-全国总决赛室外ROS无人车赛<br><strong>国家级三等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_9.jpg" alt="国奖9">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-睡眠医学诊断及推理知识图谱<br>
        <strong>国家级三等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_10.png" alt="国奖10">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛<br>
        <strong>国家级三等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_6.jpg" alt="国奖6">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛
        <br><strong>国家级优秀奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_5.png" alt="国奖5">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法挑战赛-超声乳腺影像的BIRADS分类及特征识别 <br><strong>国家级二等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_2.png" alt="国奖2">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法挑战赛-钢材表面缺陷检测与分割<br>
        <strong>国家级三等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_4.jpg" alt="国奖4">
    <div class="award-info">
        <div class="award-title">第十五届蓝桥杯全国软件和信息技术专业人才大赛-视觉艺术设计赛全国赛专项赛道人工智能+设计<br><strong>国家级三等奖</strong></div>
        <div class="award-date">2024年08月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_3.jpg" alt="国奖3">
    <div class="award-info">
        <div class="award-title">第十五届蓝桥杯全国软件和信息技术专业人才大赛-全国总决赛C/C++程序设计大学B组<br>
        <strong>国家级优秀奖</strong></div>
        <div class="award-date">2024年06月</div>
    </div>

</div>

</div>

<div class="section-title" style="font-size: 16px;">
  🎖️ Provincial Level Awards (30)
</div>

<div class="awards-grid">

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_13.png" alt="省奖13">
    <div class="award-info">
        <div class="award-title">第二十届全国大学生智能汽车竞赛-南部赛区室外ROS无人车赛<br><strong>省级一等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_14.png" alt="省奖31">
    <div class="award-info">
        <div class="award-title">第二十届全国大学生智能汽车竞赛-南部赛区室外ROS无人车赛<br><strong>省级一等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_29.png" alt="省奖29">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-产业命题赛-神思杯-基于视觉的果蔬成熟度智能分级算法挑战赛<br>
        <strong>省级三等奖</strong></div>
        <div class="award-date">2025年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_12.png" alt="省奖12">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-算法挑战赛-基于图书借阅数据的用户潜在借阅预测推荐<br><strong>省级一等奖</strong></div>
        <div class="award-date">2025年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_30.png" alt="省奖30">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-算法挑战赛-大规模SAR图像多类别有向目标检测<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2025年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_11.png" alt="省奖11">
    <div class="award-info">
        <div class="award-title">第七届全球校园人工智能算法精英大赛-算法创新赛-AI+应用创新-新医科
        <br><strong>省级优秀奖</strong></div>
        <div class="award-date">2025年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_16.png" alt="省奖16">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-自主巡航<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2025年07月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_1.png" alt="省奖1">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人任务挑战赛-目标射击<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年07月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_28.png" alt="省奖28">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-机器人应用赛-智能驾驶<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2025年06月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_15.png" alt="省奖15">
    <div class="award-info">
        <div class="award-title">第二十七届中国机器人及人工智能大赛-人工智能创新赛<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年06月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_27.png" alt="省奖27">
    <div class="award-info">
        <div class="award-title">第十六届中国大学生服务外包创新创业大赛东部区域赛-企业命题类<br>
        <strong>省级三等奖</strong></div>
        <div class="award-date">2025年05月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_10.jpg" alt="省奖10">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-公益项<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_4.jpg" alt="省奖4">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_5.png" alt="省奖5">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-命题项<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_6.png" alt="省奖6">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-非命题-三维动画类<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_7.png" alt="省奖7">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-非命题-影像类<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_8.png" alt="省奖8">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-创新创业项<br>
        <strong>省级三等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_9.png" alt="省奖9">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-专项赛数码艺术-非命题-三维动画类<br>
        <strong>省级三等奖</strong></div>
        <div class="award-date">2025年01月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_22.jpg" alt="省奖22">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-睡眠医学诊断及推理知识图谱<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_2.png" alt="省奖2">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法挑战赛-钢材表面缺陷检测与分割<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_17.png" alt="省奖17">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法挑战赛-超声乳腺影像的BIRADS分类及特征识别 <br><strong>省级一等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_19.png" alt="省奖19">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法应用赛-无人车任务挑战赛
        <br><strong>省级一等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_20.png" alt="省奖20">
    <div class="award-info">
        <div class="award-title">第十九届全国大学生智能汽车竞赛-华东赛区室外ROS无人车赛<br><strong>省级一等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_21.png" alt="省奖21">
    <div class="award-info">
        <div class="award-title">第十九届全国大学生智能汽车竞赛-华东赛区室外ROS无人车赛<br><strong>省级一等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_25.png" alt="省奖25">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法应用赛-无人车视觉巡航赛<br>
        <strong>省级二等奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_24.png" alt="省奖24">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法创新赛-人工智能+未来场景<br>
        <strong>省级优秀奖</strong></div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_14.jpg" alt="省奖14">
    <div class="award-info">
        <div class="award-title">2024睿抗机器人开发者大赛(RAICOM)-智慧救援<br><strong>省级三等奖</strong></div>
        <div class="award-date">2024年07月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_3.jpg" alt="省奖3">
    <div class="award-info">
        <div class="award-title">第十五届蓝桥杯全国软件和信息技术专业人才大赛-江苏赛区C/C++程序设计大学B组<br>
        <strong>省级一等奖</strong></div>
        <div class="award-date">2024年04月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_18.png" alt="省奖18">
    <div class="award-info">
        <div class="award-title">2024年中国高校计算机大赛-团体程序设计天梯赛<br>
        <strong>团体成功参赛奖</strong></div>
        <div class="award-date">2024年04月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_23.png" alt="省奖23">
    <div class="award-info">
        <div class="award-title">2024年中国高校计算机大赛-团体程序设计天梯赛<br>
        <strong>个人成功参赛奖</strong></div>
        <div class="award-date">2024年04月</div>
    </div>

</div>

</div>
