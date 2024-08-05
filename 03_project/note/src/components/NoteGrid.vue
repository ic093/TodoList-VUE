<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/NoteStore'
const noteStore = useNoteStore()

</script>
<template>
    <main id="result" class="container mt-4">
        <div class="row d-flex justify-content-start">
            <div v-for="note in noteStore.allNotes" class="col-4 mr-2">
                <router-link :to="{ name: 'edit', params: { id: note.id } }">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{note.title}}</h5>
                            <hr>
                            <p class="card-text">{{note.content}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-for="note in noteStore.pinnedNotes" class="col-4 my-4">
                <router-link :to="{ name: 'edit', params: { id: note.id } }">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{note.title}}</h5>
                            <hr>
                            <p class="card-text">{{note.content}}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
    
</template>
<style scoped>
.card{
    transition: all 0.3s;
}
.card:hover{
    background: #efe1bd;
    box-shadow: 2px 2px 10px #999;
  
}
.card-body:hover{
    color: #000;
}
a{
    width: 100%;
}
</style>