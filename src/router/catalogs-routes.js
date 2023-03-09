import CatalogsHomeView from '../views/catalogs-home-view.vue';
import CatalogsCatalogView from '../views/catalogs-catalog-view.vue';
import CatalogsSearchView from '../views/catalogs-search-view.vue';

const routes = [
    {
        path: '/catalogs/',
        name: 'catalogs-home',
        component: CatalogsHomeView,
    },
    {
        path: '/catalogs/catalog/:catalogId/',
        name: 'catalogs-catalog',
        component: CatalogsCatalogView,
        props: true
    },
    {
        path: '/catalogs/search/:search/',
        name: 'catalogs-search',
        component: CatalogsSearchView,
        props: true
    },
];

export default routes;