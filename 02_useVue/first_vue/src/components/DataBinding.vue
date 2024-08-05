<template>
  <div>
    <!-- 文本插值 -->
    <p>{{ message }}</p>

    <!-- 屬性綁定 -->
    <input :placeholder="placeholderText" :style="inputStyle" />

    <!-- 樣式繫節 -->
    <div :class="divClass">This element has dynamic class</div>

    <!-- 條件渲染 -->
    <div v-if="showElement" class="show">This element is shown</div>
    <div v-else class="hide">This element is hidden</div>
    <!-- 事件綁定 -->
    <button @click="toggleElement">Toggle Element</button>
    <!-- 列表渲染 -->
    <ul>
      <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
    </ul>

    <!-- v-model -->
    <input v-model="inputValue" />
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 文本插值
const message = ref('Hello, World!');

// 屬性綁定
const placeholderText = ref('Enter text here');
const inputStyle = ref({ color: 'red', fontSize: '20px' });

// 樣式繫節
const divClass = ref('blue');

// 條件渲染
const showElement = ref(true);

// 列表渲染
const itemList = ref(['Item 1', 'Item 2', 'Item 3']);

// 事件綁定
const toggleElement = () => {
  showElement.value = !showElement.value;
};

// v-model
const inputValue = ref('');
</script>

<style>
.show {
  color: green;
}
.hide {
  display: none;
}
.blue {
  color: blue;
  font-weight: bold;
}
/* 可選的樣式 */
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
