export default [
  {
    path: '/admin',
    name: 'admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',

        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: '/admin/sub-page',
  },
  {
    component: './404',
  },
];
