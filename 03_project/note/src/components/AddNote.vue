<script setup>
import {ref} from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import { storeToRefs } from 'pinia'

const newNoteTitle = ref('')
const newNoteContent = ref('筆記內容...')
const noteStore = useNoteStore()
const { notes } = storeToRefs(noteStore)
const { addNote } = noteStore

const clearPlaceholder = () =>{
  document.querySelector('#title').placeholder = ''
  
}
const clearTextArea = () => {
  newNoteContent.value = ''
}

</script>
<template>
<div class="container p-5">
  <main>
    <h2 class="mb-5">新增筆記</h2>
    <form @submit.prevent="addNote">
      <div class="mb-3">
          <input type="text" v-model="newNoteTitle" class="form-control" id="title" placeholder="請輸入標題..." @focus="clearPlaceholder">
      </div>
      <div class="mb-3">
          <textarea class="form-control" id="note" rows="20" v-model="newNoteContent" @focus="clearTextArea">筆記內容...</textarea>
      </div>
      <button class="btn btn-outline-success" @click="addNote(newNoteTitle, newNoteContent)">儲存 <i class="fa-solid fa-floppy-disk"></i></button>
    </form>
  </main>
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
</style>

