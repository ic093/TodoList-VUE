import { createApp } from 'vue'
import './style.css'
import App_view from './App_view.vue'
import App_pinia from './App_pinia.vue'
import { createPinia } from 'pinia'
import router from './router.js'


createApp(App_view).use(createPinia()).use(router).mount('#app')
