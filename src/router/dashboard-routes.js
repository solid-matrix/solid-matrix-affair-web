import DashboardHomeView from "../views/dashboard-home-view.vue";
import DashboardDesignSearchView from "../views/dashboard-design-search-view.vue";

const routes = [
    {
        path: '/dashboard/',
        name: 'dashboard-home',
        component: DashboardHomeView,
    },
    {
        path: '/dashboard/design-search',
        name: 'dashboard-design-search',
        component: DashboardDesignSearchView,
    },
];

export default routes;