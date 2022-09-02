import { Button, Result } from 'antd-mobile';
import React from 'react';
import { history } from 'umi';
const NoFoundPage: React.FC = () => (
  <div className=" h-full w-full bg-stone-400">
    <Result
      status="error"
      title="页面不存在"
      description={
        <Button
          color="primary"
          onClick={() => history.push('/' + window.location.search)}
        >
          回主页
        </Button>
      }
    />
  </div>
);

export default NoFoundPage;
