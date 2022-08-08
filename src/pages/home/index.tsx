import React, { FC, useEffect } from 'react';
import { useHistory } from 'umi';
import { Button, DotLoading, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';
const Home: FC = () => {
  const history = useHistory();
  useEffect(() => {
    wx.config({});
  }, []);

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.content}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {index + 1}
      </div>
    </Swiper.Item>
  ));
  return (
    <div>
      <Swiper autoplay>{items}</Swiper>

      <Button
        color="primary"
        fill="solid"
        onClick={() => {
          console.log('info');

          history.push('/layout/info');
        }}
      >
        info
      </Button>
      <div className="flex 	justify-between items-center	">
        <Button
          color="primary"
          fill="solid"
          onClick={() => {
            console.log('info');

            history.push('/layout/info');
          }}
        >
          info
        </Button>{' '}
        <Button
          color="primary"
          fill="solid"
          onClick={() => {
            console.log('info');

            history.push('/layout/info');
          }}
        >
          <div className="text-base	">info</div>
        </Button>
      </div>
    </div>
  );
};
export default Home;
