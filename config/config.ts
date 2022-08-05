import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  favicon: '/assets/favicon.svg',
  hash: true,
  ssr: {},

  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  dynamicImport: {
    loading: '@/components/Loading',
  },
  dva: {},
  antdMobile: {},
  ignoreMomentLocale: true,
  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: true,
  // },
  history: { type: 'browser' },
  routes,
  fastRefresh: {},
  headScripts: [{ src: '/jweixin-1.6.0.js' }],
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
  chainWebpack: function (config, { webpack }) {
    // config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin);
  },
});
