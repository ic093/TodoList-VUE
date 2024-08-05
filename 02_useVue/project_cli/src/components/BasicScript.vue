<template>
    <h1>使用Javascript Expressions</h1>
    <div>
      <p>{{ message }}</p> <!-- 插值表達式 -->
      <p>{{ message.toUpperCase() }}</p> <!-- 調用字符串方法 -->
      <p>{{ count + 1 }}</p> <!-- 數字運算 -->
      <p>{{ isTrue ? 'Yes' : 'No' }}</p> <!-- 條件表達式 -->
      <p>{{ array.length }}</p> <!-- 訪問數組屬性 -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!',
        count: 10,
        isTrue: true,
        array: [1, 2, 3, 4, 5]
      };
    }
  };
  </script>
  