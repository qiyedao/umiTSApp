import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import { useHistory, useLocation, useRouteMatch } from 'umi';
import { getCurrentRoute } from '@/utils/util';
import routes from '../../../config/routes';
import type { ObjectType } from '@/typings';
interface NavBarProps {
  backArrow?: boolean;
  showTitle?: boolean;
  hideNavBar?: boolean;
}
const CustomNavBar: FC<NavBarProps> = ({
  backArrow = true,
  showTitle = true,
  hideNavBar = false,
}) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const [title, setTitle] = useState('');
  useEffect(() => {
    console.log('match', match);
    const lastIndex = location.pathname && location.pathname.lastIndexOf('/');

    let pathname = location.pathname;
    if (lastIndex > -1 && lastIndex === location.pathname.length - 1) {
      pathname = pathname.substring(0, lastIndex);
    }
    console.log(
      'lastIndex',
      lastIndex,
      location.pathname,
      location.pathname.length,
      'pathname',
      pathname,
    );
    const currentRoute: ObjectType = getCurrentRoute(routes, pathname);
    setTitle(currentRoute?.title);
  }, [location.pathname]);
  const back = () => {
    history.goBack();
  };

  return hideNavBar ? null : (
    <NavBar onBack={back} backArrow={backArrow ? <LeftOutline /> : false}>
      {showTitle ? title : null}
    </NavBar>
  );
};
export default CustomNavBar;
