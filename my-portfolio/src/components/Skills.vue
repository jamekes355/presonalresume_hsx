<template>
  <!-- Skills Section (mapped to #portfolio) -->
  <section id="portfolio" class="portfolio section">

    <div class="container section-title" data-aos="fade-up">
      <h2>个人技能</h2>
      <p>我的技术栈与专业能力</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row skills-content skills-animation">

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill"><span>HTML5 / CSS3</span> <i class="val">100%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
            </div>
          </div><!-- End Skills Item -->

          <div class="progress">
            <span class="skill"><span>Vue.js</span> <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"></div>
            </div>
          </div><!-- End Skills Item -->

          <div class="progress">
            <span class="skill"><span>Bootstrap</span> <i class="val">85%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%"></div>
            </div>
          </div><!-- End Skills Item -->

        </div>

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill"><span>JavaScript (ES6+)</span> <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div>
            </div>
          </div><!-- End Skills Item -->

          <div class="progress">
            <span class="skill"><span>Node.js</span> <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
            </div>
          </div><!-- End Skills Item -->

          <div class="progress">
            <span class="skill"><span>Git / Version Control</span> <i class="val">75%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
            </div>
          </div><!-- End Skills Item -->

        </div>

      </div>

    </div>

  </section><!-- /Portfolio Section -->
</template>

<style scoped>
.skills-content h5 {
  font-size: 18px;
  font-weight: 700;
  margin: 30px 0 15px 0;
}

.progress {
  height: 36px;
  display: block;
  background: none;
  border-radius: 0;
  margin-top: 15px;
}

.progress .skill {
  color: var(--default-color);
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: var(--heading-font);
}

.progress .skill .val {
  float: right;
  font-style: normal;
}

.progress-bar-wrap {
  background: color-mix(in srgb, var(--default-color), transparent 90%);
  height: 10px;
}

.progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: var(--accent-color);
}
</style>