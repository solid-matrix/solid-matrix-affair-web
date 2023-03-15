export const features = [
    {
        name: 'catalogs',
        title: '花型册',
        icon: 'image',
        route: 'catalogs-home',
        roles: ['user', 'wh-operator', 'wh-admin', 'admin']
    },
    {
        name: 'design-search',
        title: '花型查询',
        icon: "picture-search",
        route: 'dashboard-design-search',
        roles: ['user', 'wh-operator', 'wh-admin']
    },
    {
        name: 'wareitem-query',
        title: '商品查询',
        icon: "search",
        route: 'test',
        roles: ['wh-operator', 'wh-admin']
    },
    {
        name: 'warecategory-manage',
        title: '品类管理',
        icon: "category",
        route: 'test',
        roles: ['wh-admin', 'admin']
    },
    {
        name: 'user-manage',
        title: '用户管理',
        icon: "team",
        route: 'test',
        roles: ['admin']
    },

]