import TabList from '@/components/CustomList/tabList';
import { useState } from 'react';
export default () => {
  const [activeKey, setActiveKey] = useState('A1');
  const [pageNum, setPageNum] = useState(1);

  const requst = () => {
    if (activeKey === 'A') {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            '0A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
          ]);
          setPageNum(pageNum + 1);
        }, 1000);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
            'A' + pageNum,
          ]);
          setPageNum(pageNum + 1);
        }, 1000);
      });
    }
  };
  const tabs = [
    { key: 'A', title: 'A' },
    { key: 'A1', title: 'A1' },
    { key: 'A2', title: 'A2' },
  ];
  const renderItem = (item: any, index: number) => <div key={index}>{item}</div>;
  return (
    <TabList
      request={requst}
      renderItem={renderItem}
      tabs={tabs}
      activeKey={activeKey}
      onChangeTab={(key) => {
        setActiveKey(key);
        setPageNum(1);
      }}
    />
  );
};
