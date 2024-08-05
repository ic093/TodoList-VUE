import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/pinia', name: 'pinia', component: () => import('./components/PiniaDemo.vue')},
    {path: '/axios', name: 'axios', component: () => import('./components/AxiosDemo.vue')},
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router