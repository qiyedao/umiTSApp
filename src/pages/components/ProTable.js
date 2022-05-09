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

class ProTable extends React.Component {
  state = {
    dataSource: [],
    total: 0,
    success: true,
    pageNo: 1,
    pageSize: 10,
    params: {},
    tempParams: {},
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
  componentDidMount() {
    if (this.props.actionRef) {
      this.props.actionRef.current = {
        handleReset: this.handleReset,
        handleSearch: this.handleSearch,
      };
    }
    let { pageNo, pageSize } = this.state;
    this.props.request &&
      this.props.request({ pageNo, pageSize }).then((res) => {
        this.setState({
          ...res,
        });
      });
  }
  renderFilter = () => {
    let divList = [];
    this.props.columns &&
      this.props.columns.map((item) => {
        if (item.search) {
          divList.push(
            <Col flex="row">
              <span>{item.title}</span>
              <Input
                value={this.state.tempParams[item.dataIndex]}
                onChange={(e) => {
                  this.setState({
                    tempParams: {
                      ...this.state.tempParams,
                      [item.dataIndex]: e.target.value,
                    },
                  });
                }}
                placeholder={item.title}
              />
            </Col>,
          );
        }
      });
    return divList;
  };
  render() {
    console.log('this.state', this.state);
    return (
      <div>
        <Row>{this.renderFilter()}</Row>
        <Button type="primary" onClick={() => this.handleSearch()}>
          查询
        </Button>
        <Button onClick={() => this.handleReset()}>重置</Button>
        <Table
          pagination={false}
          {...this.props}
          dataSource={this.state.dataSource}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>{this.props.paginationLeftSection}</div>
          <Pagination
            {...this.props}
            total={this.state.total}
            pageSize={this.state.pageSize}
            current={this.state.pageNo}
            onChange={(pageNo, pageSize) => {
              this.props
                .request({ pageNo, pageSize, ...this.state.params })
                .then((res) => {
                  this.setState({
                    ...res,
                    pageNo,
                    pageSize,
                  });
                });
            }}
          />
        </div>
      </div>
    );
  }
}
export default ProTable;
