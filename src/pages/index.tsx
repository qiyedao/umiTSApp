import styles from './index.less';
import { Button } from 'antd';
import { useState, useEffect, SetStateAction, useRef } from 'react';
import ProTable from './components/ProTable';
export default function IndexPage() {
  const [num, setNum] = useState<number>(0);
  const [list, setList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const handleClick = (num: number) => {};
  useEffect(() => {
    fetch('/v1/user')
      .then((res) => {
        console.log('fetch1', res);
        return res.json();
      })
      .then((data) => {
        console.log('fetch2', data);
        setList(data.list);
        setDataSource(data.list.slice(pageNo - 1, 10));
      });
  }, []);
  const columns = [
    {
      title: '文档名称',
      dataIndex: 'name',
      key: 'name',
      search: true,
      formType: 'input',
    },
    {
      title: 'val',
      dataIndex: 'value',
      key: 'value',
      search: true,
      formType: 'select',
    },
  ];
  const actionRef = useRef<any>(null);
  const handleRequest = (params: { [key: string]: any }) => {
    return new Promise((resolve, reject) => {
      console.log('params', params, 'actionRef', actionRef);

      let { pageNo, pageSize } = params;
      if (pageNo === 1) {
        resolve({
          dataSource: [
            {
              name: 'fs哈尔滨市',
              value: 75,
              type: 1,
            },
            {
              name: '九龙',
              value: 9,
              type: 1,
            },
            {
              name: '固原市',
              value: 37,
              type: 1,
            },
            {
              name: '永州市',
              value: 59,
              type: 0,
            },
            {
              name: '九龙',
              value: 23,
              type: 0,
            },
            {
              name: '青岛市',
              value: 6,
              type: 2,
            },
            {
              name: '菏泽市',
              value: 48,
              type: 2,
            },
            {
              name: '澳门半岛',
              value: 78,
              type: 2,
            },
            {
              name: '泉州市',
              value: 10,
              type: 1,
            },
            {
              name: '鹤岗市',
              value: 4,
              type: 1,
            },
          ],
          total: 100,
          success: true,
        });
      }
      setPageNo(pageNo);

      setDataSource(list.slice((pageNo - 1) * pageSize, pageNo * pageSize));
      resolve({
        dataSource: list.slice((pageNo - 1) * pageSize, pageNo * pageSize),
        total: list.length,
        success: true,
      });
    });
  };

  return (
    <div>
      <Button
        onClick={() => {
          actionRef.current && actionRef.current.handleSearch();
        }}
      >
        reload
      </Button>
      <ProTable
        actionRef={actionRef}
        request={handleRequest}
        columns={columns}
      />
    </div>
  );
}
