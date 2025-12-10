<template>
  <!-- Education Section (mapped to #services) -->
  <section id="services" class="services section">

    <div class="container section-title" data-aos="fade-up">
      <h2>教育经历</h2>
      <p>我的求学之路与学术成就</p>
    </div>

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="service-item position-relative">
            <div class="icon">
              <i class="bi bi-mortarboard"></i>
            </div>
            <a href="#" class="stretched-link">
              <h3>湖南师范大学</h3>
            </a>
            <p><strong>专业：</strong>教育技术学 (本科)</p>
            <p><strong>时间：</strong>2023.09 - 至今</p>
            <p>主修课程：C语言程序设计、Web前端开发、教育技术学导论、教学系统设计等。</p>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div class="service-item position-relative">
            <div class="icon">
              <i class="bi bi-award"></i>
            </div>
            <a href="#" class="stretched-link">
              <h3>学术经历</h3>
            </a>
            <p>积极参加教授的科研项目</p>
            <ul>
              <li>校级三等奖学金 (2025)</li>
            </ul>
          </div>
        </div><!-- End Service Item -->

        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div class="service-item position-relative">
            <div class="icon">
              <i class="bi bi-activity"></i>
            </div>
            <a href="#" class="stretched-link">
              <h3>志愿活动</h3>
            </a>
            <p>积极参与学校社团活动，志愿活动。</p>
          </div>
        </div><!-- End Service Item -->

      </div>

    </div>

  </section><!-- /Services Section -->
</template>

<style scoped>
.service-item {
  background-color: var(--surface-color);
  box-shadow: 0px 5px 90px 0px rgba(0, 0, 0, 0.1);
  padding: 60px 30px;
  transition: all ease-in-out 0.3s;
  border-radius: 18px;
  border-bottom: 5px solid var(--surface-color);
  height: 100%;
}

.service-item .icon {
  color: var(--contrast-color);
  background: var(--accent-color);
  margin: 0;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  transition: ease-in-out 0.3s;
}

.service-item h3 {
  font-weight: 700;
  margin: 10px 0 15px 0;
  font-size: 22px;
  transition: ease-in-out 0.3s;
}

.service-item p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.service-item:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
}

.service-item:hover h3 {
  color: var(--accent-color);
}
</style>