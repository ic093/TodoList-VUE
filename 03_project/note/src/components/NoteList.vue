<script setup>
import { useNoteStore } from '../stores/NoteStore'
const emit = defineEmits(['selectNote'])
const noteStore = useNoteStore()
const { selectedNote, deleteNote, markedPinned } = noteStore
let selectedNoteId = null

const selectNote = (note) => {
  emit('selectNote', 'note');
};

const showDeleteModal = (note) => {
  selectedNoteId = note.id
  const modal = new bootstrap.Modal(document.getElementById('deleteModal'))
  modal.show()
}

const confirmDelete = () => {
  if(selectedNoteId != null){
    noteStore.deleteNote(selectedNoteId)
  }else{
    modal.innerHTML("找不到此筆資料!")
  }
  const modal = document.getElementById('deleteModal')
  modal.classList.remove('show');
  document.querySelector('.modal-backdrop').classList.remove('show');
  router.push({ name: 'add'});
}
</script>
<template>
<div class="sidebar">
  <router-link :to="{ name: 'add'}" class="d-flex justify-content-around" >
    <button class="mt-3 btn btn-warning">新增筆記</button>
  </router-link>
  <div class="row align-items-start">
    <div class="col-12">
      <h5 class="p-3"><i class="fa-solid fa-thumbtack"></i>&nbsp;&nbsp;重要</h5>
      <ul class="list-group">
        <li v-for="note in noteStore.pinnedNotes" :key="note.id" class="list-group-item">
          <router-link :to="{ name: 'edit', params: { id: note.id } }" class="d-flex justify-content-around">
              <div class="note-title" @click="selectNote(note)" >{{ note.title }}</div>
              <div class="icon-group">
                <i class="fa-solid fa-thumbtack me-3 rotate" @click="markedPinned(note.id)"></i>
                <span><i class="fa-solid fa-trash" @click="showDeleteModal(note)"></i></span>
              </div>
          </router-link>  
        </li>
      </ul>
      <h5 class="p-3"><i class="fa-solid fa-list"></i>&nbsp;全部</h5>
      <ul class="list-group">
        <li v-for="note in noteStore.allNotes" :key="note.id" class="list-group-item">
          <router-link :to="{ name: 'edit', params: { id: note.id } }"  class="d-flex justify-content-around" >
              <div class="note-title" @click="selectNote(note)" >{{ note.title }}</div>
              <div class="icon-group">
                <span><i class="fa-solid fa-thumbtack" @click="markedPinned(note.id)"></i></span>
                <span><i class="fa-solid fa-trash" @click="showDeleteModal(note)"></i></span>
              </div>
          </router-link>  
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="modal fade" tabindex="-1" id="deleteModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">刪除資料</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>確定刪除此筆資料?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" @click="confirmDelete">確定</button>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
  .btn-warning{
    width: 80%;
  }
  h5{
    text-align: left;
  }
  .r45{
    transform: rotate(45deg);
    color: rgb(255, 81, 0);
  }
  .note-title{
    font-size: 18px;
    font-weight: bold;
    width: 60%;
  }
  .icon-group span:first-child{
    margin-right: 30px;
  }
  .icon-group i{
    cursor: pointer;
  }
  .icon-group i:hover{
    color: rgb(255, 81, 0);
    
  }
  .list-group{
    width: 100%;
    border-radius: 0px;
  }
  .list-group-item a{
    text-decoration: none;
    width: 100%;
    color: #666;
  }
  .list-group-item a:hover{
    color: #000;
  }
  .list-group-item{
    border: none;
    padding: 15px 0px;
    background: transparent;
    cursor: pointer;

  }
  .list-group-item:hover{
    background-color: rgb(247, 229, 180);
  }
  .list-group-item.active{
    background-color: rgb(244, 215, 109);
  }
  .sidebar{
    width: 20%;
    background: #f0f0f0;
    height: 80vh;
  }
  .modal {
    transition: opacity 0.3s ease;
  }
  .rotate{
    color: red;
    transform: rotate(45deg);
  }
</style>

