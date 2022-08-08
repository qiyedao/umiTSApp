const ChinaCity = [];
import { parse } from 'querystring';
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
export const getCityLabel = (area = []) => {
  let address = '';
  if (area.length > 0) {
    ChinaCity.map((item) => {
      if (item.value == area[0]) {
        address = address + item.label;
        item.children &&
          item.children.map((item2) => {
            if (item2.value == area[1]) {
              address = address + item2.label;
              item2.children &&
                item2.children.map((item3) => {
                  if (item3.value == area[2]) {
                    address = address + item3.label;
                  }
                });
            }
          });
      }
    });
    return address;
  } else {
    return address;
  }
};

export const IsNoExist = (url, arr = []) => {
  let index = arr.findIndex((item) => url.indexOf(item) > -1);
  return index == -1;
};
