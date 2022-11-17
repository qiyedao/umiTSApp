import { getDvaApp } from 'umi';
import { vConsole } from './utils/vconsole';
export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
      alert(err.message);
    },
  },
};
export function onRouteChange({ location }) {
  const dvaApp = getDvaApp();
  const { _store } = dvaApp;
  const state = _store.getState();
  vConsole();
  if (state.global.prevPath !== location.pathname) {
    console.log('onRouteChange', 'path', location.pathname, state.global);
    _store.dispatch({
      type: 'global/save',
      payload: {
        name: 'init',
        prevPath: location.pathname,
      },
    });
  }

  window.scroll(0, 0);
}
