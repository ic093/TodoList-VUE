<script setup>
import { ref, watch, computed } from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const noteStore = useNoteStore()
const currentNote = computed(() => noteStore.notes.find(note => note.id === parseInt(route.params.id)));
const newNoteTitle = ref(currentNote.value ? currentNote.value.title : '')
const newNoteContent = ref(currentNote.value ? currentNote.value.content : '')
const showSuccessAlert = ref(false)

watch(currentNote, (newNote) => {
  if (newNote) {
    newNoteTitle.value = newNote.title;
    newNoteContent.value = newNote.content;
  }
});

const clearPlaceholder = () =>{
  document.querySelector('#title').placeholder = ''
  
}
const clearTextArea = () => {
  newNoteContent.value = ''
}
const updateNote = () => {
  if (currentNote.value) {
    noteStore.editNote(currentNote.value.id, newNoteTitle.value, newNoteContent.value);
    // 顯示更新成功消息
    showSuccessAlert.value = true;

    // 設置一個計時器，在 2 秒後隱藏消息
    setTimeout(() => {
      showSuccessAlert.value = false;
    }, 1000);
  }
}
</script>
<template>
<div class="container p-5">
  <div class="alert alert-success text-left" role="alert" v-if="showSuccessAlert">
    更新成功!
  </div>
  <h2 class="mb-5">編輯筆記</h2>
  <form @submit.prevent="updateNote">
    <div class="mb-3">
        <input type="text" v-model="newNoteTitle" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder">
    </div>
    <div class="mb-3">
        <textarea class="form-control" id="note" rows="20" v-model="newNoteContent"></textarea>
    </div>
    <button class="btn btn-outline-success" @click="updateNote()">更新 <i class="fa-solid fa-floppy-disk"></i></button>
  </form>
</div>

</template>
<style scoped>
form{
    position: relative;
}
.btn-outline-success{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.alert-success{
  transition: all 0.3s;
}
</style>

