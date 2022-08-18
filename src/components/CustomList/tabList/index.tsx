import { css } from '@emotion/react';
import { InfiniteScroll, Tabs } from 'antd-mobile';
import React, { FC, useState } from 'react';
import CustomList from '..';
import styles from './index.less';
type TabType = {
  title: string;
  key: string;
};

const TabsCss = css`
  .adm-tabs-header {
    position: sticky;
    background: #fff;
    top: 0;
  }
`;
const tabHeight = 42;

interface CustomListProps {
  renderItem: (item: any, index: number) => React.ReactNode;
  tabs?: TabType[];
  request: () => Promise<any>;
  activeKey?: string;
  onChangeTab?: (key: string) => void;
}
const TabList: FC<CustomListProps> = ({
  tabs = [],
  renderItem,
  request,
  onChangeTab,
  activeKey,
}) => {
  const handleRenderTabs = () => {
    let eleList: React.ReactNode[] = [];
    tabs.map((item: TabType) => {
      eleList.push(
        <Tabs.Tab title={item.title} key={item.key}>
          {activeKey === item.key && (
            <CustomList request={request} renderItem={renderItem} />
          )}
        </Tabs.Tab>,
      );
    });
    return (
      <Tabs
        css={TabsCss}
        activeKey={activeKey}
        onChange={(key) => {
          onChangeTab && onChangeTab(key);
          window.scrollTo({
            top: window.scrollY - tabHeight,
          });
        }}
      >
        {eleList}
      </Tabs>
    );
  };

  return <div>{tabs.length && handleRenderTabs()}</div>;
};

export default TabList;
