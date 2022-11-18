import type { ObjectType } from '@/typings';
const ChinaCity: ObjectType = [];
import { parse } from 'querystring';
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
export const getCityLabel = (area = []) => {
  let address = '';
  if (area.length > 0) {
    ChinaCity.map((item: { value: any; label: string; children: any[] }) => {
      if (item.value == area[0]) {
        address = address + item.label;
        if (item.children) {
          item.children.map((item2) => {
            if (item2.value == area[1]) {
              address = address + item2.label;
              if (item2.children) {
                item2.children.map((item3: { value: any; label: string }) => {
                  if (item3.value == area[2]) {
                    address = address + item3.label;
                  }
                });
              }
            }
          });
        }
      }
    });
    return address;
  } else {
    return address;
  }
};

export const IsNoExist = (url: string, arr: string[] = []) => {
  const index = arr.findIndex((item) => url.indexOf(item) > -1);
  return index == -1;
};

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
