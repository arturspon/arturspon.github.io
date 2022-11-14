import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('pages/HomePage.vue'),
      },
      {
        path: 'experience',
        name: 'ExperiencePage',
        component: () => import('pages/ExperiencePage.vue'),
      },
      {
        path: 'portfolio',
        name: 'PortfolioPage',
        component: () => import('src/pages/PortfolioPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
