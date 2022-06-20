import { defineConfig } from 'umi';
import routes from './routes';
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

export default defineConfig({
  favicon: '/assets/favicon.svg',
  hash: true,
  ssr: {},
  devtool: 'eval',
  // outputPath:'dist'
  // publicPath: '/zh-CN/',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    moment: 'window.moment',
    echarts: 'window.echarts',
    antd: 'window.antd',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js',
    'https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/antd/4.21.3/antd.min.js',
  ],
  dynamicImport: {
    loading: '@/pages/components/Loading',
  },
  dva: {
    immer: false,
    hmr: true,
  },
  antd: {},
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
  chainWebpack: function (config, { webpack }) {
    config.plugin('antd-dayjs-webpack-plugin').use(AntdDayjsWebpackPlugin);
  },
});
