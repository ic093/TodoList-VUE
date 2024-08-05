<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
  <nav>
    <ul class="menu-list">
      <li><router-link to="/button">建立組件</router-link></li>
      <li><router-link to="/change_color">替換顏色</router-link></li>
      <li><router-link to="/life_circle">生命週期</router-link></li>
      <li><router-link to="/life_note">載入筆記</router-link></li>
      <li><router-link to="/data_binding">資料綁定</router-link></li>
      <li><router-link to="/computed">計算屬性(Computed)</router-link></li>
      <li><router-link to="/watch">Watch</router-link></li>
      <li><router-link to="/watch_effect">WatchEffect</router-link></li>
    </ul>
  </nav>
    <router-view></router-view>
  </div>
  
</template>

<style scoped>
.menu-list{
  width: 1200px;
  margin: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.menu-list li{
  width: 100px;
  font-size: 18px;
}
.container{
  width: 80%;
  margin: auto;
}
</style>
