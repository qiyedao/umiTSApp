// https://umijs.org/config/
import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  ssr: { mode: 'stream' },
  exportStatic: {},
  antdMobile: {},
  dva: {
    hmr: true,
  },
  title: false,
  dynamicImport: {
    loading: '@/components/Loading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,

  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  tailwindcss: {
    // tailwindCssFilePath: '@/tailwind.css',//指定后需手动创建文件
    tailwindConfigFilePath: 'tailwind.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
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
  headScripts: [{ src: '/jweixin-1.6.0.js' }, { src: '/vconsole.min.js' }],
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
  nodeModulesTransform: { type: 'none' },
  webpack5: {},
});
