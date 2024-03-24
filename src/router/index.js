import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/componentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../components/componentB.vue'),
      },
      {
        path: 'navigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'dynamic/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicByProp/:id',
        component: () => import('../views/DynamicRouterByProp.vue'),
        props: (route) => {
          console.log('route', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'nameview',
        component: () => import('../views/NameView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../components/componentC.vue'),
              right: () => import('../components/componentA.vue'),
            },
          },
          {
            path: 'a2b',
            name: 'a2b',
            components: {
              left: () => import('../components/componentA.vue'),
              right: () => import('../components/componentB.vue'),
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
