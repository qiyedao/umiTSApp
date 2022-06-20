import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  ssr: {},
  devtool: 'eval',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },

  externals: {
    moment: 'window.moment',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    echarts: 'window.echarts',
    antd: 'window.antd',
  },
  scripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.3/moment.min.js',
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
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

  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  history: { type: 'browser' },
  routes,
  fastRefresh: {},
});
