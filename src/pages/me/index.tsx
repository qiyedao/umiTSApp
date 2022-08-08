import { Avatar, List } from 'antd-mobile';
import React, { FC } from 'react';
const ME: FC = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <Avatar onClick={() => {}} />
      </div>
      <List>
        <List.Item onClick={() => {}}>账单</List.Item>
        <List.Item onClick={() => {}}>总资产</List.Item>
        <List.Item onClick={() => {}}>设置</List.Item>
      </List>
    </div>
  );
};
export default ME;
