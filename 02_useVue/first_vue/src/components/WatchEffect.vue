<template>
    <div>
      <p>{{ message }}</p>
      <button @click="updateMessage">更新訊息</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  
  const message = ref('這是初始訊息');
  
  watchEffect(() => {
    console.log('訊息已更新完畢');
  });
  
  const updateMessage = () => {
    message.value = '訊息已更新';
  };
  </script>
  