import React from 'react';
import type { FC } from 'react';
import styles from './index.less';
import CustomNavBar from '@/components/CustomNavBar';
import { isWeiXin } from '@/utils/platform';
const isDev = process.env.NODE_ENV === 'development';

import { Inspector } from 'react-dev-inspector';

const InspectorWrapper = isDev ? Inspector : React.Fragment;
export default (props: { children: React.ReactNode }): FC => {
  const renderNavBar = () => {
    return isWeiXin() ? null : (
      <div className={styles.top}>
        <CustomNavBar />
      </div>
    );
  };
  return (
    <div className={styles.app}>
      {renderNavBar()}
      <div className={styles.body}>
        <div className={styles.main}>
          <InspectorWrapper keys={['shift', 'c']}>{props.children}</InspectorWrapper>
        </div>
      </div>
    </div>
  );
};
