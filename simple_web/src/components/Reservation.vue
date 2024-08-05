<template>
  <section id="book-a-table" class="book-a-table">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Book a table</h2>
        <p>預約訂位</p>
      </div>
      <form action="#" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-4 col-md-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="姓名" data-rule="minlen:4"
              data-msg="請輸入至少 4 個字元">
            <div class="validate"></div>
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <input type="email" class="form-control" name="email" id="email" placeholder="電子郵件" data-rule="email"
              data-msg="請輸入正確的電子郵件">
            <div class="validate"></div>
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <input type="text" class="form-control" name="phone" id="phone" placeholder="電話號碼" data-rule="minlen:4"
              data-msg="請輸入至少 4 個字元">
            <div class="validate"></div>
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input type="text" name="date" class="form-control" id="date" placeholder="日期" data-rule="minlen:4"
              data-msg="請輸入至少 4 個字元">
            <div class="validate"></div>
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input type="text" class="form-control" name="time" id="time" placeholder="時間" data-rule="minlen:4"
              data-msg="請輸入至少 4 個字元">
            <div class="validate"></div>
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input type="number" class="form-control" name="people" id="people" placeholder="人數" data-rule="minlen:1"
              data-msg="請輸入至少 1 個字元">
            <div class="validate"></div>
          </div>
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" name="message" rows="5" placeholder="訊息"></textarea>
          <div class="validate"></div>
        </div>
        <div class="mb-3">
          <div class="loading">載入中</div>
          <div class="error-message"></div>
          <div class="sent-message">您的預約請求已發送。我們會回撥或發送電子郵件以確認您的預訂。謝謝！</div>
        </div>
        <div class="text-center"><button type="submit">訂位</button></div>
      </form>
    </div>
  </section>
</template>