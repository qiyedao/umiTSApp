import React, { FC, useEffect, useState } from 'react';
import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import { useHistory, useLocation, useModel } from 'umi';
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
  const [title, setTitle] = useState('');
  useEffect(() => {}, []);
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
