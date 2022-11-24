import {
  Cascader,
  Checkbox,
  Input,
  Radio,
  Rate,
  Slider,
  Switch,
  TextArea,
  Selector,
} from 'antd-mobile';
import classNames from 'classnames';
import WrappedFormItem from '../components/CustomWrappedFormItem';
import CustomUpload from '../CustomUpload/CustomUpload';
import './index.less';

const renderRequired = (fieldProps) =>
  fieldProps?.required && <span style={{ color: 'red' }}>*</span>;

const renderLabel = (fieldProps, labelStyle, labelName) => (
  <span className="custom-label-container">
    {fieldProps?.justify && renderRequired(fieldProps)}
    <span
      className={classNames(fieldProps?.justify ? 'custom-label' : '')}
      style={{
        ...labelStyle,
      }}
    >
      {!fieldProps?.justify && renderRequired(fieldProps)}
      {labelName}
    </span>
  </span>
);
/**
 *
 * @param {*} item
 * name:字段名
 * type:组件类型
 * labelName:标签名
 * labelStyle:标签css
 * disabled & readonly 禁用选择只读样式,
 * inline-- inlineStyle-upload 专用
 * fieldProps:表单属性
 * style 表单css
 * @returns
 */
export const renderFormComponent = (item) => {
  const {
    type,
    name,
    labelName,
    fieldProps = {},
    labelStyle,
    disabled,
    readonly,
    inline = false,
    style = {},
    inlineStyle = {},
    Component,
  } = item;
  let styles = { width: fieldProps?.width || '100%' };
  fieldProps.rules = fieldProps?.rules || [
    { required: !!fieldProps?.required, message: '此为必填' },
  ];
  let readonlySyle = readonly
    ? { backgroundColor: '#fff', cursor: 'default', color: '#0E2949' }
    : {};
  styles = Object.assign(styles, readonlySyle, style);
  switch (type) {
    case 'Input':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Input style={{ ...styles }} disabled={!!disabled} {...fieldProps} />
        </WrappedFormItem>
      );

    case 'Cascader':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Cascader style={{ ...styles }} disabled={!!disabled} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Upload':
      return (
        <WrappedFormItem
          name={name}
          inline={inline}
          inlineStyle={inlineStyle}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <CustomUpload style={styles} {...fieldProps} />
        </WrappedFormItem>
      );

    case 'TextArea':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <TextArea style={styles} disabled={!!disabled} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Select':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Selector disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Checkbox':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Checkbox.Group disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Radio':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Radio.Group disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );

    case 'Rate':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Rate disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Switch':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Switch disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );
    case 'Slider':
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Slider disabled={!!disabled} style={styles} {...fieldProps} />
        </WrappedFormItem>
      );
    default:
      return (
        <WrappedFormItem
          name={name}
          rules={fieldProps?.rules || []}
          label={renderLabel(fieldProps, labelStyle, labelName)}
        >
          <Input style={styles} disabled={!!disabled} {...fieldProps} />
        </WrappedFormItem>
      );
  }
};

export const formArr = (arr, span) => {
  let arr2 = [];
  let tempArr = [];
  for (let i = 0; i < arr.length / span; i++) {
    arr2.push(arr.slice(i * span, span * (i + 1)));
  }

  return arr2;
};
