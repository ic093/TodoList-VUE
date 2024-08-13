<script setup>
import { ref } from "vue";
import { noteStore } from "../store/noteStore";
import { storeToRefs } from "pinia";

const todoStore = noteStore();
const { pinnedNotes } = storeToRefs(todoStore); //只filfter是true的
const { markedPin } = todoStore; //storeToRefs 是用來將 store 的 state 和 getters 轉換為 Vue 的 ref，從而可以在模板中直接使用並保持響應式。而在你的情況下，你只是在使用 store 中的 action 方法，所以不需要使用 storeToRefs。直接解構並使用 addNote 是完全正確且簡便的方法。
const { deleteNote } = todoStore;
let selectedNoteId = null; //起始值為 null，表示一開始沒有選中的筆記。

let selectedNote = ref(""); // 用來儲存選中的筆記

const showDeleteModal = (note) => {
  selectedNoteId = note.id;
  //selectedNoteId = note.id;
  //這行程式碼將傳入的 note 對象的 id 屬性值賦給 selectedNoteId 變數。
  //這樣就能夠記錄要刪除的筆記的 ID，後續操作會根據這個 ID 來確定哪一個筆記需要被刪除。
  selectedNote.value = note;
  //selectedNote.value = note;
  //這行程式碼將傳入的 note 對象存儲到 selectedNote 中。
  //由於 selectedNote 是一個 ref，因此我們使用 .value 來訪問和更新其值。
  //這樣一來，selectedNote 就會保存當前被選中的筆記的完整資訊，而不僅僅是 ID。
  //在顯示模態框時，可以利用 selectedNote 的值來顯示筆記的詳細資訊，例如標題或內容。
  const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
  modal.show();
};

const checkDelete = () => {
  const modalElement = document.querySelector("#deleteModal");
  if (selectedNoteId !== null) {
    todoStore.deleteNote(selectedNoteId);
  } else {
    modalElement.querySelector(".modal-body").innerHTML = "找不到此筆資料!";
  }

  const modalClose = bootstrap.Modal.getInstance(modalElement);
  modalClose.hide();

  // const modal = document.getElementById("deleteModal");
  // modal.classList.remove("show");
  // document.querySelector(".modal-backdrop").classList.remove("show");
  // router.push({ name: "add" });
};
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
          :key="pinned.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <router-link :to="{ name: 'edit', params: { id: pinned.id } }">
            {{ pinned.title }}
          </router-link>
          <div class="icon-group d-flex justify-content-between">
            <i class="fa-solid fa-thumbtack" @click="markedPin(pinned.id)"></i>
            <i
              class="fa-solid fa-trash-can"
              @click="showDeleteModal(pinned)"
            ></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="all">
      <h4 class="my-4"><i class="fa-solid fa-book"></i>全部</h4>
      <ul class="list-group">
        <li
          v-for="note in todoStore.notes"
          :key="note.id"
          class="list-group-item d-flex justify-content-between"
        >
          <router-link :to="{ name: 'edit', params: { id: note.id } }">
            {{ note.title }}
          </router-link>
          <!-- 如果你需要動態地傳遞一個對象（例如包含路由名稱和參數），就必須使用 v-bind 來告訴 Vue 這個屬性值是動態的 。在這裡，to 的值是一個對象，它包含了動態生成的內容（name 和 params）。由於這個對象的值是動態的（即 pinned.id 是一個變數），你必須使用 v-bind，以便 Vue 能夠解析這個對象，並將生成的路由資訊傳遞給 router-link。。靜態的字串，因此不需要使用 v-bind。-->
          <div class="icon-group d-flex justify-content-between">
            <i class="fa-solid fa-thumbtack" @click="markedPin(note.id)"></i>
            <i class="fa-solid fa-trash-can" @click="showDeleteModal(note)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="modal" tabindex="-1" id="deleteModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">刪除資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            是否要刪除
            <span :style="{ color: 'tomato', fontSize: '20px' }">
              {{ selectedNote?.title ? selectedNote.title : "" }}
            </span>
            這本筆記
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="checkDelete">
            確定
          </button>
        </div>
      </div>
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
