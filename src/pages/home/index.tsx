import React, { FC } from 'react';
import { useHistory } from 'umi';
import { Button, DotLoading } from 'antd-mobile';
const Home: FC = () => {
  const history = useHistory();
  return (
    <div>
      <DotLoading />

      <Button
        color="primary"
        fill="solid"
        onClick={() => {
          history.push('/layout/info');
        }}
      >
        info
      </Button>
    </div>
  );
};
export default Home;
