<template>
  <div>
    <h1>我的筆記應用</h1>
    
    <input v-model="note" @input="updateSessionStorage" placeholder="輸入筆記" />
    <p>您的筆記：{{ note }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted, onUpdated, onUnmounted, onBeforeUnmount } from 'vue';
 //從localStorage獲得資料
const note = ref(localStorage.getItem('userNote') || '');
onMounted(() => {
    console.log('筆記已掛載');
});
onUpdated(() => {
    updateSessionStorage();
    console.log('筆記應用已經更新。');
});
onBeforeUnmount(() => {
    
    alert('筆記應用卸載前');
});
onUnmounted(() => {
    updateSessionStorage();
    alert('onUnmounted-筆記應用即將卸載。');
});
const updateSessionStorage = () => {
  localStorage.setItem('userNote', note.value);
};
</script>
