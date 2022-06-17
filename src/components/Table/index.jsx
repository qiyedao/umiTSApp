import { Table, Button, Pagination } from 'antd';
import SearchForm from '@/components/Form/SearchForm';
import { useEffect, useRef, useState } from 'react';
import './index.less';
const ProTable = ({
  columns,
  pagination,
  paginationLeft,
  paginationRight,
  onChange,
  toolBarRender,
  search = true,
  request,
  actionRef,
  formRef,
}) => {
  const [searchColumns, setSearchColumns] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [dataSource, setDataSource] = useState([]);
  const [formValues, setFormValues] = useState({});

  const [total, setTotal] = useState(0);
  const searchFormRef = useRef();
  useEffect(() => {
    handdleSearchColumns();
    handleRequest({ current: 1 });
    handleActionRef();
    formRef.current = searchFormRef.current;
  }, []);

  const handleActionRef = () => {
    //刷新reload
    // 刷新并清空,页码也会重置，不包括表单reloadAndRest
    // 重置到默认值，包括表单reset
    //重置所有并查询resetAndSubmit
    //查询 submit
    actionRef.current = {
      reload,
      reloadAndRest,
      reset,
      resetAndSubmit,
      submit,
    };
  };

  const reload = () => {
    handleRequest({ current });
  };

  const reloadAndRest = (pageNumber = 1) => {
    handleRequest({ current: pageNumber });
  };

  const reset = () => {
    searchFormRef?.current.resetFields();
    setFormValues({});
  };

  const resetAndSubmit = () => {
    searchFormRef?.current.resetFields();
    handleRequest({ current: 1, pageSize }, {}, true);
  };

  //分页
  const handleChangeNumber = (page) => {
    handleRequest({ current: page, pageSize });
  };
  //收集表单
  const submit = () => {
    searchFormRef?.current.validateFields().then((values) => {
      handleRequest({ current: 1, pageSize }, values);
    });
  };

  //获取数据
  const handleRequest = (originParams = {}, values, isReset = false) => {
    if (request) {
      let params = { ...originParams };
      if (!isReset) {
        params = { ...params, ...formValues, ...values };
      }
      console.log('params', params);
      request(params).then((data) => {
        if (data.success) {
          setDataSource(data.data);
          setTotal(data.total);
          setCurrent(params.current || 1);
          if (values) {
            setFormValues(values);
          }
        }
      });
    }
  };
  //处理搜索列表
  const handdleSearchColumns = () => {
    const columnsForSearch = columns
      .filter((item) => item.search !== false && item.type)
      .map((item) => {
        return {
          ...item,
          name: item.name || item.dataIndex,
          labelName: item.labelName || item.title,
        };
      });
    setSearchColumns(columnsForSearch);
  };

  return (
    <div>
      <SearchForm
        searchColumns={searchColumns}
        searchFormRef={searchFormRef}
        span={3}
        toolBarRender={
          toolBarRender
            ? toolBarRender
            : [
                <Button
                  style={{ marginRight: 16 }}
                  htmlType="reset"
                  key="reset"
                  onClick={() => {
                    handleRequest({ current: 1, pageSize }, {}, true);
                  }}
                >
                  重置
                </Button>,
                <Button onClick={submit} key="search" type="primary">
                  查询
                </Button>,
              ]
        }
      />
      <Table columns={columns} dataSource={dataSource} pagination={false} />
      {dataSource.length ? (
        <div className={'custom-pagination-container'}>
          {paginationLeft ? paginationLeft : null}
          <div>
            <Pagination
              {...pagination}
              current={current}
              total={total}
              onChange={handleChangeNumber}
            />
          </div>
          {paginationRight ? paginationRight : null}
        </div>
      ) : null}
    </div>
  );
};

export default ProTable;
