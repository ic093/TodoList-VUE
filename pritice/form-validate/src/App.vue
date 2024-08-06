<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import DataSend from './components/DataSend.vue';
import { ref } from 'vue';
const appMsg = ref('從爸爸發送的')
let receiveMsg = ref("預設訊息")
function updateMsg(newMsg){
  receiveMsg.value=newMsg
}
</script>

<template>
  
<p>這是子組件傳來的</p>
<h3>{{receiveMsg}}</h3>

<DataSend :msg="appMsg" @update:msg="updateMsg"/>
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
