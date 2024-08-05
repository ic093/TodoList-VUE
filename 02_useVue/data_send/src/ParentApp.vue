<script setup>
import Child from './components/Child.vue';
import {ref} from 'vue';

const parentMessage = ref('父組件的訊息');
let receiveMessage = ref('');
const updateMessage = (newMessage) =>{
  receiveMessage.value = newMessage;
}
</script>

<template>
  <div>
    <h2>父組件</h2>
    <p>子組件傳來的訊息: {{ receiveMessage }} </p>
    <Child :msg="parentMessage" @update:message="updateMessage"></Child>
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
