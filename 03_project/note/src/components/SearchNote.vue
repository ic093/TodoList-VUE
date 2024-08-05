<script setup>
    import { useNoteStore } from '../stores/NoteStore'
    const noteStore = useNoteStore()
</script>
<template>
    <h2 v-if="noteStore.searchResults.length == 0">查無相關資料</h2>
    <main id="result" class="container d-flex justify-content-between pt-5 align-start flex-wrap">
        <div v-for="note in noteStore.searchResults" class="card" style="width: 23%; height: 18rem;">
            <router-link :to="{ name: 'edit', params: { id: note.id } }">
                <div class="card-body">
                    <h5 class="card-title">{{note.title}}</h5>
                    <hr>
                    <p class="card-text">{{note.content}}</p>
                </div>
            </router-link>
        </div>
    </main>
</template>
<style scoped>
#result{
    width: 70%;
    margin: 0 auto;
}
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