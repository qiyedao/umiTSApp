import styles from './index.less';
import { Button, Input } from 'antd';
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import ProTable from './components/ProTable';
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeConsumer,
} from './utils/themeContext';
import { history } from 'umi';
type IObject = {
  [key: string | number]: any;
};

const Demo = () => {
  const theme: any = useContext(ThemeContext);
  console.log('theme', theme);

  return (
    <div>
      <div style={{ color: theme.color }}>theme</div>
      <button
        onClick={() => {
          history.push('/detail');
        }}
      >
        push
      </button>
      <button
        onClick={() => {
          theme.dispatch({
            type: 'blue',
            payload: {
              color: 'blue',
            },
          });
        }}
      >
        useReducer change color
      </button>
      <ThemeConsumer>
        {(props: any) => {
          console.log('props', props);

          return <div>{props.color}</div>;
        }}
      </ThemeConsumer>
    </div>
  );
};
export default function IndexPage() {
  const [num, setNum] = useState<number>(0);
  const [list, setList] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [pageNo, setPageNo] = useState<number>(1);

  const [params, setParams] = useState<IObject>({});
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
      component: 'input',
      formStyle: {
        width: '300px',
        minWidth: '100px',
      },
    },
    {
      title: 'val',
      dataIndex: 'value',
      key: 'value',
      search: true,
      component: 'select',
      formStyle: {
        width: '300px',
        minWidth: '100px',
      },
    },
    {
      title: '文档名称1',
      dataIndex: 'name1',
      key: 'name1',
      search: true,
      component: 'select',
      options: [
        { label: 1, value: 222 },
        { label: 2, value: 22222 },
      ],
      formStyle: {
        width: '300px',
        minWidth: '100px',
      },
    },
    {
      title: 'val1',
      dataIndex: 'value1',
      key: 'value1',
      search: true,
      component: 'input',
      formStyle: {
        width: '300px',
        minWidth: '100px',
      },
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

  const renderFilter = () => {
    let divList = [];
    divList.push(
      <div key={1} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ minWidth: 100, textAlign: 'right' }}>
          文档名称<span>:</span>
        </div>
        <Input
          value={params.name ? params.name : ''}
          onChange={(e) => {
            actionRef.current.handleSetParams({
              name: e.target.value,
            });
            setParams({
              ...params,
              name: e.target.value,
            });
          }}
        />
      </div>,
    );
    divList.push(
      <div key={2} style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ minWidth: 100, textAlign: 'right' }}>
          文档名称<span>:</span>
        </div>
        <Input
          value={params.name2 ? params.name2 : ''}
          onChange={(e) => {
            actionRef.current.handleSetParams({
              name2: e.target.value,
            });
            setParams({
              ...params,
              name2: e.target.value,
            });
          }}
        />
      </div>,
    );
    divList.push(
      <div key={'query'}>
        <Button
          type="primary"
          style={{ margin: '0px 10px' }}
          onClick={() => {
            actionRef.current && actionRef.current.handleSearch();
          }}
        >
          查询
        </Button>
        <Button
          onClick={() => {
            actionRef.current && actionRef.current.handleReset();
            setParams({});
          }}
        >
          重置
        </Button>
      </div>,
    );
    return <div style={{ display: 'flex' }}>{divList}</div>;
  };
  return (
    <div>
      <ThemeContextProvider>
        <Demo />
      </ThemeContextProvider>
      <ProTable
        containerStyle={{ padding: '20px' }}
        actionRef={actionRef}
        request={handleRequest}
        columns={columns}
        paginationLeftSection={'已选择10'}
        search={true}
        customFilter={renderFilter()}
      />
    </div>
  );
}
