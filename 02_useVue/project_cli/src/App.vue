<template>
  <nav>
    <ul>
      <li><router-link :to="{name: 'BasicScript'}">基本語法</router-link></li>
      <li><router-link :to="{name: 'DataBinding'}">各種資料綁定範例</router-link></li>
      <li><router-link :to="{name: 'Person'}">個人資料</router-link></li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script setup>
  import { RouterView, RouterLink } from 'vue-router';
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  width: 400px;
  margin: auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
ul li{
  width: 100px;
}
</style>
