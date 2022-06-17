import React from 'react';
import CustomBtn from './CustomBtn';
import CustomIcon from '../assets/del.png';
export default ({ onClick }) => {
  return (
    <CustomBtn
      textStyle={{ color: 'rgba(232, 37, 52, 1)' }}
      onClick={() => {
        onClick();
      }}
      icon={CustomIcon}
      text="删除"
    />
  );
};
