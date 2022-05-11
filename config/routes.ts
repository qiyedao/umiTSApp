export default [
  { path: '/', component: '@/pages/index', name: 'index' },
  {
    path: '/detail',
    component: '@/pages/detail/index',
    access: 'canAdmin',
    name: 'detail',
  },
  {
    component: '@/pages/404',
  },
];
