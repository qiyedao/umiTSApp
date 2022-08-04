export default [
  {
    path: '/',
    component: '@/pages/tabbar',
    name: 'tabbar',
    routes: [
      {
        name: 'home',
        path: '/home',
        component: '@/pages/home',
      },
      {
        name: 'me',
        path: '/me',
        component: '@/pages/me',
      },
    ],
  },
  {
    name: 'info',
    path: '/info',
    component: '@/pages/info',
  },
  {
    name: '403',
    path: '/403',
    component: '@/pages/403',
  },
  {
    component: '@/pages/404',
  },
];
