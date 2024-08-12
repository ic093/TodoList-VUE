<script setup>
import NoteGrid from "./components/NoteGrid.vue";
import TopBar from "./components/TopBar.vue";
import NoteList from "./components/NoteList.vue";
</script>

<template>
  <TopBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <NoteList />
      </div>
      <div class="col-9"><router-view></router-view></div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
