<template>
  <div class="justify-content-start w-100 mb-4">
      <form @submit.prevent="saveAttraction">
        <div class="form-group d-flex justify-content-start align-items-center mb-3">
          <img :src="previewImageUrl" class="spot-image new-image me-3">
          <input type="file" id="attractionImage" class="form-control" @change="handleImageChange" >
        </div>
        <div class="form-group d-flex align-items-center justify-content-between mb-3">
          <input type="text" id="attractionName" class="form-control" >
        </div>
        <!-- Buttons -->
        <div class="d-flex align-items-center justify-content-end">
          <button type="submit" class="btn btn-primary me-3" @click="saveAttraction" ><i class="fa-solid fa-floppy-disk"></i></button>
          <button @click="closeAddNote" class="btn btn-outline-secondary"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </form>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

const attractionName = ref('');
const attractionImage = ref(null);
let previewImageUrl = ref(null);
const emit = defineEmits(['addAttraction', 'close'])
const saveAttraction = () => {
  const attraction = {
    name: attractionName.value,
    image: attractionImage.value ?attractionImage.value.name : null
  };

  // 將新的景點資料存入 localstorage 的 attraction 中
  const attractions = JSON.parse(localStorage.getItem('attractions')) || [];
  attractions.push(attraction);
  localStorage.setItem('attractions', JSON.stringify(attractions));

  // 觸發事件將新的景點資料回傳給父組件
  emit('addAttraction', attraction);

  // 清空表單
  attractionName.value = '';
  attractionImage.value = null;
};

// 選取並在指定元件上預覽圖片
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Generate preview image URL
    previewImageUrl.value = URL.createObjectURL(file);
  } 
};
const closeAddNote = () =>{
  emit('close');
}
</script>

<style scoped>

.spot-image {
  width: 200px; /* 請調整圖片寬度 */
  height: auto; /* 保持高度自動調整 */
  flex: 1;
}
</style>
