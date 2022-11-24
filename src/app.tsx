import { getPageQuery, IsExist } from '@/utils/utils';
import { history, getDvaApp } from 'umi';
import { currentUser, getWechatUser } from '@/services/user/api';
import { loginPath } from './utils/constants';
import { handleLoginSuccess, handleNavigateLogin } from './utils/navigate';
import { handleCheckUserCode } from './utils/platform';
import { vConsole } from './utils/vconsole';
//登陆系统
const handleLoginUser = (openid: string) => {
  const ignoreLogin = ['/login'];
  const dvaApp = getDvaApp();
  const { _store } = dvaApp;
  const page = getPageQuery();
  const openidPath = page.openidPath;
  let isNoLogin = false; //是否需要登录

  if (openidPath) {
    isNoLogin = IsExist(openidPath as string, ignoreLogin);
  } else {
    isNoLogin = IsExist(window.location.pathname, ignoreLogin);
  }

  console.log(
    'handleLoginUserisNoLogin',
    isNoLogin,
    'openidPath',
    openidPath,
    ignoreLogin,
    'current page',
    window.location.pathname,
  );
  if (!isNoLogin) {
    currentUser({
      openid: openid,
    })
      .then(async (res) => {
        console.log('登陆 currentUser', res);
        if (res.code === 200) {
          if (window.location.pathname.indexOf('/login') > -1) {
            history.replace({
              pathname: '/',
              query: {},
            });
          }
        }

        if (res.code == 200) {
          _store.dispatch({
            type: 'global/save',
            payload: {
              userInfo: { ...res.data },
            },
          });
          console.log('handleLoginSuccess');
          handleLoginSuccess();
        }
      })
      .catch((err) => {
        console.log(err, '登陆系统');
      });
  } else {
    console.log('handleLoginSuccess');
    handleLoginSuccess();
  }
};
//获取微信openid
const checkOpenId = () => {
  const page = getPageQuery();

  if (!sessionStorage.openid && !page.code) {
    sessionStorage.source = window.location.href;
    handleCheckUserCode(window.location.href);
  }
  if (page.code && !sessionStorage.openid) {
    console.log('handlecheckOpenId 获取openid getWechatUser=====>', page);

    getWechatUser({ code: page.code as string })
      .then((res) => {
        console.log('handlecheckOpenId 获取openid 结果=====>', res);
        if (res.data) {
          sessionStorage.openid = res.data.openid;

          handleLoginUser(res.data.openid);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }
  console.log('缓存openid中', sessionStorage.openid);
  if (window.location.pathname.includes(loginPath) && sessionStorage.openid) {
    console.log('handleLoginSuccess');
    handleLoginSuccess();
  }
  if (sessionStorage.token) {
  } else {
    if (sessionStorage.openid) {
      console.log('handlecheckOpenId have', sessionStorage.openid);

      handleLoginUser(sessionStorage.openid);
    }
  }
};

export function onRouteChange({ location }: any) {
  const dvaApp = getDvaApp();
  const { _store } = dvaApp;
  const state = _store.getState();
  vConsole();
  if (state.global.prevPath === '') {
    sessionStorage.url = window.location.href;
  }
  if (state.global.prevPath !== location.pathname) {
    console.log('onRouteChange', 'path', location.pathname, state.global);
    _store.dispatch({
      type: 'global/save',
      payload: {
        prevPath: location.pathname,
        name: location.pathname,
      },
    });

    const page = getPageQuery();
    console.log('page code', page, 'dvaApp', dvaApp);

    checkOpenId();
  } else {
    if (window.location.pathname.includes(loginPath) && sessionStorage.openid) {
      console.log('handleLoginSuccess');

      handleLoginSuccess();
    }
  }
}

export function render(oldRender: any) {
  if (sessionStorage.openid) {
    oldRender();
  } else {
    if (window.location.pathname.includes(loginPath)) {
      oldRender();
    } else {
      handleNavigateLogin();
    }
  }
}
