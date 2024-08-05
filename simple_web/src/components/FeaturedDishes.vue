<template>
  <div class="container py-4">
  <h1 class="py-5">主廚推薦</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-1.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">經典燉牛肉</h5>
          <p class="card-text">
            我們的經典燉牛肉採用最優質的牛肉和新鮮的蔬菜製成。口感鮮美、入口即化。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-2.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">義式烤羊排</h5>
          <p class="card-text">
            我們的義式烤羊排以優質的羊肉為主材料，經過特殊的醃料和調味料處理後，再用高溫烤製，表皮酥脆，內裡嫩滑，搭配各式綠色蔬菜，絕對是一道不容錯過的美食。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-3.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">鮮蝦燴飯</h5>
          <p class="card-text">
            我們的鮮蝦燴飯採用最優質的鮮蝦和米飯製成。清爽美味，讓人回味無窮。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-4.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">蒜香烤鮮魚</h5>
          <p class="card-text">
            我們的蒜香烤鮮魚選用當季最新鮮的魚，配以獨特的調味，讓您品嚐到來自海洋的美味。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-5.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">香煎鵝肝</h5>
          <p class="card-text">
            我們的香煎鵝肝由新鮮的鵝肝精心烹調而成，鵝肝口感豐富且香氣四溢，讓您品味到經典法式料理的滋味。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-6.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">椰香咖哩蝦</h5>
          <p class="card-text">
            我們的椰香咖哩蝦是結合了泰式與印度風味的特色菜，以新鮮的蝦肉和特製的咖哩料理而成。口感香辣，令人垂涎欲滴。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-7.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">藍帶牛排</h5>
          <p class="card-text">
            我們的藍帶牛排使用最優質的牛肉，搭配新鮮的蔬菜和特製的醬汁，讓您品嚐到最經典的牛排風味。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="../assets/imgs/featured-dish-8.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">黑松露義大利麵</h5>
          <p class="card-text">
            我們的黑松露義大利麵以最優質的義大利麵配上特製的黑松露醬汁，簡單卻充滿層次感，是您的必嚐佳餚。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
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
  overflow: hidden;
  font-size: 1.2rem;
  display: box;
  text-overflow: ellipsis;
  line-clamp: 2; /*行數*/
  box-orient: vertical;
  white-space: normal;
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