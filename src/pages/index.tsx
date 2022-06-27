import styles from './index.less';
import { Button, Input, DatePicker } from 'antd';
import moment from 'moment';
import * as echarts from 'echarts';
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
import dayjs from 'dayjs';
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
    window.h5sdk.ready(function () {
      window.tt.openSchema({
        schema: 'https://open.feishu.cn',
        external: false,
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(`open fail`);
        },
      });
    });
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('myChart'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
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
        // request={handleRequest}
        columns={columns}
        paginationLeftSection={'已选择10'}
        search={true}
        customFilter={renderFilter()}
      />
      <DatePicker
        onChange={(value) => {
          console.log(
            'DatePicker',
            value,
            'moment',
            moment(value).format('YYYY-MM-DD hh:mm:ss'),
          );
        }}
      />
      <div id="myChart" style={{ width: 500, height: 500 }}></div>
    </div>
  );
}
