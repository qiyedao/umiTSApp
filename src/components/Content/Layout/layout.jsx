import React from 'react';
import './index.less';

const Content = ({ children }) => {
  let noPaddingPath = ['/welcome'];
  const isNO = noPaddingPath.includes(location.pathname);
  return (
    <div
      className={
        isNO
          ? 'custom-content-layout-container-noPadding'
          : 'custom-content-layout-container'
      }
    >
      {children}
    </div>
  );
};
export default Content;
