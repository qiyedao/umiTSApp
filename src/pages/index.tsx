import React from 'react';
import { Skeleton, DotLoading } from 'antd-mobile';

export default () => {
  return (
    <div>
      index
      <DotLoading />
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};
