# 📜 Software Copyrights

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
    cursor: pointer;
}

.award-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.award-image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
}

.award-image {
    width: 100%;
    height: 100%;
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

/* 灯箱样式 */
.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
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
    animation: zoomIn 0.3s ease;
}

@keyframes zoomIn {
    from {
        transform: scale(0.8);
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
    border-radius: 8px;
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.1);
}

.lightbox-close {
    position: absolute;
    top: -40px;
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
    transition: transform 0.2s ease;
}

.lightbox-close:hover {
    transform: scale(1.2);
}

.lightbox-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 48px;
    font-weight: bold;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding: 20px;
    width: 60px;
    height: 60px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    user-select: none;
}

.lightbox-nav:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
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

# 🥇 Honors

<div class="awards-container">

<div class="section-title" style="font-size: 16px;">
  🏆 National Level awards (24)
</div>


<div class="awards-grid">

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_1.png" alt="国奖1">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法专项赛-算法巅峰赛<br>
        国家级二等奖</div>
        <div class="award-date">2024年12月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_2.png" alt="国奖2">
    <div class="award-info">
        <div class="award-title">第六届全球校园人工智能算法精英大赛-算法挑战赛-钢材表面缺陷检测与分割<br>
        国家级三等奖</div>
        <div class="award-date">2024年11月</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_3.jpg" alt="国奖3">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_4.jpg" alt="国奖4">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_5.png" alt="国奖5">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_6.jpg" alt="国奖6">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_7.png" alt="国奖7">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_8.png" alt="国奖8">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_9.jpg" alt="国奖9">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_10.png" alt="国奖10">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_11.jpg" alt="国奖11">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_12.jpg" alt="国奖12">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_13.png" alt="国奖13">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_14.png" alt="国奖14">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_15.png" alt="国奖15">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_16.png" alt="国奖16">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_17.png" alt="国奖17">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_18.png" alt="国奖18">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_19.png" alt="国奖19">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_20.png" alt="国奖20">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_21.png" alt="国奖21">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_22.png" alt="国奖22">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_23.png" alt="国奖23">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Guo_24.png" alt="国奖24">
    <div class="award-info">
        <div class="award-title">国家级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

</div>

<div class="section-title" style="font-size: 16px;">
  🎖️ Provincial Level Awards (30)
</div>

<div class="awards-grid">

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_1.png" alt="省奖1">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_2.png" alt="省奖2">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_3.jpg" alt="省奖3">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_4.jpg" alt="省奖4">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_5.png" alt="省奖5">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_6.png" alt="省奖6">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_7.png" alt="省奖7">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_8.png" alt="省奖8">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_9.png" alt="省奖9">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_10.jpg" alt="省奖10">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_11.png" alt="省奖11">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_12.png" alt="省奖12">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_13.png" alt="省奖13">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_14.jpg" alt="省奖14">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_15.png" alt="省奖15">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_16.png" alt="省奖16">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_17.png" alt="省奖17">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_18.jpg" alt="省奖18">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_19.png" alt="省奖19">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_20.png" alt="省奖20">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_21.png" alt="省奖21">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_22.jpg" alt="省奖22">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_23.png" alt="省奖23">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_24.png" alt="省奖24">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_25.png" alt="省奖25">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_26.png" alt="省奖26">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_27.png" alt="省奖27">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_28.png" alt="省奖28">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_29.png" alt="省奖29">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

<div class="award-card">
    <img class="award-image" src="images/Award/Sheng_30.png" alt="省奖30">
    <div class="award-info">
        <div class="award-title">省部级奖项</div>
        <div class="award-date">2024年</div>
    </div>
</div>

</div>

</div>
