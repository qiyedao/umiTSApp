import { Input, Select } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
const PriceInput = ({
  value = {},
  onChange,
  options = [],
  selectWidth,
  width,
  step = 1,
  precision = 0,
  placeholder = ['', ''],
  containerStyle = {},
}) => {
  const [number, setNumber] = useState(null);
  const [currency, setCurrency] = useState(null);

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = e;

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        ...containerStyle,
      }}
    >
      <Input
        value={value.number || number}
        onChange={onNumberChange}
        step={step}
        placeholder={placeholder[0]}
        precision={precision}
        style={{ width: width || 100 }}
      />
      <Select
        value={value.currency || currency}
        placeholder={placeholder[1]}
        style={{
          width: selectWidth || 80,
        }}
        options={options}
        onChange={onCurrencyChange}
      />
    </div>
  );
};

export default PriceInput;
