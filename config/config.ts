import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  favicon: '/assets/favicon.svg',
  hash: true,
  // ssr: {},
  devtool: 'eval',

  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    moment: 'window.moment',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js',
  ],

  headScripts: [
    'https://lf1-cdn-tos.bytegoofy.com/goofy/lark/op/h5-js-sdk-1.5.15.js',
  ],
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
