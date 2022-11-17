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

/**
 * 扫码
 * @param needResult
 * @param scanType
 * @returns Promise
 */
export const wxScanQRCode = (
  needResult: number = 1,
  scanType: ['qrCode' | 'barCode'] = ['qrCode'],
) => {
  return new Promise((resolve) => {
    wx.scanQRCode({
      needResult, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType, // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res: any) {
        const result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        resolve(result);
      },
    });
  });
};
/**
 * check auth
 * @param appId
 * @param timestamp
 * @param nonceStr
 * @param signature
 * @param jsApiList
 */
export const wxConfig = (
  appId: string,
  timestamp: number,
  nonceStr: string,
  signature: string,
  jsApiList: string[] = ['scanQRCode', 'chooseWXPay'],
) => {
  wx.config({
    debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature, // 必填，签名
    jsApiList, // 必填，需要使用的 JS 接口列表
  });
};
