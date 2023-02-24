import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    { path: '/docs', component: 'docs' },
  ],
  legacy: {
    buildOnly: true,
    nodeModulesTransform: true,
  },
  npmClient: 'pnpm',
  tailwindcss: {},
  plugins: [
    '@umijs/plugins/dist/tailwindcss',
    '@umijs/plugins/dist/styled-components',
    '@umijs/plugins/dist/antd',
  ],
  styledComponents: {},
  // ssr: {},
  // exportStatic: {},

  metas: [
    {
      name: 'App-Config',
      content: 'fullscreen=yes,useHistoryState=yes,transition=yes',
    },
    { name: 'yes', content: 'apple-mobile-web-app-capable' },
    { name: 'yes', content: 'apple-touch-fullscreen' },
    { name: 'aplus-waiting', content: 'MAN' },
    {
      name: 'viewport',
      content:
        'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover',
    },
  ],
  headScripts: [{ src: 'https://unpkg.com/jszip/dist/jszip.min.js' }],
});
