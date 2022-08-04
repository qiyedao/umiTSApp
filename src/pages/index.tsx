import React from 'react';
import { Skeleton, DotLoading, ProgressCircle } from 'antd-mobile';

export default () => {
  return (
    <div>
      <ProgressCircle />
      <DotLoading />
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};
