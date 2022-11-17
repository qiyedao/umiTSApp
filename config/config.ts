import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  tailwindcss: {
    // tailwindCssFilePath: '@/tailwind.css',//指定后需手动创建文件
    tailwindConfigFilePath: 'tailwind.config.js', // 默认取值 tailwindConfigFilePath || join(process.env.APP_ROOT || api.cwd, 'tailwind.config.js'),,
  },
  ssr: { mode: 'stream' },
  hash: true,
  // esbuild: {},
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

  inlineLimit: 10,

  dva: {},
  antdMobile: {},
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
  headScripts: [{ src: '/jweixin-1.6.0.js' }, { src: '/vconsole.min.js' }],
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
  // webpack5: {},
  chunks: ['vendors', 'umi', 'reactdom', 'antdm', 'corejs', 'reactspring', 'antd'],
  chainWebpack: (config) => {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          automaticNameDelimiter: '.',
          cacheGroups: {
            reactdom: {
              name: 'reactdom',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]react-dom[\\/]/,
              priority: 16,
              enforce: true,
            },
            reactspring: {
              name: 'reactspring',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]@react-spring[\\/]/,
              priority: 14,
              enforce: true,
            },
            corejs: {
              name: 'corejs',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]core-js[\\/]/,
              priority: 12,
              enforce: true,
            },
            antdm: {
              name: 'antdm',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]antd-mobile[\\/]/,
              priority: 10,
              enforce: true,
            },
            antd: {
              name: 'antd',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](antd|@ant-design)/,
              priority: 8,
              enforce: true,
            },
            vendors: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 1,
            },
          },
        },
      },
    });
  },
});
