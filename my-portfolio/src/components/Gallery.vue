<script setup>
import { onMounted, ref } from 'vue'

// 这里定义你的图片数据
// category 对应: self(自拍), views(风景), activities(活动), food(美食)
// img 对应图片路径, 请确保图片已放入 public/assets/img/ 对应的文件夹中
const galleryItems = ref([
  // Activities
  { category: 'activities', img: '/assets/img/activities/activity1.jpg', title: '活动照片 1', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity2.jpg', title: '活动照片 2', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity3.jpg', title: '活动照片 3', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity4.jpg', title: '活动照片 4', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity5.jpg', title: '活动照片 5', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity6.jpg', title: '活动照片 6', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity7.jpg', title: '活动照片 7', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity8.jpg', title: '活动照片 8', desc: '精彩瞬间' },
  { category: 'activities', img: '/assets/img/activities/activity9.jpg', title: '活动照片 9', desc: '精彩瞬间' },

  // Foods
  { category: 'food', img: '/assets/img/foods/food1.jpg', title: '美食 1', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food2.jpg', title: '美食 2', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food3.jpg', title: '美食 3', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food4.jpg', title: '美食 4', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food5.jpg', title: '美食 5', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food6.jpg', title: '美食 6', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food7.jpg', title: '美食 7', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food8.jpg', title: '美食 8', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food9.jpg', title: '美食 9', desc: '美味佳肴' },
  { category: 'food', img: '/assets/img/foods/food10.jpg', title: '美食 10', desc: '美味佳肴' },

  // Selfs
  { category: 'self', img: '/assets/img/selfs/self1.jpg', title: '自拍 1', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self2.jpg', title: '自拍 2', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self3.jpg', title: '自拍 3', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self4.jpg', title: '自拍 4', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self5.jpg', title: '自拍 5', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self6.jpg', title: '自拍 6', desc: '个人风采' },

  // Views
  { category: 'views', img: '/assets/img/views/view1.jpg', title: '风景 1', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view2.jpg', title: '风景 2', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view3.jpg', title: '风景 3', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view4.jpg', title: '风景 4', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view5.jpg', title: '风景 5', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view6.jpg', title: '风景 6', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view7.jpg', title: '风景 7', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view8.jpg', title: '风景 8', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view9.jpg', title: '风景 9', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view10.jpg', title: '风景 10', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view11.jpg', title: '风景 11', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view12.jpg', title: '风景 12', desc: '美丽景色' },
  { category: 'views', img: '/assets/img/views/view13.jpg', title: '风景 13', desc: '美丽景色' },
])

onMounted(() => {
  // 初始化 GLightbox (灯箱效果)
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  // 初始化 Isotope (过滤和布局)
  const isotopeItem = document.querySelector('.isotope-layout');
  if (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    // 确保 imagesLoaded 存在 (由 index.html 引入)
    if (window.imagesLoaded) {
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });
    }

    // 绑定过滤按钮点击事件
    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        }
      }, false);
    });
  }
})
</script>

<template>
  <!-- Gallery Section -->
  <section id="gallery" class="portfolio section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>个人相册</h2>
      <p>记录生活，分享美好</p>
    </div><!-- End Section Title -->

    <div class="container">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">全部</li>
          <li data-filter=".filter-self">自拍</li>
          <li data-filter=".filter-views">风景</li>
          <li data-filter=".filter-activities">活动</li>
          <li data-filter=".filter-food">美食</li>
        </ul><!-- End Portfolio Filters -->

        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <div v-for="(item, index) in galleryItems" :key="index" 
               class="col-lg-4 col-md-6 portfolio-item isotope-item" 
               :class="'filter-' + item.category">
            <div class="portfolio-content h-100">
              <img :src="item.img" class="img-fluid" :alt="item.title" 
                   onerror="this.src='/assets/img/hero-img.jpg'"> <!-- 图片加载失败时的占位图 -->
              <div class="portfolio-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
                <a :href="item.img" :title="item.title" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
                  <i class="bi bi-zoom-in"></i>
                </a>
                <a href="#" title="More Details" class="details-link">
                  <i class="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>
          </div><!-- End Portfolio Item -->

        </div><!-- End Portfolio Container -->

      </div>

    </div>

  </section><!-- /Gallery Section -->
</template>

<style scoped>
/* 复用 main.css 中的 .portfolio 样式，这里可以添加额外的自定义样式 */
.portfolio-item .portfolio-content {
  position: relative;
  overflow: hidden;
}

.portfolio-item img {
  transition: 0.3s;
  width: 100%;
  height: auto;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}
</style>
