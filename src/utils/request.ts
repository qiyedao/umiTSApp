/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { notification } from 'antd';
import { extend } from 'umi-request';
import { IsNoExist } from './utils';
const isDev = process.env.NODE_ENV === 'development';
import progressMiddleware from './middleWare/index';
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新增或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新增或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/** 异常处理程序 */

const errorHandler = (error: any) => {
  return Promise.reject(error);
};
/** 配置request请求时的默认参数 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  timeout: 30 * 1000, // 超时配置
  requestType: 'form',
  // headers: {
  // 	'Access-Control-Allow-Credentials': true,
  // },
});

const CancelToken = request.CancelToken;
let cancel: any;
// request.use(progressMiddleware, { core: true });
const checkStatus = async () => {
  return true;
};
request.interceptors.request.use((url, options) => {
  checkStatus()
    .then((res) => {
      options.cancelToken = new CancelToken((c) => {
        cancel = c;
      });
      console.log('interceptors request===>url', url, 'options', options);

      if (res) {
        console.log('正常请求', res);
      } else {
        console.log('取消请求', res);
        // window.location.href = window.location.href;

        cancel && cancel();
      }
      // 自定义携带用户信息
      // if (userInfo && userInfo.token) {
      // options.headers['token'] = userInfo.token;
      // }
      // if(url.indexOf(''))
      // options.headers['authorization'] = token;
    })
    .catch((err) => {});
  return { url, options };
});

request.interceptors.response.use(async (response) => {
  const { url } = response;
  console.log('interceptors response===>', 'response', response);
  const IgnoreJSON: string[] = ['pdf'];
  let data: any = '';
  if (IsNoExist(response.url, IgnoreJSON)) {
    data = await response.clone().json();
    console.log('response', data);
  }
  const token = window.sessionStorage.getItem('token');

  // if (data.status.code !== -1 && !token) {
  //   //拦截未登录
  //   window.location.href = Apis.Auth;
  // }
  if (
    data &&
    data.status &&
    data.status.code !== undefined &&
    data.status.code !== 1 &&
    data.status.code !== 2 &&
    data.status.code !== 2211
  ) {
    //return manual status;
    const errorText = codeMessage[data.status.code] || '';
    const errorCode = data.status.code;
    if (isDev) {
      notification.error({
        message: `请求错误：${url}`,
        description: `错误码：${errorCode || ''}`,
        key: 'errorCode',
      });
    }

    throw new Error(data.status.message || errorText || 'Error');
  }
  if (data && data.error) {
    //return system status;
    console.log('systemresponse,', data);
    const { url } = response;
    const errorText = codeMessage[data.status] || '';

    const errorCode = data.status;

    notification.error({
      message: `请求错误：${url}`,
      description: `错误码：${errorCode || ''}`,
      key: 'errorCode',
    });
    throw new Error(data.error || errorText || 'Error');
  }
  return response;
});

export default request;
