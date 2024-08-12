<script setup>
import { ref } from "vue";
import { noteStore } from "../store/noteStore";
import { storeToRefs } from "pinia";
const todoStore = noteStore();
const { pinnedNotes } = storeToRefs(todoStore);
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="note in todoStore.notes" class="col-3">
        <div class="card my-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">
              {{ note.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  padding: 0.8rem;
  transition: all 0.3s;
}
.card:hover {
  cursor: pointer;
  background-color: blanchedalmond;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
</style>
