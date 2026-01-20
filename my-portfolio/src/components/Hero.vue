<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background">

    <img src="/assets/img/西装淡蓝.jpg" alt="" data-aos="fade-in">

    <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
            <h2>我是何思响</h2>
      <p><span class="typed" data-typed-items="湖南师范大学, 大三, 教育技术学, cs极客"></span></p>
    </div>

  </section><!-- /Hero Section -->
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* 覆盖 main.css 中的 flex 布局，防止 carousel 宽度塌陷 */
  display: block; 
}

/* 强制覆盖 main.css 中 .hero img 的绝对定位 */
:deep(.hero-img) {
  position: relative !important;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
}

.carousel-item {
  height: 100vh;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  bottom: 20%;
  z-index: 10;
}

.carousel-caption h2 {
  font-size: 48px;
  font-weight: 700;
  color: #fff;
}

.carousel-caption p {
  font-size: 24px;
  color: #eee;
}
</style>