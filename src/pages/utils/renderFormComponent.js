import { Select, Input, Form, Button, DatePicker } from 'antd';
const typeList = ['select', 'input', 'search', 'rangepicker'];
const { RangePicker } = DatePicker;
export const renderFormItem = (item) => {
  console.log('options', item);

  if (!typeList.includes(item.component))
    return <div>组件类型有{typeList.join(',')}</div>;

  if (item.component == 'select') {
    if (
      item.value === undefined &&
      (!item.options || item.options.length == 0)
    ) {
      delete item.value;
    }
    return (
      <Select {...item}>
        {item.options &&
          item.options.map((item, index) => (
            <Select.Option key={index} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
      </Select>
    );
  }
  if (item.component == 'input') {
    return <Input {...item} />;
  }
  if (item.component == 'search') {
    return <Input.Search {...item} />;
  }
  if (item.component == 'button') {
    return <Button {...item}>{item.label}</Button>;
  }
  if (item.component == 'rangepicker') {
    return <RangePicker {...item}></RangePicker>;
  }
};
