import request from '@/utils/request';
import Apis from '../services/Apis';

const path = Apis.CommonUpload;
const delPath = Apis.DeleteFile;

export async function commonFormUpload(data, uploadUrl) {
  let url = uploadUrl;
  if (!url) {
    url = path;
  }
  return request(url, {
    method: 'post',
    data,
    requestType: 'form',
  });
}
export async function commonDelUpload(data) {
  return request(delPath, {
    method: 'delete',
    data,
    requestType: 'form',
  });
}

export async function commonDelListUpload(data) {
  return request(`${delPath}/list`, {
    method: 'delete',
    data,
    requestType: 'form',
  });
}
/**
 *
 * @param {*} params
 * @param {*} url
 * @returns
 */
//导出
export async function exportFile(params, url) {
  return request(`${url}`, {
    method: 'get',
    params,
    responseType: 'blob',
  });
}

//导入
export async function importFile(params, url) {
  return request(url, {
    method: 'put',
    data: params,
    requestType: 'form',
  });
}
/**
 *
 * @param {*} data
 * @param {*} type
 */
//下载
export const handleDownloadFile = async (data, type = 'blob') => {
  if (type == 'blob' || type == 'link') {
    try {
      let href = '';

      if (type == 'blob') {
        href = window.URL.createObjectURL(data.blob);
      } else {
        href = data.url;
      }
      let downloadElement = document.createElement('a');
      downloadElement.href = href;
      let filename = data.filename;
      console.log(filename, 'filename');
      downloadElement.download = filename.split('filename=')[1];
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
      window.URL.revokeObjectURL(href);
    } catch (error) {
      console.log('error', error);
    }
  } else {
    const blob = await exportFile({}, data.url);
    handleDownloadFile({ ...data, blob });
  }
};
/**
 *
 * @param {*} params
 * @param {*} url
 * @param {*} name
 * @returns
 */
//导出文件
export const handleExportFile = (params, url, name) => {
  //开始导出
  return new Promise((resolve, reject) => {
    exportFile(params, url)
      .then((response) => {
        console.log(response, 'blob');
        // 导出结束
        const filename = `attachment;filename=${name}.xlsx`;
        const blob = response;

        handleDownloadFile({ filename, blob });
        resolve(true);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
};
