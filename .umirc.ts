import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  history: { type: 'browser' },
  // layout: {},
  antd: {},
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/detail', component: '@/pages/detail/index' },
  ],
  fastRefresh: {},
  // mfsu: {},
});
