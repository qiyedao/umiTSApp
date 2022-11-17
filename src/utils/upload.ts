import request from '@/utils/request';
import Apis from '../services/Apis';

const path = Apis.CommonUpload;

export async function commonFormUpload(
  data: any,

  uploadUrl?: string,
) {
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

/**
 *
 * @param {*} params
 * @param {*} url
 * @returns
 */
//导出
export async function exportFile(params: any, url: any) {
  return request(`${url}`, {
    method: 'get',
    params,
    responseType: 'blob',
  });
}

//导入
export async function importFile(params: any, url: string) {
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
export const handleDownloadFile = async (data: any, type = 'blob') => {
  if (type == 'blob' || type == 'link') {
    try {
      let href = '';

      if (type == 'blob') {
        href = window.URL.createObjectURL(data.blob);
      } else {
        href = data.url;
      }
      const downloadElement = document.createElement('a');
      downloadElement.href = href;
      const filename = data.filename;
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
export const handleExportFile = (params: any, url: string, name: string) => {
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
