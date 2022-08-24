import React, { FC, useEffect } from 'react';
import { useHistory, connect } from 'umi';
import { Button, Image, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';
import { ObjectType } from '@/typings';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useRequest } from 'ahooks';
const Home: FC = (props) => {
  const history = useHistory();
  useEffect(() => {
    console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'), 'dayjs');

    window.wx.config({});
    console.log('props', props);
  }, []);
  const queryStatus = () => {
    return new Promise((resolve, reject) => {
      console.log('status');
      resolve({ status: 'success' });
    });
  };
  // const { data, run, cancel } = useRequest(queryStatus, {
  //   pollingInterval: 3000,
  // });
  console.log('data');

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.swiperContent}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片${props.name}`);
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
      <Swiper loop>{items}</Swiper>
      <div
        className={classNames(
          styles.content,
          'flex items-center justify-between',
        )}
      >
        {renderMenu([
          { title: 'title', url: 'url' },
          { title: 'title', url: 'url' },
          { title: 'title', url: 'url' },
        ])}
      </div>
      <div>umi 脚手架</div>
    </div>
  );
};
export default connect(({ index }) => index)(Home);
