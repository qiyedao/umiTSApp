import React from 'react';
import CustomBtn from './CustomBtn';
import CustomIcon from '../assets/edit.png';
export default ({ onClick }) => {
  return (
    <CustomBtn
      onClick={() => {
        onClick();
      }}
      icon={CustomIcon}
      text="编辑"
    />
  );
};
