import { createRouter, createWebHistory } from "vue-router";
import Menu from "@/views/Menu.vue";
import Laporan from "@/views/Laporan.vue";
import Riwayat from "@/views/Riwayat.vue";

const routes = [
    {path: '/', name: 'menu', component: Menu},
    {path: '/laporan', name:'laporan', component: Laporan},
    {path: '/riwayat', name:'profile', component: Riwayat}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;