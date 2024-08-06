<script setup>
import PiniaStore from './components/PiniaStore.vue'
import { testStore } from './stores/testStore';
const todoStore = testStore()
</script>

<template>
  <PiniaStore/>
  <p>從父組件呼叫pinia資料</p>
  <ul class="list">
    <li v-for="item in todoStore.todos">{{item.text}}</li>
  </ul>

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
