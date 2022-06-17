import React from 'react';
import CustomModal from './CustomModal';
export default (props) => {
  return (
    <CustomModal
      title={props.title || '删除提示'}
      contentStyle={{
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      footerBorder={props.footerBorder || true}
      {...props}
    >
      {props.children || '是否确认删除'}
    </CustomModal>
  );
};
