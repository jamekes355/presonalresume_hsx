<template>
  <!-- Contact Section -->
  <section id="contact" class="contact section">

    <div class="container section-title" data-aos="fade-up">
      <h2>联系我</h2>
      <p>如有任何问题或合作意向，请随时联系</p>
    </div>

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-5">

          <div class="info-wrap">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>地址</h3>
                <p>湖南省长沙市岳麓区麓山南路36号</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>电话</h3>
                <p>+86 138 0000 0000</p>
              </div>
            </div><!-- End Info Item -->

            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>邮箱</h3>
                <p>contact@example.com</p>
              </div>
            </div><!-- End Info Item -->

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.783e4!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div class="col-lg-7">
          <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-4">

              <div class="col-md-6">
                <label for="name-field" class="pb-2">姓名</label>
                <input type="text" name="name" id="name-field" class="form-control" required="">
              </div>

              <div class="col-md-6">
                <label for="email-field" class="pb-2">邮箱</label>
                <input type="email" class="form-control" name="email" id="email-field" required="">
              </div>

              <div class="col-md-12">
                <label for="subject-field" class="pb-2">主题</label>
                <input type="text" class="form-control" name="subject" id="subject-field" required="">
              </div>

              <div class="col-md-12">
                <label for="message-field" class="pb-2">留言</label>
                <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">发送消息</button>
              </div>

            </div>
          </form>
        </div><!-- End Contact Form -->

      </div>

    </div>

  </section><!-- /Contact Section -->
</template>

<style scoped>
.contact .info-wrap {
  background-color: var(--surface-color);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
}

.contact .info-item i {
  font-size: 20px;
  color: var(--accent-color);
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--accent-color), transparent 40%);
  margin-right: 15px;
}

.contact .info-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 2px 0;
}

.contact .info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.contact .info-item:hover i {
  background: var(--accent-color);
  color: var(--contrast-color);
}

.contact .php-email-form {
  background-color: var(--surface-color);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: var(--default-color);
  background-color: color-mix(in srgb, var(--background-color), transparent 50%);
  border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--accent-color);
}

.contact .php-email-form button[type=submit] {
  color: var(--contrast-color);
  background: var(--accent-color);
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}
</style>