import { Avatar, List } from 'antd-mobile';
import type { FC } from 'react';
import React from 'react';
import styles from './index.less';
const ME: FC = () => {
  return (
    <div className={styles.container}>
      <div className="flex justify-center ">
        <Avatar onClick={() => {}} />
      </div>
      <List style={{ '--padding-left': '0px', '--padding-right': '0px' }}>
        <List.Item onClick={() => {}}>设置</List.Item>
      </List>
    </div>
  );
};
export default ME;
