<script setup>
import { ref } from 'vue';
const props= defineProps({

    msg:String

})

let showMsg = ref(props.msg);
const emit = defineEmits(['update:msg']);
function sendMsg(){
    emit('update:msg',showMsg)
}


</script>
<template>
    <h2>{{showMsg}}</h2>
    <input type="text" v-model="showMsg">
    <button type="button" @click="sendMsg">送訊息給</button>


</template>
<style scoped>
h2{
    padding: 10px;
    border: 1px solid red;
}
</style>