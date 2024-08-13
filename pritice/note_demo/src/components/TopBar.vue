<script setup>
import { ref } from "vue";
import { noteStore } from "../store/noteStore";
import { useRouter } from "vue-router";
const router = useRouter();
const keyword = ref("");
const todoStore = noteStore();
const searchNotes = async () => {
  const results = await todoStore.searchNotes(keyword.value);
  router.push({ name: "search", params: { searchResults: results } }); //searchResults 是用來存放搜索結果的。
};
//在父組件或在某個處理搜索邏輯的地方，當收到 search 事件並且獲取到 keyword 值後，你會調用 NoteStore 中的 searchNotes 方法。這裡的 searchNotes 方法是從 NoteStore 中調用的，它接受一個參數 keyword，即用戶輸入的搜索關鍵字。這個 keyword 會被傳遞到 NoteStore 的 searchNotes 方法中，用來過濾符合搜索條件的筆記。
const clearPlaceholder = () => {
  document.querySelector("#keyword").placeholder = "";
};
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex">
      <img src="/note_logo.png" alt="" />
      <a class="navbar-brand" href="#">Qick Note</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" @submit.prevent="$emit('search', keyword)">
          <!-- 當表單被提交時，這段代碼會觸發 search 事件，並將當前的 keyword 值作為參數傳遞出去。這個 keyword 就是上面定義的響應式變數，它包含了用戶當前輸入的搜索關鍵字。 -->
          <input
            id="keyword"
            v-model="keyword"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            @keyup.enter="searchNotes()"
            @click="clearPlaceholder()"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click="searchNotes()"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<style scoped>
img {
  width: 80px;
}
</style>
