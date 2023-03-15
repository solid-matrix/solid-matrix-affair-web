import { createRouter, createWebHistory } from 'vue-router'

import CatalogsRoutes from './catalogs-routes';
import WarehouseRoutes from './dashboard-routes';
import TestView from '../views/test-view.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: { name: 'catalogs-home' }
        },
        {
            path: '/test/',
            name: 'test',
            component: TestView,
        },
        ...CatalogsRoutes,
        ...WarehouseRoutes,
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
