import styles from './index.less';
import { Button, Input } from 'antd';
import useTimeOut from './hooks/useTimeout/index';
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
  ReactNode,
  Component,
  useReducer,
} from 'react';
import ProTable from './components/ProTable';
import {
  ThemeContext,
  ThemeContextProvider,
  ThemeConsumer,
} from './utils/themeContext';
import {
  history,
  request,
  useModel,
  connect,
  IndexModelState,
  Loading,
} from 'umi';
type IObject = {
  [key: string | number]: any;
};
import { observerComponent } from './utils/observer';
import useInterval from './hooks/useInterval';
import countReducer from './reducers/index';
@observerComponent
@connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.effects['index/modify'],
  }),
)
class Demo2 extends Component {
  componentDidMount() {
    this.props
      ?.dispatch({
        type: 'index/modify',
        payload: {},
      })
      .then((res: any) => {
        console.log('index/modify', res);
      });
  }
  render(): ReactNode {
    console.log('this.props', this.props);

    return <div className={styles.fontBlue}>detail1</div>;
  }
}
const Demo = () => {
  const theme: any = useContext(ThemeContext);
  console.log('theme', theme);

  const { count, decrement, increment } = useModel('counter');
  const counter = useReducer(countReducer, { num: 0 });
  const [state, dispatch] = counter;
  const [delay, setDelay] = useState(-1);
  const clear = useInterval(() => {
    console.log('interval', delay);
  }, delay);
  useEffect(() => {
    console.log('counter', counter);
  }, []);
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
          setDelay(delay + 500);
        }}
      >
        interval
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          dispatch({
            type: 'add',
            payload: {
              num: 1,
            },
          });
        }}
      >
        countReducer{state.num}
      </button>
      <button
        onClick={() => {
          console.log(
            dispatch({
              type: 'get',
            }),
          );
        }}
      >
        get countReducer
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
