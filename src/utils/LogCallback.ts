export const LogType = (type: string) => {
  console.log('LogCallBackType', type);
  return (target: any, name: any, das: any) => {
    console.log(
      'LogCallback target',
      target,
      'target',
      name,
      'name',
      das,
      'das',
    );
    const oldValue = das.value;
    das.value = function () {
      return oldValue.apply(this, arguments);
    };

    return das;
  };
};
