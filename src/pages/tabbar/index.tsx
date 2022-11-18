import type { FC } from 'react';
import React from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory, useLocation } from 'umi';
import { AppOutline, UserOutline } from 'antd-mobile-icons';
import styles from './index.less';

const Bottom: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history.push(value);
  };

  const tabs = [
    {
      key: '/',
      title: 'home',
      icon: <AppOutline />,
    },

    {
      key: '/me',
      title: 'me',
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.app}>
      {/* <div className={styles.top}>
        <CustomNavBar hideNavBar backArrow={false} />
      </div> */}
      <div className={styles.body}>
        <div className={styles.main}>{props.children}</div>
      </div>
      <div className="adm-tab-bar-wrap" />
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
};
