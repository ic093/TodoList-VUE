import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/change_color', name:'change_color', component: () => import('../components/ChangeColor.vue')},
    { path: '/data_binding', name:'data_binding', component: () => import('../components/DataBinding.vue')},
    { path: '/life_circle', name:'life_circle', component: () => import('../components/LifeCircle.vue')},
    { path: '/life_note', name:'life_note', component: () => import('../components/LifeNote.vue')},
    { path: '/button', name:'my_button', component: () => import('../components/MyButton.vue')},
    { path: '/computed', name:'computed', component: () => import('../components/Computed.vue')},
    { path: '/watch', name:'watch', component: () => import('../components/Watch.vue')},
    { path: '/watch_effect', name:'watch_effect', component: () => import('../components/WatchEffect.vue')}
]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router