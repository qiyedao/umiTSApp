import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="无权访问"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回首页
      </Button>
    }
  />
);

export default NoFoundPage;
