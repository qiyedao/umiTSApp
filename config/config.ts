import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  favicon: '/assets/favicon.svg',
  hash: true,
  ssr: {},
  devtool: 'eval',

  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  dynamicImport: {
    loading: '@/pages/components/Loading',
  },
  dva: {},
  antdMobile: {
    hd: true,
  },
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
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
    ],
  ],
  chainWebpack: function (config, { webpack }) {
    // config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin);
  },
});
