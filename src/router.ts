import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';

import { preloadImage } from '@/preload';
import HOME_IMG from '@/assets/images/home.jpg';
import SEVEN_SLIDE1 from '@/assets/images/seven/1.jpg';
import SEVEN_SLIDE2 from '@/assets/images/seven/2.jpg';
import SEVEN_SLIDE3 from '@/assets/images/seven/3.jpg';
import SEVEN_SLIDE4 from '@/assets/images/seven/4.jpg';
import SEVEN_SLIDE5 from '@/assets/images/seven/5.jpg';

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
        meta: {
            preloadImages: [SEVEN_SLIDE1, SEVEN_SLIDE2, SEVEN_SLIDE3, SEVEN_SLIDE4, SEVEN_SLIDE5],
        },
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
