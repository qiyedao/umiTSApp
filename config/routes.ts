export default [
  {
    title: 'emotion',
    path: '/',
    component: '@/pages/emotion',
  },
  {
    name: 'content',
    path: '/layout',
    component: '@/layout/ContentLayout',
    routes: [
      {
        title: 'info',
        path: '/layout/info',
        component: '@/pages/info',
      },
      {
        title: '404',
        component: '@/pages/404',
      },
    ],
  },
  {
    path: '/',
    component: '@/pages/tabbar',
    name: 'tabbar',

    routes: [
      {
        title: 'home',
        path: '/',
        component: '@/pages/home',
      },
      {
        title: 'me',
        path: '/me',
        component: '@/pages/me',
      },
      {
        title: '404',
        component: '@/pages/404',
      },
    ],
  },
  {
    title: '403',
    path: '/403',
    component: '@/pages/403',
  },

  {
    title: '404',
    component: '@/pages/404',
  },
];
