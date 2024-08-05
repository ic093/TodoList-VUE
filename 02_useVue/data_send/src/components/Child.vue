<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String,
})
let inputValue = ref(props.msg);

const emit = defineEmits(['update:message'])

const sendMessage = () =>{
  emit('update:message', inputValue);
}
</script>

<template>
  <h1>子組件</h1>
  <div class="card">
    <div>
      <input type="text" v-model="inputValue" placeholder="Enter message">
    </div>
    
    <button type="button" @click="sendMessage">傳送訊息至父組件</button>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
input{
  margin-bottom: 20px;
  height: 40px;
  border-radius: 5px;
}
</style>
