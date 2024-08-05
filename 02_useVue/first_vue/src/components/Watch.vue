<template>
    <div>
      <input type="text" v-model="inputValue" placeholder="輸入文字" />
      <p>輸入的文字長度：{{ inputLength }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const inputValue = ref('');
  const inputLength = ref(0);
  
  watch(inputValue, (newVal) => {
    inputLength.value = newVal.length;
  });
  </script>
  