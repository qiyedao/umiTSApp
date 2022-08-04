export default [
  {
    path: '/home',
    component: '@/pages/tabbar',
    name: 'tabbar',
    routes: [
      {
        title: 'home',
        path: '/home',
        component: '@/pages/home',
      },
      {
        title: 'me',
        path: '/home/me',
        component: '@/pages/me',
      },
    ],
  },
  {
    name: 'content',
    path: '/content',
    component: '@/layout/ContentLayout',
    routes: [
      {
        title: 'info',
        path: '/content/info',
        component: '@/pages/info',
      },
    ],
  },
  {
    title: '403',
    path: '/403',
    component: '@/pages/403',
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: '@/pages/404',
  },
];
