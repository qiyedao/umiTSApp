import { getAPPId, getWechatJsAPi } from '@/services/user/api';
import { Toast } from 'antd-mobile';
import { isBrowser } from 'umi';
import { getPageQuery } from './utils';
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
      return true;
    }
  } else {
    return true;
  }
};

export const getWeixinCode = async (
  scope: 'snsapi_userinfo' | 'snsapi_base',
  redirect_uri?: string,
  state?: string | number,
) => {
  try {
    const { data } = await getAPPId();
    const appid = data;
    if (appid) {
      const new_redirect_uri = encodeURIComponent(redirect_uri as string);
      const url = `  https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${new_redirect_uri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect
    `;
      window.location.href = url;
    } else {
      Toast.show({
        icon: 'fail',
        content: '缺少参数公众号appid',
      });
    }
  } catch (error) {}
};

export const handleCheckUserCode = (redirect_uri: string) => {
  const page = getPageQuery();
  console.log('handleCheckUserCode', page);
  if (!page.code && !sessionStorage.openid) {
    getWeixinCode('snsapi_userinfo', redirect_uri, '');
  }
};

export const handleCheckJsApi = async (url?: string) => {
  try {
    const configParams = {
      url: url || window.location.href,
    };
    const u = navigator.userAgent;

    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    console.log('configParams', configParams, 'isiOS', isiOS);

    if (isiOS) {
      configParams.url = sessionStorage.url;
    }

    const { data } = await getWechatJsAPi(configParams);

    window.wx.config({
      appId: data.appId,
      debug: false, //
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名
      jsApiList: ['scanQRCode'], // 必填，需要使用的 JS 接口列表
    });
  } catch (error) {}
};
