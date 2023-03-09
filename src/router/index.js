import { createRouter, createWebHistory } from 'vue-router'

import CatalogsRoutes from './catalogs-routes';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: { name: 'catalogs-home' }
        },
        ...CatalogsRoutes,
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
