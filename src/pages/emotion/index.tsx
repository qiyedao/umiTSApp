import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Modal, Form, Button, Toast } from 'antd-mobile';
import {
  renderFormComponent,
  formArr,
} from '@/components/CustomForm/common/index';
import BaseForm from '@/components/CustomForm/BaseForm';
import { FormInstance } from 'antd-mobile/es/components/form';
import { ObjectType } from '@/typings';
const Button2 = styled.div`
  width: 100px;
  height: 30px;
  background-color: #1890ff;
  color: #fff;
  cursor: pointer;
  text-align: center;
`;
const buttonCss = css`
  font-size: 30px;
  .btnclick {
    font-size: 50px;
  }
`;
const Icon = styled.div((props) => ({
  color: 'red',
  '&:hover': {
    color: props.color ? props.color : 'blue',
  },
}));
const CustomModal = styled(Modal)`
  .adm-mask {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;
const modalCss = css`
  background-color: rgba(0, 0, 0, 0.1);
  .adm-mask {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const columns = [
  {
    type: 'Input',
    labelName: '姓名：',
    name: 'name',
    fieldProps: {
      rules: [
        { type: 'string', required: true },
        { type: 'string', min: 6, message: '最少6个字符' },
      ],
    },
  },
  {
    type: 'TextArea',
    labelName: 'remark：',
    name: 'remark',
    fieldProps: {
      rules: [{ required: true, message: '请输入' }],
    },
  },
  {
    type: 'Upload',
    labelName: 'file：',

    name: 'file',
    fieldProps: {
      accept: '.zip',
      isButton: true,
      rules: [{ required: true, message: '请输入' }],
    },
  },
];
export default () => {
  const [visible, setVisible] = useState(false);
  const [initialValues, setInitialValues] = useState({});

  const [formRef] = Form.useForm();
  useEffect(() => {
    setInitialValues({
      name: '1223',
      file: [
        {
          key: 'key',
          filePath:
            'https://pics6.baidu.com/feed/10dfa9ec8a136327ce7abd51e50961e609fac74a.jpeg?token=a9bdaafc98dd901ab0537a8c02512cfe',
          fileName: 'fileName',
          name: 'name',
        },
      ],
    });
  }, []);

  return (
    <div css={buttonCss}>
      <Button2
        onClick={() => {
          console.log('click');
          setVisible(true);
          console.log(formRef, 'ref');
        }}
      >
        <div className="btnclick"> click</div>
      </Button2>
      <Icon className="icon-red" color="orange">
        icon
      </Icon>
      <CustomModal
        css={modalCss}
        closeOnMaskClick
        onClose={() => setVisible(false)}
        title="custom"
        content="hello"
        visible={visible}
      ></CustomModal>
      <BaseForm
        columns={columns}
        initialValues={initialValues}
        formRef={formRef}
        footer={false}
        onFinish={function (values: ObjectType): void {
          console.log(values, 'onFinish values');
        }}
      />
      <Button
        block
        onClick={() => {
          formRef.submit();
        }}
        color="primary"
      >
        formRef
      </Button>
    </div>
  );
};
