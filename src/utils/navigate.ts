import { ObjectType } from '@/typings';
import { history } from 'umi';
import lodashs from './lodashs';
import qs from 'query-string';
import { getPageQuery } from './utils';
import { loginPath } from './constants';

type NavigateType = {
  path?: string;
  params?: ObjectType;
  type?: 'push' | 'replace' | 'back' | 'window';
  isState?: boolean;
};
export const handleNavigate = (
  path?: NavigateType['path'],
  params?: NavigateType['params'],
  type?: NavigateType['type'],
  isState?: NavigateType['isState'],
) => {
  lodashs.throttle(() => {
    console.log('handleNavigate', path, 'path', type, 'type', 'params', params);

    if (type === 'replace') {
      if (isState) {
        history.replace({
          pathname: path,
          state: { ...params },
        });
      } else {
        history.replace({
          pathname: path,
          query: { ...params },
        });
      }
    } else if (type == 'window') {
      window.location.href =
        path +
        '?' +
        qs.stringify({
          ...params,
        });
    } else if (type == 'back') {
      history.goBack();
    } else {
      if (isState) {
        history.push({
          pathname: path,

          state: { ...params },
        });
      } else {
        history.push({
          pathname: path,
          query: { ...params },
        });
      }
    }
  })();
};
//根据当前页面和参数  生成object
export const generateSourcePathAndParams = () => {
  let openidSearch = '';
  const currentPathName = window.location.pathname;
  let openidPath = '';

  console.log('start getOpenidPath', openidPath, 'currentPathName', currentPathName);
  if (window.PublicPath) {
    openidPath = currentPathName.substring(
      currentPathName.indexOf(window.PublicPath) + window.PublicPath.length,
    );
  } else {
    openidPath = currentPathName;
  }

  openidSearch = window.location.href.split('?')[1];
  if (!openidPath) {
    openidPath = '/';
  }

  console.log(
    'end generateSourcePathAndParams ',
    openidPath,
    'openidSearch',
    openidSearch,
    'window.location.pathname.length - 1',
    window.location.pathname.length - 1,
  );
  return { openidPath, openidSearch };
};
//解析页面参数中的openidPath openidSearch
export const getOpenidPathAndSearch = () => {
  const { openidPath, openidSearch } = getPageQuery();
  return { openidPath, openidSearch };
};
export const handleLoginSuccess = () => {
  const { openidPath, openidSearch } = getOpenidPathAndSearch();

  if (openidPath) {
    let sourceParams = {};
    if (openidSearch) {
      sourceParams = getPageQuery(openidSearch as string);
    }

    console.log(
      'handleLoginSuccess',
      openidPath,
      'openidPath',
      openidSearch,
      'openidSearch',
      sourceParams,
      'sourceParams',
    );
    handleNavigate(openidPath as string, { ...sourceParams });
  }
};
export const handleNavigateLogin = () => {
  const { openidPath, openidSearch } = generateSourcePathAndParams();
  console.log(openidPath, 'openidPath', openidSearch, 'openidSearch');

  handleNavigate(
    loginPath,
    {
      openidPath,
      openidSearch,
    },
    'window',
  );
};
