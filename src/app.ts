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
    console.log('onRouteChange', 'path', location.pathname, state.index);
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
