// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import Apis from '../Apis';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(params: { openid: string }): Promise<any> {
  return request(`${Apis.Login}`, {
    method: 'GET',
    params,
  });
}

/** url 签名 GET /api/currentUser */
export async function getWechatJsAPi(params: { url: string }): Promise<any> {
  return request(`${Apis.Login}`, {
    method: 'GET',
    params,
  });
}
/** 获取Appid GET /api/currentUser */
export async function getAPPId(): Promise<any> {
  return request(`${Apis.Login}`, {
    method: 'GET',
  });
}
/** 获取Appid GET /api/currentUser */
export async function getWechatUser(params: { code: string }): Promise<any> {
  return request(`${Apis.Login}`, {
    method: 'GET',
    params,
  });
}
