<script setup>
import { ref,onBeforeMount,onMounted } from 'vue';
const text = ref("Click me");
function handleClick(){
    alert("已點擊!")
}
onMounted(()=>{
    alert("已經載入元件")
})
onBeforeMount(()=>{
    alert("啟動mounted")
})
</script>
<template>
    <button id = "Show" @click="handleClick">{{text}} </button>
</template>
<style scoped>
#Show{
    border: 1px solid red;
    background-color: tomato;
    color: azure;
}


</style>   