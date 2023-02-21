import {createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Listing from '@/views/Listing.vue'
import Detail from '@/views/Detail.vue'
import Edit from '@/views/Edit.vue'



const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'about', component: About},
    {path:'/listing', name: 'listing', component: Listing},
    {path:'/detail', name: 'detail', component: Detail},
    {path:'/edit', name: 'edit', component: Edit},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})

export default router

