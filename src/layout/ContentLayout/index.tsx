import React, { FC } from 'react';

import styles from './index.less';
import CustomNavBar from '@/components/CustomNavBar';
import { isWeiXin } from '@/utils/platform';

export default (props) => {
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
        <div className={styles.main}>{props.children}</div>
      </div>
    </div>
  );
};
