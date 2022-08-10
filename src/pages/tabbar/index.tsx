import React, { FC } from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';
import styles from './index.less';
import CustomNavBar from '@/components/CustomNavBar';

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
      <div className="adm-tab-bar-wrap"></div>
      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
};

function Home() {
  return <div>首页</div>;
}

function PersonalCenter() {
  return <div>个人中心</div>;
}
