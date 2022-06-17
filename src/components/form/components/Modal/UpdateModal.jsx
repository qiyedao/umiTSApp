import React from 'react';
import CustomModal from './CustomModal';
export default (props) => {
  return (
    <CustomModal
      headerBorder={true}
      title={'编辑'}
      rightTitle={
        <span>
          <span style={{ color: 'rgba(234, 31, 55, 1)' }}>*</span>为必填项
        </span>
      }
      {...props}
    >
      {props.children || '编辑内容'}
    </CustomModal>
  );
};
