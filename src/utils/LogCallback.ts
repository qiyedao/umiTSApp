export const LogType = (type: string) => {
  console.log('LogCallBackType', type);
  return (target: any, name: any, das: any) => {
    console.log('LogCallback target', target, 'target', name, 'name', das, 'das');
    const oldValue = das.value;
    das.value = function (...args: any) {
      return oldValue.apply(this, args);
    };

    return das;
  };
};
