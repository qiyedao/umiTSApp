import React from 'react';
import { DotLoading } from 'antd-mobile';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'cener',
        height: '100%',
        width: '100%',
      }}
    >
      <DotLoading />
    </div>
  );
};
