import { getDvaApp } from 'umi';
export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      alert(err.message);
    },
  },
};
export function onRouteChange({ location, routes, action }) {
  const dvaApp = getDvaApp();
  const { _store } = dvaApp;
  const state = _store.getState();

  if (state.index.prevPath !== location.pathname) {
    console.log('onRouteChange dvaApp', dvaApp, 'path', state.index);
    _store.dispatch({
      type: 'index/save',
      payload: {
        name: 'init',
        prevPath: location.pathname,
      },
    });
  }

  window.scroll(0, 0);
}
export function render(oldRender) {
  oldRender();
}
export function modifyClientRenderOpts(memo) {
  const dvaApp = getDvaApp();

  console.log(
    'modifyClientRenderOpts dvaApp',
    dvaApp,
    'path',
    window.location.pathname,
  );

  return {
    ...memo,
  };
}
