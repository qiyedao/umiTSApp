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
 * wx pay
 * @param timestamp
 * @param nonceStr
 * @param pkg
 * @param signType
 * @param paySign
 * @returns Promise
 */
export const wxPay = (
  timestamp: number,
  nonceStr: string,
  pkg: string,
  signType: string,
  paySign: string,
) => {
  return new Promise((resolve, reject) => {
    wx.chooseWXPay({
      timestamp, // 支付签名时间戳，注意微信 jssdk 中的所有使用 timestamp 字段均为小写。但最新版的支付后台生成签名使用的 timeStamp 字段名需大写其中的 S 字符
      nonceStr, // 支付签名随机串，不长于 32 位
      package: pkg, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType, // 微信支付V3的传入 RSA ,微信支付V2的传入格式与V2统一下单的签名格式保持一致
      paySign, // 支付签名
      success: function (res: any) {
        // 支付成功后的回调函数
        resolve(res);
      },
    });
  });
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
  return new Promise((resolve, reject) => {
    wx.scanQRCode({
      needResult, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType, // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res: any) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
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
