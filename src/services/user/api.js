// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';
import Apis from '../Apis';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(params) {
  return request(`${Apis.LoginStatus}`, {
    method: 'GET',
    params,
  });
}
