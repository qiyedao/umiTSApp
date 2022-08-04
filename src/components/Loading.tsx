import React from 'react';
import { DotLoading, SpinLoading } from 'antd-mobile';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <span style={{ fontSize: 24 }}>
        <SpinLoading color={'primary'} />
      </span>
    </div>
  );
};
