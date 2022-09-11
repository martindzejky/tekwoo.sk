import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';

import HOME_IMG from '@/assets/images/home.jpg';
import { preloadImage } from '@/preload';

declare module 'vue-router' {
    interface RouteMeta {
        // if defined, these image URLs are preloaded before navigating to the route
        preloadImages?: Array<string>;
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { preloadImages: [HOME_IMG] },
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

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        return { top: 0 };
    },
});

router.beforeEach(async (to) => {
    if (!to.meta?.preloadImages) return;
    await Promise.all(to.meta.preloadImages.map((src) => preloadImage(src)));
});

export default router;
