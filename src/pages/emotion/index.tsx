import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Modal } from 'antd-mobile';
const Button = styled.div`
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
export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div css={buttonCss}>
      <Button
        onClick={() => {
          console.log('click');
          setVisible(true);
        }}
      >
        <div className="btnclick"> click</div>
      </Button>
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
    </div>
  );
};
