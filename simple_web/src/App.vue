<script setup>
  import About from './components/About.vue'
  import News from './components/News.vue'
  import Dishes from './components/Menu.vue'
  import Reservation from './components/Reservation.vue'
</script>

<template>

  <!-- Main content -->
  <div>
    <About />
    <News />
    <section id="FeatureDishes" class="d-flex align-items-center">
      <router-view></router-view>
    </section>
    <Dishes />
    <Reservation />
  </div>
</template>


<style scoped>

</style>