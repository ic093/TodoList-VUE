<template>
  <div class="container py-4">
    <h1 class="py-5">菜單</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="dish in dishes" :key="dish.id">
        <div class="card">
          <img :src="dish.image" class="card-img-top" :alt="dish.name">
          <div class="card-body">
            <h5 class="card-title">{{ dish.name }}</h5>
        <p class="card-text">{{ dish.description }}</p>
        <p class="card-text">{{ dish.price }} 元</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Menu',
  data() {
    return {
      dishes: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/api/menu')
      this.dishes = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>