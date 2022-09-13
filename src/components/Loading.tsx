import React, { useEffect } from 'react';
import { DotLoading, SpinLoading } from 'antd-mobile';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export default () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    console.log('loading start');
    return () => {
      NProgress.done();
      console.log('loading done');
    };
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    ></div>
  );
};
