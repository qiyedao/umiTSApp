import type { FC } from 'react';
import React, { useEffect } from 'react';
import { connect, ConnectProps, GlobalModelState } from 'umi';
import { Image } from 'antd-mobile';
import styles from './index.less';
import type { ObjectType } from '@/typings';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Log from '@/utils/Log';
import { Decrypt, Encrypt } from '@/utils/crypto';
import { handleNavigate } from '@/utils/navigate';
interface HomeProps extends ConnectProps {
  global: GlobalModelState;
}
const Home: FC<HomeProps> = (props) => {
  useEffect(() => {
    console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'), 'dayjs');

    window.wx.config({});
    console.log('props', props);
  }, []);
  // const queryStatus = () => {
  //   return new Promise((resolve, reject) => {
  //     console.log('status');
  //     resolve({ status: 'success' });
  //   });
  // };
  // const { data, run, cancel } = useRequest(queryStatus, {
  //   pollingInterval: 3000,
  // });

  const renderMenu = (list: ObjectType[]) => {
    const divList: React.ReactNode[] = [];
    list.map((item, index) => {
      divList.push(
        <div
          onClick={() => {
            handleNavigate('/layout/chat', { a: 1 });
          }}
          className={classNames(styles.menu, 'flex justify-content flex-col items-center')}
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
      {renderMenu([{ title: Encrypt('123456qwer1', 'qwertyasdfgh2022') }])}
      <div>Encrypt: {Encrypt('123456qwer1', 'qwertyasdfgh2022')}</div>
      <div>decrypt: {Decrypt(Encrypt('123456qwer1', 'qwertyasdfgh2022'), 'qwertyasdfgh2022')}</div>
    </div>
  );
};
export default connect(({ global }: { global: GlobalModelState }) => global)(Log('home')(Home));
