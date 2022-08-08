import request from '@/utils/request';
import Apis from '../Apis';
const BaseUrl = Apis.User;

//user
export async function listPage(params) {
  return request(`${BaseUrl}/page`, {
    method: 'GET',
    params,
  });
}
export async function listDetail(params) {
  return request(`${BaseUrl}/detail/${params}`, {
    method: 'GET',
    params,
  });
}
export async function list(params) {
  return request(BaseUrl, {
    method: 'GET',
    params,
  });
}

export async function update(data) {
  return request(BaseUrl, {
    method: 'PUT',
    data,
    requestType: 'json',
  });
}

export async function add(data) {
  return request(BaseUrl, {
    method: 'POST',
    data,
    requestType: 'json',
  });
}

export async function remove(data) {
  return request(`${BaseUrl}/` + data, {
    method: 'DELETE',
  });
}

export const getToken = async (params) => {
  return request.get(Apis.GetToken, {
    checkToken: false,
    params,
  });
};
export const outLogin = async () => {
  return request.get(Apis.LogOut, {});
};

export const getCode = async () => {
  return request.get(Apis.GetCode, {});
};
