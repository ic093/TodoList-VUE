import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/basic_script', name: 'BasicScript', component:() => import('@/components/BasicScript.vue')},
    { path: '/data_binding', name: 'DataBinding', component:() => import('@/components/DataBinding.vue')},
    { path: '/person_info', name: 'Person', component:() => import('@/components/PersonInfo.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router