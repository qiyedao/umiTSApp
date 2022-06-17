import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './index.less';
export default ({ icon, text, style, imgStyle, textStyle, type, onClick }) => {
  return (
    <span onClick={onClick} className="custom-btn">
      <img
        style={imgStyle ? imgStyle : {}}
        src={icon ? icon : 'https://www.baidu.com/favicon.ico'}
      />
      <a style={textStyle ? textStyle : {}}>{text ? text : '编辑'}</a>
    </span>
  );
};
