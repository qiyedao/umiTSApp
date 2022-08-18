import CustomList from '@/components/CustomList';
import TabList from '@/components/CustomList/tabList';
import React, { useState } from 'react';
export default () => {
  const [activeKey, setActiveKey] = useState('A1');
  const requst = () => {
    if (activeKey === 'A') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            'A1',
            'A2',
            'A33',
            'A1',
            'A2',
            'A33',
            'A1',
            'A2',
            'A33',
            'A1',
            'A2',
            'A33',
            'A1',
            'A2',
            'A33',
          ]);
        }, 1000);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            '1',
            '2',
            '33',
            '1',
            '2',
            '33',
            '1',
            '2',
            '33',
            '1',
            '2',
            '33',
            '1',
            '2',
            '33',
          ]);
        }, 1000);
      });
    }
  };
  const tabs = [
    { key: 'A', title: 'A' },
    { key: 'A1', title: 'A1' },
    { key: 'A2', title: 'A2' },
  ];
  const renderItem = (item: any, index: number) => (
    <div key={index}>{item}</div>
  );
  return (
    <TabList
      request={requst}
      renderItem={renderItem}
      tabs={tabs}
      activeKey={activeKey}
      onChangeTab={(key) => {
        setActiveKey(key);
      }}
    />
  );
};
