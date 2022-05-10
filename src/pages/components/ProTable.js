import React, { Component } from 'react';
import {
  Modal,
  Row,
  Col,
  Form,
  Button,
  Table,
  message,
  Pagination,
  Tooltip,
  Input,
} from 'antd';
import styles from './index.less';
import { renderFormItem } from '../utils/renderFormComponent';
class ProTable extends React.Component {
  state = {
    dataSource: [],
    total: 0,
    success: true,
    pageNo: 1,
    pageSize: 10,
    params: {},
    tempParams: {},
    span: 6,
    loading: false,
  };

  initState = () => {
    let pageSize = this.props.pageSize || this.state.pageSize;
    let pageNo = this.state.pageNo;
    this.props.request &&
      this.props.request({ pageNo, pageSize }).then((res) => {
        console.log('handlerequest res', res);
        this.setState({
          ...res,
        });
      });
    this.setState({
      pageSize: pageSize,
      loading: this.props.loading || false,
    });
  };

  handleRefresh = () => {
    let params = {
      pageNo: 1,
      pageSize: this.state.pageSize,
      ...this.state.params,
    };

    this.props.request &&
      this.props.request(params).then((res) => {
        this.setState({
          ...res,
          pageNo: params.pageNo,
          params: this.state.tempParams,
        });
      });
  };

  handleSearch = () => {
    let params = {
      pageNo: 1,
      pageSize: this.state.pageSize,
      ...this.state.tempParams,
    };

    this.props.request &&
      this.props.request(params).then((res) => {
        this.setState({
          ...res,
          pageNo: params.pageNo,
          params: this.state.tempParams,
        });
      });
  };
  handleReset = () => {
    let params = {
      pageNo: 1,
      pageSize: this.state.pageSize,
    };

    this.props.request &&
      this.props.request(params).then((res) => {
        this.setState({
          ...res,
          pageNo: 1,
          pageSize: this.state.pageSize,
          params: {},
          tempParams: {},
        });
      });
  };

  handleSetParams = (params) => {
    console.log('this.state.tempParams', this.state.tempParams);
    if (typeof params === 'object') {
      this.setState({
        tempParams: {
          ...this.state.tempParams,
          ...params,
        },
      });
    }
  };

  handleGetParams = (key) => {
    return this.state.tempParams[key];
  };

  handleChangeNumber = (pageNo, pageSize) => {
    this.props
      .request({ changeNumber: true, pageNo, pageSize, ...this.state.params })
      .then((res) => {
        this.setState({
          ...res,
          pageNo,
          pageSize,
        });
      });
  };
  componentDidMount() {
    if (this.props.actionRef) {
      this.props.actionRef.current = {
        handleReset: this.handleReset,
        handleSearch: this.handleSearch,
        handleRefresh: this.handleRefresh,
        handleSetParams: this.handleSetParams,
        handleGetParams: this.handleGetParams,
      };
    }
    this.initState();
    if (this.props.search) {
      this.getColumnsCount();
      window.addEventListener('resize', this.getColumnsCount);
    }
  }
  componentWillUnmount() {
    if (this.props.search) {
      window.removeEventListener('resize', this.getColumnsCount);
    }
  }
  getColumnsCount = () => {
    let span = 0;
    if (window.innerWidth > 992) {
      span = 6;
    }
    if (window.innerWidth > 768 && window.innerWidth < 992) {
      span = 8;
    }
    if (window.innerWidth > 576 && window.innerWidth < 768) {
      span = 12;
    }
    if (window.innerWidth <= 576) {
      span = 24;
    }
    if (span)
      this.setState({
        span,
      });
  };
  renderFilter = (span) => {
    let divList = [];
    this.props.columns &&
      this.props.columns.map((item, index) => {
        if (item.search) {
          divList.push(
            <Col key={index} span={span}>
              <div className={styles.itemContainer}>
                <span className={styles.filterLabel}>
                  <span
                    style={item.required ? styles.required : styles.noRequired}
                  >
                    *
                  </span>
                  {item.title}
                  <span className={styles.labelAfter}>:</span>
                </span>
                {renderFormItem({
                  style: item.formStyle,
                  value: this.state.tempParams[item.dataIndex],
                  onChange: (e) => {
                    console.log('e', e);

                    this.setState({
                      tempParams: {
                        ...this.state.tempParams,
                        [item.dataIndex]: this.renderVal(item, e),
                      },
                    });
                  },
                  placeholder: item.placeholder ? item.placeholder : item.title,
                  component: item.component,
                  options: item.options,
                })}
              </div>
            </Col>,
          );
        }
      });
    return divList;
  };

  renderVal = (item, e) => {
    switch (item.component) {
      case 'select':
        return e;
      case 'input':
        return e.target.value;
      default:
        return '';
    }
  };
  render() {
    return (
      <div style={this.props.containerStyle ? this.props.containerStyle : ''}>
        {this.props.search ? (
          <div>
            {this.props.customFilter ? (
              this.props.customFilter
            ) : (
              <div>
                <Row style={{ marginBottom: 16 }} wrap>
                  {this.renderFilter(this.state.span)}
                </Row>
                <Row style={{ marginBottom: 16 }}>
                  <Col offset={18} span={6}>
                    <div className={styles.flexEnd}>
                      <Button
                        style={{ marginRight: 20 }}
                        type="primary"
                        onClick={() => this.handleSearch()}
                      >
                        查询
                      </Button>
                      <Button onClick={() => this.handleReset()}>重置</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </div>
        ) : null}
        <Table
          pagination={false}
          rowKey={(record) => record[this.props.rowkey]}
          rowSelection={this.props.rowSelection || null}
          columns={this.props.columns}
          loading={this.state.loading}
          dataSource={this.state.dataSource}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <div>{this.props.paginationLeftSection}</div>
          <Pagination
            showSizeChanger={false}
            total={this.state.total}
            pageSize={this.state.pageSize}
            current={this.state.pageNo}
            onChange={(pageNo, pageSize) => {
              this.handleChangeNumber(pageNo, pageSize);
            }}
          />
        </div>
      </div>
    );
  }
}
export default ProTable;
