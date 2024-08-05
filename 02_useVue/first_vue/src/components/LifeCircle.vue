<template>
    <div>
      <h2>生命週期範例</h2>
      <p>{{ message }}</p>
    </div>
</template>
  
<script setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
  
  const message = ref('');
  
  onBeforeMount(() => {
    console.log('beforeMount: 組件即將被掛載到 DOM 上');
    message.value = 'beforeMount';
  });
  
  onMounted(() => {
    console.log('mounted: 組件已經被掛載到 DOM 上');
    message.value = 'mounted';
  });
  
  onBeforeUpdate(() => {
    console.log('beforeUpdate: 組件更新之前');
    message.value = 'beforeUpdate';
  });
  
  onUpdated(() => {
    console.log('updated: 組件更新之後');
    message.value = 'updated';
  });
  
  onBeforeUnmount(() => {
    console.log('beforeUnmount: 組件即將被卸載');
    message.value = 'beforeUnmount';
  });
  
  onUnmounted(() => {
    console.log('unmounted: 組件已被卸載');
    message.value = 'unmounted';
  });
</script>
  