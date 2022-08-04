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
import 'antd-mobile/es/';
const Bottom: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history.push(value);
  };

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },

    {
      key: '/me',
      title: '个人中心',
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

// export default () => {
//   return (
//     <Router initialEntries={['/home']}>
//       <div className={styles.app}>
//         <div className={styles.top}>
//           <CustomNavBar backArrow={false} />
//         </div>
//         <div className={styles.body}>
//           <Switch>
//             <Route exact path="/home">
//               <Home />
//             </Route>

//             <Route exact path="/me">
//               <PersonalCenter />
//             </Route>
//           </Switch>
//         </div>
//         <div className={styles.bottom}>
//           <Bottom />
//         </div>
//       </div>
//     </Router>
//   );
// };

export default (props) => {
  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <CustomNavBar backArrow={false} />
      </div>
      <div className={styles.body}>
        <div>{props.children}1345678</div>
      </div>
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
