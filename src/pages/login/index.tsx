import { useEffect } from 'react';
import { SpinLoading } from 'antd-mobile';
const isDev = process.env.NODE_ENV === 'development';

export default () => {
  useEffect(() => {
    if (isDev || 1) {
      sessionStorage.openid = 'oOr5Zs8tHgyNeQDEQcfcKeWFmHHY';
    }

    console.log('login page', sessionStorage.openid);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <span style={{ fontSize: 24 }}>
        <SpinLoading color={'primary'} />
      </span>
    </div>
  );
};
