<script setup>
import { ref, computed } from "vue";
import { noteStore } from "../store/noteStore";
import { useRoute } from "vue-router"; //資料要帶進來
import { watch } from "vue";
const todoStore = noteStore(); //用todoStore將在noteStore的資料存進去
const route = useRoute();
const currentNote = computed(() =>
  //computed 是 Vue 中用來定義計算屬性的函式。它接受一個函式作為參數，這個函式的返回值將成為計算屬性的值，並且該值會自動隨著其依賴的數據變化而更新。
  //computed 屬性會自動追蹤其依賴的數據（在這個例子中是 noteStore.notes 和 route.params.id）。當這些依賴的數據發生變化時，computed 屬性會自動重新計算並更新其值。這使得你可以依賴 Vue 的響應式系統，而不需要手動監控依賴的數據或在數據變更時手動更新結果。

  //例如，假設路由中的 id 參數發生變化（例如用戶導航到不同的筆記），computed 屬性會自動重新計算 currentNote，並返回新的匹配筆記。在你的例子中，每次訪問 currentNote 時，不需要重新遍歷 noteStore.notes 陣列，除非 notes 或 route.params.id 發生變化。
  todoStore.notes.find((note) => note.id === parseInt(route.params.id))
);
const noteTitle = ref(currentNote.value ? currentNote.value.title : "");
const noteContent = ref(currentNote.value ? currentNote.value.content : "");
const showSuccessAlert = ref(false);
watch(currentNote, (newNote) => {
  if (newNote) {
    noteTitle.value = newNote.title;
    noteContent.value = newNote.content;
  }
});

function UpdateNote() {
  if (currentNote.value) {
    todoStore.editNote(
      currentNote.value.id,
      noteTitle.value,
      noteContent.value
    );
    showSuccessAlert.value = true;
    setTimeout(() => {
      showSuccessAlert.value = false;
    }, 1000);
  }
}
</script>
<template>
  <div class="container">
    <div class="alert alert-danger" role="alert" v-if="showSuccessAlert">
      更新成功
    </div>
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
      <button type="button" class="btn btn-primary" @click="UpdateNote()">
        更新
      </button>
    </form>
  </div>
</template>
<style scoped>
form {
  text-align: right;
}
</style>
