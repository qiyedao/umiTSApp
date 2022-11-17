import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  tailwindcss: {
    tailwindConfigFilePath: 'tailwind.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
  },
  ssr: { mode: 'stream' },
  hash: true,
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
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
  dynamicImport: {
    loading: '@/components/Loading',
  },
  extraBabelPresets: [
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
      },
    ],
  ],
  dva: {},
  antdMobile: {},
  history: { type: 'browser' },
  routes,
  fastRefresh: {},
  headScripts: [{ src: '/jweixin-1.6.0.js' }, { src: '/vconsole.min.js' }],
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
});
