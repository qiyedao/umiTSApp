import { defineConfig, utils } from 'umi';
import routes from './routes';
import layoutSettings from './layoutSettings';
const { winPath } = utils;

export default defineConfig({
  // ssr: {},

  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/pages/components/Loading',
  },
  antd: {},
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // exportStatic: {},
  history: { type: 'browser' },
  layout: { locale: true, ...layoutSettings },

  routes,
  fastRefresh: {},
  // mfsu: {},
  lessLoader: { javascriptEnabled: true },
  cssLoader: {
    // 这里的 modules 可以接受 getLocalIdent
    modules: {
      getLocalIdent: (
        context: {
          resourcePath: string;
        },
        _: string,
        localName: string,
      ) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }

        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
            .map((a: string) => a.toLowerCase());

          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }

        return localName;
      },
    },
  },
  // qiankun: {
  //   master: {
  //     // 注册子应用信息
  //     apps: [
  //       {
  //         name: 'app1', // 唯一 id
  //         entry: 'https://umijs.org/zh-CN', // html entry
  //       },
  //       {
  //         name: 'app2', // 唯一 id
  //         entry: 'https://ant.design/components/modal-cn/', // html entry
  //       },
  //     ],
  //   },
  // },
});
