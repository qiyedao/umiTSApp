import { ObjectType } from '@/typings';

/**
 *获取导航标题
 */
export const getCurrentRoute = (routes: any, path: string) => {
  let res: ObjectType = {};
  routes.map((item: any) => {
    if (item.path === path) {
      res = item;
    }
    if (item.routes && item.routes.length) {
      const child = getCurrentRoute(item.routes, path);
      if (child.path) {
        res = child;
      }
    }
  });
  return res;
};
export const flat = (arr: any[]) => {
  let arr1: any[] = [];
  arr.forEach((element) => {
    if (element instanceof Array) {
      arr1 = arr1.concat(flat(element));
    } else {
      arr1.push(element);
    }
  });
  return arr1;
};

// 截取视频缩略图
const screenshot = (file: any) => {
  const blobUrl = URL.createObjectURL(file);
  // video 播放
  const videoPlay = (video: any, time: number) => {
    setTimeout(() => {
      video.pause();
    }, time);
  };

  // video 暂停
  const videoPause = (video: any, scale: any, resolve: any) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const imgHeight = video.videoHeight;
    const imgWidth = video.videoWidth;
    canvas.width = imgWidth * scale;
    canvas.height = imgHeight * scale;
    ctx?.drawImage(
      video,
      0,
      0,
      imgWidth,
      imgHeight,
      0,
      0,
      canvas.width,
      canvas.height,
    );
    const imgSrc = canvas.toDataURL('image/png');
    URL.revokeObjectURL(blobUrl);
  };

  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const playTime = 1500;
    const scale = 0.3;
    video.src = blobUrl;
    video.muted = true;
    video.addEventListener('play', () => videoPlay(video, playTime), false);
    video.addEventListener(
      'pause',
      () => videoPause(video, scale, resolve),
      false,
    );
    video.play();
  });
};
