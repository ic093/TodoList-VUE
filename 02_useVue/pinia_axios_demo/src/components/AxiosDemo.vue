<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
const posts = ref([])
onMounted(async () => {
    
    try{
        // 定義要提交的資料
        const postData = {
        title: 'Foo',
        body: 'bar',
        userId: 1,
        };
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    // 發送 POST 請求
    axios.post(apiUrl, postData)
    .then((response) => {
        console.log('請求成功:', response.data);
    })
    .catch((error) => {
        console.error('請求失敗:', error);
    });
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        posts.value = response.data
    }catch(error){
        console.log(error)
    }
})
</script>
<template>
    <h1>Axios載入資料</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>
<style scoped>
    ul li{
        text-align: left;
    }
</style>