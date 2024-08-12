<script setup>
import { ref } from "vue";
import { noteStore } from "../store/noteStore";
const todoStore = noteStore(); //用todoStore將在noteStore的資料存進去
const noteTitle = ref("請輸入標題");
const noteContent = ref("請輸入筆記內容");
const { addNote } = todoStore;
//比較NoteGride裡，為何不用storeToRefs呢，是因為:不需要 storeToRefs 的情況：當你只是在 script 中使用 action 方法或想要直接調用 store 中的方法時，不需要 storeToRefs。這是因為 action 本身不需要轉換成 ref，它只是普通的函數，你可以直接解構使用。
//storeToRefs 是用來將 store 的 state 和 getters 轉換為 Vue 的 ref，從而可以在模板中直接使用並保持響應式。而在你的情況下，你只是在使用 store 中的 action 方法，所以不需要使用 storeToRefs。直接解構並使用 addNote 是完全正確且簡便的方法。
</script>
<template>
  <div class="container">
    <form class="">
      <div class="mb-3">
        <input
          v-model="noteTitle"
          type="text"
          class="form-control"
          id="title"
          aria-describedby="emailHelp"
          style="margin-top: 100px"
        />
      </div>
      <div class="mb-3">
        <textarea
          v-model="noteContent"
          name="content"
          id="content"
          rows="3"
          class="form-control"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        @click="addNote(noteTitle, noteContent)"
      >
        儲存
      </button>
    </form>
  </div>
</template>
<style scoped>
form {
  text-align: right;
}
</style>
