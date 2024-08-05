<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-end justify-content-between mb-4">
          <!-- Logo -->
            <img src="/logo.png" alt="Logo" class="logo">
            <button class="btn btn-secondary" @click="showAddNoteForm">
              <i class="fas fa-plus"></i> 新增
            </button>
        </div>
      </div>
      <AddNote @addAttraction="handleSpotAdded" @close="handleCloseAddNote"  v-if="showAddNewNote"></AddNote>
      <NoteList :spots="spots"></NoteList>
    </div>
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';
import NoteList from './components/NoteList.vue'
import AddNote from './components/AddNote.vue';

let spots = ref([]);
const showAddNewNote = ref(null);

// 顯示新增表單
const showAddNoteForm = () => {
  showAddNewNote.value = true;
};
// 關閉新增表單
const handleCloseAddNote = () => {
  // 關閉 AddNote 組件並將 showAddNewNote 設置為 false
  showAddNewNote.value = false;
};


const handleSpotAdded = (spotData) => {
  // Handle the added spot data here
  spots = spotData;
  console.log('New spot added:', spotData);
};
onUpdated(() =>{
  console.log('update');
  //spots = JSON.parse(localStorage.getItem('attractions'));
});
</script>

<style scoped>
.logo {
  width: 100px; /* 請替換成您的logo寬度 */
}
.container {
  margin-top: 50px;
  max-width: 462px;
}

</style>
