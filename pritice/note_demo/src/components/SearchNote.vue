<script setup>
import { noteStore } from "../store/noteStore";
import { ref } from "vue";
const todoStore = noteStore();
</script>
<template>
  <h3 v-if="todoStore.searchResults.length === 0">查無相關資料</h3>
  <div
    v-for="note in todoStore.searchResults"
    class="card my-3"
    style="width: 18rem"
  >
    <router-link :to="{ name: 'edit', params: { id: note.id } }">
      <div class="card-body">
        <h5 class="card-title">{{ note.title }}</h5>
        <p class="card-text">{{ note.content }}</p>
      </div></router-link
    >
  </div>
</template>
<style scoped>
#result {
  width: 70%;
  margin: 0 auto;
}
.card {
  transition: all 0.3s;
}
.card:hover {
  background: #efe1bd;
  box-shadow: 2px 2px 10px #999;
}
.card-body:hover {
  color: #000;
}
a {
  width: 100%;
}
</style>
