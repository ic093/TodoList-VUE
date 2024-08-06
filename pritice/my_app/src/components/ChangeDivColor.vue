<script setup>
import {ref} from 'vue'
const msg = ref("")
function showMsg(){
 
    alert("哈囉")
}
const boxColor =ref("initial")
const changeColor = (color)=>{
    boxColor.value = color
};
</script>
<template>
    <div id="box" :style="{backgroundColor:boxColor}"></div>
    <div class="container">
    <div class="buttons">
      <button @click.stop="changeColor('red')">Red</button>
      <button @click.prevent="changeColor('green')">Green</button>
      <button @click.capture="changeColor('blue')">Blue</button>
      <button @click.self="changeColor('yellow')">Yellow</button>
      <button @click.once="changeColor('purple')">Purple只能變一次</button>
      <button @click.middle="changeColor('orange')">按滑鼠滾輪變成Orange</button>
      <button @wheel.passive="changeColor('pink')">滾動滑鼠滾輪Pink</button>
    </div>
    </div>



</template>
<style scoped>
#box{
    margin-bottom: 20px;
}
button{
    background-color: black;
    margin-right: 10px;
    color: tomato;
    border: 1px solid tomato;
}
button:hover{
    background-color: pink;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.box {
  width: 200px;
  height: 200px;
  margin-top: 20px;
}

</style>