import { Form } from 'antd-mobile';
import React from 'react';
export default ({ children, label, name, rules = [], inline, inlineStyle }) => {
  return (
    <Form.Item
      style={
        inline
          ? { flexDirection: 'row', alignItems: 'center', ...inlineStyle }
          : {}
      }
      required={false}
      name={name}
      label={label}
      rules={rules}
    >
      {children}
    </Form.Item>
  );
};
