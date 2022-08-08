import React, { CSSProperties } from 'react';
export type ObjectType = {
  [key: string | number]: any;
};
export type FormColumnsType = {
  type: string;
  name: string;
  labelName?: string;
  fieldProps: ObjectType;
  labelStyle?: CSSProperties;
  disabled?: boolean;
  readonly?: boolean;
  inline?: boolean;
  style?: CSSProperties;
  inlineStyle?: CSSProperties;
  Component?: React.ReactNode;
};
