<script setup>
import { onMounted, ref, computed } from 'vue'

// category 对应: self(自拍), views(风景), activities(活动), food(美食)
const galleryItems = ref([
  // Activities
  { category: 'activities', img: '/assets/img/activities/activity1.jpg', title: '敬老志愿活动', desc: '大一和一位擅长书画的残疾老爷爷合影' },
  { category: 'activities', img: '/assets/img/activities/activity2.jpg', title: '火锅聚餐', desc: '和发小们开心的聚会' },
  { category: 'activities', img: '/assets/img/activities/activity3.jpg', title: '参观梅溪湖剧院', desc: '与高中同学游览' },
  { category: 'activities', img: '/assets/img/activities/activity4.jpg', title: '驾考结束', desc: '与教练的庆祝' },
  { category: 'activities', img: '/assets/img/activities/activity5.jpg', title: '宿舍合影', desc: '可爱的舍友们' },
  { category: 'activities', img: '/assets/img/activities/activity6.jpg', title: '课堂展示', desc: '精教育学原理自信分享故事' },
  { category: 'activities', img: '/assets/img/activities/activity7.jpg', title: '快闪活动', desc: '参加闪耀长沙公益跑的快闪环节' },
  { category: 'activities', img: '/assets/img/activities/activity8.jpg', title: '学术聚餐', desc: '教技国际会议与国际友人合影' },
  { category: 'activities', img: '/assets/img/activities/activity9.jpg', title: '心理游园会', desc: '学校趣味活动比赛' },

  // Foods
  { category: 'food', img: '/assets/img/foods/food1.jpg', title: '猪脚饭', desc: '肥而不腻很是下饭' },
  { category: 'food', img: '/assets/img/foods/food2.jpg', title: '健身餐', desc: '少盐油的健康饮食' },
  { category: 'food', img: '/assets/img/foods/food3.jpg', title: '湘味小炒', desc: '学校食堂的第一餐' },
  { category: 'food', img: '/assets/img/foods/food4.jpg', title: '兰州拉面', desc: '经典的味道' },
  { category: 'food', img: '/assets/img/foods/food5.jpg', title: '重庆小面', desc: '酸辣可口' },
  { category: 'food', img: '/assets/img/foods/food6.jpg', title: '荷叶饭', desc: '清新香喷' },
  { category: 'food', img: '/assets/img/foods/food7.jpg', title: '长沙米粉', desc: '嗦米粉喽~' },
  { category: 'food', img: '/assets/img/foods/food8.jpg', title: '麦当劳汉堡', desc: '方便好吃' },
  { category: 'food', img: '/assets/img/foods/food9.jpg', title: '一荤一素', desc: '最喜欢豆芽了' },
  { category: 'food', img: '/assets/img/foods/food10.jpg', title: '牛肉粉', desc: '牛肉现炒无敌香' },

  // Selfs
  { category: 'self', img: '/assets/img/selfs/self1.jpg', title: '自拍 1', desc: '家教路上' },
  { category: 'self', img: '/assets/img/selfs/self2.jpg', title: '自拍 2', desc: '' },
  { category: 'self', img: '/assets/img/selfs/self3.jpg', title: '自拍 3', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self4.jpg', title: '自拍 4', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self5.jpg', title: '自拍 5', desc: '个人风采' },
  { category: 'self', img: '/assets/img/selfs/self6.jpg', title: '自拍 6', desc: '个人风采' },

  // Views
  { category: 'views', img: '/assets/img/views/view1.jpg', title: '清水塘大桥', desc: '徒步株洲的邂逅' },
  { category: 'views', img: '/assets/img/views/view2.jpg', title: '枫叶', desc: '潇湘中路旁的树叶与车流' },
  { category: 'views', img: '/assets/img/views/view3.jpg', title: '师大校门', desc: '晚上不一样的校门' },
  { category: 'views', img: '/assets/img/views/view4.jpg', title: '铺砖路', desc: '阳光下的桃子湖' },
  { category: 'views', img: '/assets/img/views/view5.jpg', title: '雪', desc: '老家难见的大雪' },
  { category: 'views', img: '/assets/img/views/view6.jpg', title: '雪', desc: '雪大难行车' },
  { category: 'views', img: '/assets/img/views/view7.jpg', title: '梅溪湖剧院', desc: '特色的建筑' },
  { category: 'views', img: '/assets/img/views/view8.jpg', title: '建筑光影', desc: '师大生物研究所' },
  { category: 'views', img: '/assets/img/views/view9.jpg', title: '教科院', desc: '从桃子湖拍教科院' },
  { category: 'views', img: '/assets/img/views/view10.jpg', title: '毛主席青年雕像', desc: '独立寒秋，湘江北去，橘子洲头~' },
  { category: 'views', img: '/assets/img/views/view11.jpg', title: '湖南银行门牌石', desc: '背景层峦叠嶂' },
  { category: 'views', img: '/assets/img/views/view12.jpg', title: '梧桐秋叶', desc: '梅溪湖公园一角' },
  { category: 'views', img: '/assets/img/views/view13.jpg', title: '碧桃花', desc: '缤纷璀璨' },
])

// 轮播图数据：从每个分类中选取前2张图片
const carouselItems = computed(() => {
  const categories = ['activities', 'foods', 'selfs', 'views'];
  let items = [];
  categories.forEach(cat => {
    const catItems = galleryItems.value.filter(item => item.category === cat).slice(0, 2);
    items = [...items, ...catItems];
  });
  return items;
});

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
    </div><!-- End Section Title -->

    <div class="container">

      <!-- Gallery Carousel -->
      <div id="galleryCarousel" class="carousel slide mb-5" data-bs-ride="carousel" data-aos="fade-up">
        <div class="carousel-indicators">
          <button v-for="(item, index) in carouselItems" :key="'indicator-' + index" 
                  type="button" data-bs-target="#galleryCarousel" :data-bs-slide-to="index" 
                  :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : 'false'" 
                  :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
          <div v-for="(item, index) in carouselItems" :key="'slide-' + index" 
               class="carousel-item" :class="{ active: index === 0 }">
            <img :src="item.img" class="d-block w-100 gallery-carousel-img" :alt="item.title"
                 onerror="this.src='/assets/img/hero-img.jpg'">
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- End Gallery Carousel -->

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
                <a :href="item.img" data-gallery="portfolio-gallery-app" class="glightbox preview-link">
                  <i class="bi bi-zoom-in"></i>
                </a>
              </div>
            </div>
          </div><!-- End Portfolio Item -->

        </div><!-- End Portfolio Container -->

      </div>

    </div>

  </section><!-- /Gallery Section -->
</template>

<style scoped>/* 复用 main.css 中的 .portfolio 样式，这里可以添加额外的自定义样式 */
.portfolio-item {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.portfolio-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.portfolio-item .portfolio-content {
  position: relative;
  overflow: hidden;
}

.portfolio-item img {
  transition: 0.5s;
  width: 100%;
  height: auto;
}

.portfolio-item:hover img {
  transform: scale(1.1);
  filter: brightness(0.8);
}

/* 覆盖默认的 portfolio-info 样式 */
.portfolio-item .portfolio-info {
  opacity: 0;
  position: absolute;
  left: 15px !important; /* 覆盖 main.css 的 30px */
  right: 15px !important;
  bottom: 15px !important; /* 悬停时显示的位置 */
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(0, 0, 0, 0.75) !important; /* 强制使用深色背景，覆盖 main.css 的白色背景 */
  padding: 15px !important;
  text-align: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.portfolio-item:hover .portfolio-info {
  opacity: 0.8 !important;
}

.portfolio-item .portfolio-info h4 {
  font-size: 18px;
  font-weight: 600;
  color: #fff !important; /* 强制白色文字 */
  margin-bottom: 5px;
  padding-right: 0 !important;
}

.portfolio-item .portfolio-info p {
  color: rgba(255, 255, 255, 0.9) !important; /* 强制浅白色文字 */
  font-size: 14px;
  margin-bottom: 10px;
  padding-right: 0 !important;
}

.portfolio-item .portfolio-info .preview-link {
  position: relative;
  display: inline-block;
  font-size: 24px;
  color: #fff !important;
  transition: 0.3s;
  line-height: 1;
  margin-top: 5px;
  right: auto !important;
  top: auto !important;
}

.portfolio-info .preview-link:hover {
  color: var(--accent-color);
  transform: scale(1.2);
}

.gallery-carousel-img {
  height: 500px;
  object-fit: cover;
  border-radius: 15px;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

h5 {
  color: #fff;
  font-weight: 600;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}
</style>
