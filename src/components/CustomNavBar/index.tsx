import React, { FC } from 'react';
import { NavBar } from 'antd-mobile';
interface NavBarProps {
  backArrow?: boolean;
}
const CustomNavBar: FC<NavBarProps> = ({ backArrow = true }) => {
  return <NavBar backArrow={backArrow}>title</NavBar>;
};
export default CustomNavBar;
