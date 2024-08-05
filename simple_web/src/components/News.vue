<template>
  
  <div class="container py-5">
    <h1 class="py-5">最新消息</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4">
          <img src="./assets/imgs/news1.jpg" class="card-img-top" alt="News 1">
          <div class="card-body">
            <h5 class="card-title">新的美食節目即將開播</h5>
            <p class="card-text">我們的主廚參加了一個全新的美食節目，並準備展示他的廚藝和專業知識。</p>
            <a href="#" class="btn btn-primary">閱讀更多</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4">
          <img src="./assets/imgs/news2.jpg" class="card-img-top" alt="News 2">
          <div class="card-body">
            <h5 class="card-title">推出母親節新菜單</h5>
            <p class="card-text">我們的主廚為您帶來了全新的母親節菜單，其中包括各種新菜品和精選佳餚。</p>
            <a href="#" class="btn btn-primary">閱讀更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 900px;
}

.card {
  border: none;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1.2rem;
}

.btn-primary {
  background-color: #FFB900;
  border-color: #FFB900;
}

.btn-primary:hover {
  background-color: #FFC107;
  border-color: #FFC107;
}
</style>
