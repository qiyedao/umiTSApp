export default [
  { path: '/', component: '@/pages/index', name: 'index' },
  {
    path: '/detail',
    component: '@/pages/detail/index',
    access: 'canAdmin',
    name: 'detail',
  },
  // {
  //   path: '/detail',
  //   // component: '@/pages/detail/index',
  //   access: 'canAdmin',
  //   name: 'detail',
  //   routes: [
  //     {
  //       name: 'app1',
  //       path: '/detail/app1',
  //       microApp: 'app1',
  //     },
  //   ],
  // }, // 配置 app2 关联的路由
  {
    name: 'app2',
    path: '/components',
    microApp: 'app2',
  },
  {
    component: '@/pages/404',
  },
];
