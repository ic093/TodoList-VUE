<script setup>
import { ref } from 'vue'
import Register from './Register.vue';

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <Register/>
 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
