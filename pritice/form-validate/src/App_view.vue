<script setup>

</script>

<template>
  <ul>
    <li>
      <router-link to="/">
        Pinaia狀態管理
      </router-link>
    </li>
    <li>
      <router-link to="/register">
        表單驗證
      </router-link>
    </li>
    <li>
      <router-link to="/DataSend">
        父子組件
      </router-link>
    </li>
  </ul>
  <div class="container">
    <router-view></router-view>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
