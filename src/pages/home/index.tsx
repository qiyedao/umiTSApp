import React, { FC, useEffect } from 'react';
import { useHistory } from 'umi';
import { Button, DotLoading } from 'antd-mobile';
const Home: FC = () => {
  const history = useHistory();
  useEffect(() => {
    wx.config({});
  }, []);
  return (
    <div>
      <DotLoading />

      <Button
        color="primary"
        fill="solid"
        onClick={() => {
          console.log('info');

          history.push('/layout/info');
        }}
      >
        info
      </Button>
      <div className="flex 	justify-between items-center	">
        <Button
          color="primary"
          fill="solid"
          onClick={() => {
            console.log('info');

            history.push('/layout/info');
          }}
        >
          info
        </Button>{' '}
        <Button
          color="primary"
          fill="solid"
          onClick={() => {
            console.log('info');

            history.push('/layout/info');
          }}
        >
          <div className="text-base	">info</div>
        </Button>
      </div>
    </div>
  );
};
export default Home;
