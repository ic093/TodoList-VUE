<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/NoteStore'
import { useRouter } from 'vue-router';
const noteStore = useNoteStore()
const router = useRouter();
const keyword = ref("")
const searchNotes = async () => {
  const results = await noteStore.searchNotes(keyword.value);
  console.log(results)
  router.push({ name: 'search', params: { searchResults: results } });
}
const clearPlaceholder = () =>{
    document.querySelector('#keyword').placeholder = ''
}
//search keyword when click search button and enter key use vue3 setup syntax

</script>
<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid d-flex">
          <router-link :to="{ name: 'grid' }" class="navbar-brand">
            <img class="logo" src="/logo.png" alt="">&nbsp;Quick Note
          </router-link>
          <form class="d-flex" @submit.prevent="$emit('search', keyword)">
            <input id="keyword" v-model="keyword" class="form-control me-2" @keyup.enter="searchNotes()" type="search" placeholder="Search" aria-label="Search" @focus="clearPlaceholder">
            <button class="btn" type="submit" @click="searchNotes()"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
    </nav>
</template>
<style scoped>
.logo{
    width: 100px;
}
.btn:active{
    outline: none;
}
</style>