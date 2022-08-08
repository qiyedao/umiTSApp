import baseURL from '../../config/proxy';
export const base_url = baseURL.dev['/api/'].target;

/**
 * 方法类
 *
 */

/**
 * 去除两个数组中id相同的项
 * @param {arr1, arr2}
 * @returns {Array}
 * @constructor
 */

export const filterSameId = (arr1, arr2) => {
  let idList = arr2.map((item) => item.id);
  arr1 = arr1.filter((item) => {
    return !idList.includes(item.id);
  });
  return arr1;
};

/**
 * 比较两个数组 属性不同 返回新数组
 * @param {arr1, arr2, field}
 * @returns {Array} 返回去除项的数组
 * @constructor
 */
export const filterDifferent = (fArr, cArr, field) => {
  let diffRes = [];
  let fDatas = [];
  let cDatas = [];
  for (let i in fArr) {
    let flg = false;
    for (let j in cArr) {
      if (cArr[j][field] === fArr[i][field]) {
        flg = true;
        break;
      }
    }
    if (!flg) {
      fDatas.push(fArr[i]);
    }
  }
  for (let i in cArr) {
    let flg = false;
    for (let j in fArr) {
      if (fArr[j][field] === cArr[i][field]) {
        flg = true;
        break;
      }
    }
    if (!flg) {
      cDatas.push(cArr[i]);
    }
  }
  diffRes.push(...cDatas.concat(fDatas));
  return diffRes;
};

// 菜单权限
export const menuOptions = [
  {
    title: '欢迎页',
    key: '/welcome',
    children: [
      // { title: '系统配置', key: '/admin/sys/config' },
    ],
  },
];

export const getStrCount = (scrstr, armstr) => {
  //scrstr 源字符串 armstr 特殊字符
  var count = 0;
  while (scrstr.indexOf(armstr) != -1) {
    // eslint-disable-next-line no-param-reassign
    scrstr = scrstr.replace(armstr, '');
    count++;
  }
  return count;
};

export const FileType = {
  excel:
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel',
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ppt: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  pdf: '.pdf',
  video: '.mp4,.avi',
  all: '*',
  image: 'image/jpeg,image/png',
  zip: '.zip,.rar',
  previewDomument: ['doc', 'xls', 'ppt', 'pptx', 'xlsx', 'docx', 'pdf'],
  previewVideo: ['mp4', 'avi', 'mp4?', 'avi?'],
};
export const FileApplicationType = {
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pdf: 'application/pdf',
  zip: 'application/x-zip-compressed',
  txt: 'text/plain',
  png: 'image/png',
  jpg: 'image/jpeg',
  rar: '',
  mp4: 'video/mp4',
};

export const formatTime = (duration) => {
  //scrstr 源字符串 armstr 特殊字符
  let min = parseInt(duration / 60);
  let sec = parseInt(duration - min * 60);
  return { min, sec };
};
