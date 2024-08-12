<script setup>
import { ref } from "vue";
import { noteStore } from "../store/noteStore";
import { storeToRefs } from "pinia";
const todoStore = noteStore();
const { pinnedNotes } = storeToRefs(todoStore); //只filfter是true的
const { markedPin } = todoStore; //storeToRefs 是用來將 store 的 state 和 getters 轉換為 Vue 的 ref，從而可以在模板中直接使用並保持響應式。而在你的情況下，你只是在使用 store 中的 action 方法，所以不需要使用 storeToRefs。直接解構並使用 addNote 是完全正確且簡便的方法。
</script>

<template>
  <div class="container">
    <router-link to="/add">
      <button class="btn btn-primary my-3">新增</button>
    </router-link>

    <div class="important">
      <h3 class="my-3"><i class="fa-solid fa-star"></i>重要</h3>
      <ul class="list-group">
        <li
          v-for="pinned in pinnedNotes"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ pinned.title }}
          <div class="icon-group d-flex justify-content-between">
            <i class="fa-solid fa-thumbtack" @click="markedPin(pinned.id)"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="all">
      <h4 class="my-4"><i class="fa-solid fa-book"></i>全部</h4>
      <ul class="list-group">
        <li
          v-for="note in todoStore.notes"
          class="list-group-item d-flex justify-content-between"
        >
          {{ note.title }}
          <div class="icon-group d-flex justify-content-between">
            <i class="fa-solid fa-thumbtack" @click="markedPin(note.id)"></i>
            <i class="fa-solid fa-trash-can"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.icon-group {
  flex-basis: 40px;
}
.icon-group i:hover {
  color: tomato;
  cursor: pointer;
}
</style>
