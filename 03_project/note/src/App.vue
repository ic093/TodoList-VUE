
<script setup>
import { ref } from 'vue';
import ToolBar from './components/ToolBar.vue';
import NoteList from './components/NoteList.vue'
import { useNoteStore } from './stores/NoteStore'

const noteStore = useNoteStore();
const newNote = ref("")
const selectedNote = ref(null)

const editNote = (note) => {
  noteStore.setCurrentNote(note);
};
</script>
<template>
  <ToolBar></ToolBar>
  <div class="d-flex">
      <NoteList @selectNote="editNote"></NoteList>
      <router-view />
  </div>
</template>
<style scoped>

</style>
