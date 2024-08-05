<script setup>
import {ref} from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import PiniaDemo from './components/PiniaDemo.vue'
import AxiosDemo from './components/AxiosDemo.vue'

</script>

<template>
 <main>
   <nav>
    <ul class="primary">
      <li><router-link to="/pinia">Pinia</router-link></li>
      <li><router-link to="/axios">Axios</router-link></li>
    </ul>
   </nav>
   <router-view></router-view>
 </main>

</template>

<style scoped>
.primary{
  display: flex;
  justify-content: center;
}
.primary li{
  width: 100px;
  height: 40px;
  text-align: center;
  display: block;
  font-size: 20px;
  color: #000
}
</style>
