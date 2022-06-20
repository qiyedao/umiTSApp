// src/app.ts
//使用后，只能csr
// export async function getInitialState() {
//   return Promise.resolve({ role: 'adminf' });
// }

export const ssr = {
  beforeRenderServer: async ({ env, location, history, mode, context }) => {
    // global 为 Node.js 下的全局变量
    // 避免直接 mock location，这样会造成一些环境判断失效
    global.mockLocation = location;

    // 国际化
    if (location.pathname.indexOf('zh-CN') > -1) {
      global.locale = 'zh-CN';
    } else {
      global.locale = 'en-US';
    }
  },
};
