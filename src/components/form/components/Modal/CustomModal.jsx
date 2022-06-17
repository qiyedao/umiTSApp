import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import classNames from 'classnames';
import './index.less';
export default ({
  children,
  onSubmit,
  okText,
  cancelText,
  okStyle,
  cancelStyle,
  onCancel,
  footer,
  visible,
  title,
  rightTitle,
  closable,
  footerStyle,
  headerStyle,
  contentStyle,
  confirmLoading,
  bodyStyle,
  headerBorder = false,
  footerBorder = false,
  titleStyle,
  rigitTitleStyle,
}) => {
  const renderButton = () => {
    if (footer) {
      return footer;
    } else {
      return [
        <Button
          loading={confirmLoading || false}
          onClick={() => {
            onSubmit && onSubmit();
          }}
          key={'ok'}
          type="primary"
          style={okStyle || { marginRight: 16, width: 75 }}
        >
          {okText ? okText : '确定'}
        </Button>,
        <Button
          onClick={() => {
            onCancel && onCancel();
          }}
          key={'cancel'}
          style={cancelStyle || { width: 75 }}
        >
          {cancelText ? cancelText : '取消'}
        </Button>,
      ];
    }
  };
  return (
    <Modal
      footer={null}
      closable={closable || false}
      closeIcon={<div>hello</div>}
      visible={visible}
      bodyStyle={bodyStyle || {}}
    >
      <div
        className={classNames(
          'custom-modal-header',
          headerBorder ? 'custom-modal-header-border' : '',
        )}
        style={headerStyle || {}}
      >
        <div style={titleStyle || {}}>{title}</div>
        <div
          style={rigitTitleStyle || {}}
          className={classNames('custom-title-right')}
        >
          {rightTitle}
        </div>
      </div>
      <div style={contentStyle || {}}>{children}</div>
      <div
        className={classNames(
          'custom-modal-footer',
          footerBorder ? 'custom-modal-footer-border' : '',
        )}
        style={footerStyle || {}}
      >
        {renderButton()}
      </div>
    </Modal>
  );
};
