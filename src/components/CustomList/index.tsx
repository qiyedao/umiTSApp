import { InfiniteScroll } from 'antd-mobile';
import React, { FC, useState } from 'react';

interface CustomListProps {
  renderItem: (item: any, index: number) => React.ReactNode;

  request: () => Promise<any>;
}
const CustomList: FC<CustomListProps> = ({ renderItem, request }) => {
  const [data, setData] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    const tmp = await request();
    setData((val) => [...val, ...tmp]);

    setHasMore(tmp.length > 0);
  }

  return (
    <div>
      {data.map((item, index) => renderItem(item, index))}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default CustomList;
