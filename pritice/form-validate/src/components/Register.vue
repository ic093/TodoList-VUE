<script setup>
import { ref,reactive } from 'vue';

const name = ref('')
const birth = ref('')
const phone = ref('')
const danger= reactive([true,true,false])
function show_error(){
    if (name.value===""){
        danger[0] = false
    }else{
        danger[0]=true
    }
    if (birth.value===""){
        danger[0] = false
    }else{
        danger[0]=true
    }
    if (phone.value===""){
        danger[0] = false
    }else{
        danger[0]=true
    }

    
    
} 

</script>
<template>
    <div class="container">
        <form>
  <div class="mb-3">
    <label for="name" class="form-label">姓名</label>
    <input type="text" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div v-show="name.length==0" id="name" class="form-text text-danger" :class="{'d-none':danger[0]}">請輸入姓名</div>
  </div>
  <div class="mb-3">
    <label for="birthday" class="form-label">生日</label>
    <input type="text" v-model="birth" class="form-control" id="exampleInputPassword1">
    <div v-show="birth.length==0" id="birth" class="form-text text-danger"  :class="{'d-none':danger[1]}">請選擇生日</div>
  </div>
  <div class="mb-3">
    <label for="birthday" class="form-label">電話</label>
    <input type="phone" v-model="phone" class="form-control" id="phone">
    <div v-show="phone.length==0" id="birth" class="form-text text-danger"  :class="{'d-none':danger[2]}">請輸入電話</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>


</template>
<style scoped></style>