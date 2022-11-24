export default [
  {
    name: 'content',
    path: '/layout',
    component: '@/layout/ContentLayout',
    routes: [
      {
        title: 'chat',
        path: '/layout/chat',
        component: '@/pages/chat',
      },
      {
        title: '404',
        component: '@/pages/404',
      },
    ],
  },
  {
    title: '',
    path: '/login',
    component: '@/pages/login',
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
        access: 'canAdmin',
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
