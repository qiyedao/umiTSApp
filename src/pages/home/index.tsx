import React, { FC } from 'react';
import { useHistory } from 'umi';
import { Button, DotLoading } from 'antd-mobile';
const Home: FC = () => {
  const history = useHistory();
  return (
    <div>
      <DotLoading />
      首页
      <Button
        color="primary"
        fill="solid"
        onClick={() => {
          history.push('/info');
        }}
      >
        info
      </Button>
    </div>
  );
};
export default Home;
