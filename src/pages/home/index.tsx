import React, { FC, useEffect } from 'react';
import { useHistory, connect } from 'umi';
import { Button, Image, Swiper, Toast } from 'antd-mobile';
import styles from './index.less';
import { ObjectType } from '@/typings';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { useRequest } from 'ahooks';
import CustomSkeleton from '@/components/CustomSkeleton';
import { exportFile } from '@/utils/upload';
import Log from '@/utils/Log';
const Home: FC = (props) => {
  const history = useHistory();
  useEffect(() => {
    console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'), 'dayjs');

    window.wx.config({});
    console.log('props', props);
    exportFile(
      {},
      'http://192.168.3.204:9000/rocket.ts.ts.pdf/files/2022-09-01/7fcb97f0-b447-4904-b709-d054c9cc0650_做新时代的追梦人.pdfpdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin/20221020/us-east-1/s3/aws4_request&X-Amz-Date=20221020T022130Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f2d3379745ea1292768fdad19d69f193da96b98f6387deed9da3342011dec463',
    ).then((res) => {
      console.log(res);
    });
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
  return <div>{renderMenu([{ title: '123' }])}</div>;
};
export default connect(({ index }) => index)(Log('home')(Home));
