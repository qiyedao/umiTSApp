import type { ObjectType } from '@/typings';

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
