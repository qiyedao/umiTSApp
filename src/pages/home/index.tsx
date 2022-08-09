import React, { FC, useEffect } from 'react';
import { useHistory } from 'umi';
import { Button, Image, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';
import { ObjectType } from '@/typings';
import classNames from 'classnames';
import dayjs from 'dayjs';
const Home: FC = () => {
  const history = useHistory();
  useEffect(() => {
    console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'), 'dayjs');

    window.wx.config({});
  }, []);

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.swiperContent}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));

  const renderMenu = (list: ObjectType[]) => {
    let divList: React.ReactNode[] = [];
    list.map((item, index) => {
      divList.push(
        <div
          onClick={() => {
            history.push('/layout/info');
          }}
          className={classNames(
            styles.menu,
            'flex justify-content flex-col items-center',
          )}
          key={index}
        >
          <Image className={styles.icon} src="" />
          <div className={styles.title}>{item.title}</div>
        </div>,
      );
    });
    return divList;
  };
  return (
    <div>
      <Swiper autoplay loop>
        {items}
      </Swiper>
      <div className={styles.content}>
        {renderMenu([{ title: 'title', url: 'url' }])}
      </div>
    </div>
  );
};
export default Home;
