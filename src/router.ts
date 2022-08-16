import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/7',
        name: 'seven',
        component: () => import(/* webpackChunkName: "seven" */ './views/Seven.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
