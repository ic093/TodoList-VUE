<script setup>
import { ref } from 'vue';
import {testStore} from '../stores/testStore'
import {storeToRefs} from 'pinia'

const todoStore = testStore();
const {finishedTodos} = storeToRefs(todoStore);
const {addTodo} = todoStore
const newItem = ref("");

</script>
<template>
    <h1>Pinaia狀態管理</h1>
    <div class="container">
        <input type="text" v-model="newItem">
        <button @click="addTodo(newItem)">新增待辦事項</button>
        <ul class="list">
            <li class="item" v-for="item in todoStore.todos">{{item.text}}</li>
           
        </ul>
        <p>已完成清單</p>
        <ul class="list">
            <li v-for="finish_item in finishedTodos">{{finish_item.text}}</li>
        </ul>
    </div>
</template>
<style scoped>
input{
    width: 100%;
}
button{
    margin-top: 20px;
    margin-bottom: 20px;
    background-color:fuchsia
}

</style>