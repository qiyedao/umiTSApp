import { isBrowser } from 'umi';

/**
 * 检测是否在微信中打开网页
 * @returns boolean
 */
export const isWeiXin = () => {
  if (isBrowser()) {
    const ua = navigator.userAgent.toLowerCase();
    const isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
