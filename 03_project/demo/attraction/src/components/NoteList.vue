<template>
<div class="justify-content-center w-100">
    <div class="list-group w-100">
        <div v-for="(spot, index) in spots" :key="index" :class="['list-group-item', { 'selected': showAddNoteFormIndex === index }]" @click="showAddNoteForm(index)">
            <div class="d-flex align-items-center justify-content-between">
              <img :src="'/imgs/'+spot.image" :alt="spot.name" class="spot-image">
              <span class="spot-name">{{ spot.name }}</span>
              <button @click="handleDelete(index)" class="btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div v-if="showAddNoteFormIndex === index" class="add-note-form w-100">
              <hr>
              <form @submit.prevent="saveAttraction" class="d-flex align-items-start justify-content-between flex-column">
                <div class="form-group d-flex justify-content-start align-items-center mb-3">
                  <img :src="previewImageUrl" :alt="spot.name" class="spot-image new-image me-3">
                  <input type="file" id="attractionImage" class="form-control" @change="handleImageChange">
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3">
                  <input type="text" id="attractionName" class="form-control" :value="spot.name">
                </div>
                <!-- Buttons -->
                <div class="d-flex align-items-center justify-content-end align-self-end">
                  <button type="submit" class="btn btn-primary me-3"><i class="fa-solid fa-floppy-disk"></i></button>
                  <button @click="hideAddNoteForm" type="button" class="btn btn-outline-secondary"><i class="fa-solid fa-xmark"></i></button>
                </div>
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {onMounted, ref } from 'vue'
let spots = ref([]);
const showAddNoteFormIndex = ref(null);
let previewImageUrl = ref(null);

// 選取並在指定元件上預覽圖片
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Generate preview image URL
    previewImageUrl.value = URL.createObjectURL(file);
  } 
};
// 顯示編輯表單
const showAddNoteForm = (index) => {
  showAddNoteFormIndex.value = index;
  previewImageUrl.value = `/imgs/${spots.value[index].image}`;
};

// 隱藏編輯表單
const hideAddNoteForm = () => {
  showAddNoteFormIndex.value = 0;
  console.log(showAddNoteFormIndex.value);
};
const handleDelete = (index) =>{
  spots.split(index)
}
const saveAttraction = () => {
  const attraction = {
    name: attractionName.value,
    image: attractionImage.value ?attractionImage.value.name : null
  };

  spots.value.push(attraction);
  localStorage.setItem('attractions', JSON.stringify(spots));

  // 觸發事件將新的景點資料回傳給父組件
  emit('addAttraction', spots);

  // 清空表單
  attractionName.value = '';
  attractionImage.value = null;
};
onMounted(async() => {
  try{
    const response = await fetch('/json/attraction.json');//載入景點
    if(!response.ok){
      throw new Error('讀取失敗');
    }
    spots.value = await response.json();
  }catch(error){
    console.log('載入錯誤:', error);
  }
})

</script>

<style scoped>
.spot-image {
  width: 100px; /* 請調整圖片寬度 */
  height: auto; /* 保持高度自動調整 */
}

.spot-name {
  flex: 1; 
}
.list-group-item{
  transition: background-image 0.3s;
}
.list-group-item:hover{
  background-image: linear-gradient(to bottom, #ffffff, #f8f8fc, #f0f1f9, #e8ebf6, #dee5f3);
}
.add-note-form{
  transition: all 0.3s;
}
.selected{
  border: 2px solid #feb6b8;
}
</style>
