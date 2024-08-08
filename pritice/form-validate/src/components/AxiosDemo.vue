<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const parts = ref([]);
onMounted(async () => {
  try {
    const postData = {
      //postData 是用來在 POST 請求中發送的資料。
      title: "vue好煩",
      body: "要努力學習",
      userId: 1,
    };
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios //axios 是一個用來發送 HTTP 請求的庫。
      .post(apiUrl, postData) //axios.post 發送一個 POST 請求到 apiUrl，並攜帶 postData。成功時會在控制台輸出 "請求成功" 和響應數據，失敗時會輸出 "請求失敗" 和錯誤信息。
      .then((respone) => {
        console.log("請求成功", respone.data);
        parts.value.push(respone.data); //// 將成功的響應數據添加到 parts 陣列中。
      })
      .catch((error) => {
        console.log("請求失敗", error);
      });

    const respone = await axios.get(
      //axios.get 發送一個 GET 請求到 API 以獲取資料，並將獲取到的資料賦值給 parts.value
      "https://jsonplaceholder.typicode.com/posts"
    );
    parts.value = respone.data;
    console.log(parts.value);
  } catch (error) {
    console.log("請求失敗", error);
  }
});
</script>
<template>
  <h1>Axios示範</h1>
  <ul>
    <li v-for="part in parts">{{ part.title }}</li>
  </ul>
</template>
<style scoped></style>
