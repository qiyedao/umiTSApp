import styles from './index.less';
import { Button, Input } from 'antd';
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
  ReactNode,
  Component,
} from 'react';
import ProTable from './components/ProTable';
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeConsumer,
} from './utils/themeContext';
import { history, request, useModel } from 'umi';
type IObject = {
  [key: string | number]: any;
};
import { observerComponent } from './utils/observer';
@observerComponent
class Demo2 extends Component {
  render(): ReactNode {
    return <div className={styles.fontBlue}>detail1</div>;
  }
}
const Demo = () => {
  const theme: any = useContext(ThemeContext);
  console.log('theme', theme);
  const { count, decrement, increment } = useModel('counter');
  useEffect(() => {}, []);
  return (
    <div>
      <div style={{ color: theme.color }}>theme{count}</div>
      <Button
        onClick={() => {
          increment(5);
        }}
      >
        +1
      </Button>
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
    console.log('服务端ssr');
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
      request('/v1/user').then((data) => {
        let { list } = data;
        setPageNo(pageNo);

        setDataSource(list.slice((pageNo - 1) * pageSize, pageNo * pageSize));
        resolve({
          dataSource: list.slice((pageNo - 1) * pageSize, pageNo * pageSize),
          total: list.length,
          success: true,
        });
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
        <Demo2 />
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
