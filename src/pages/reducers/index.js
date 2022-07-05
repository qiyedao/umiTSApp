const countReducer = (state, { payload, type }) => {
  switch (type) {
    case 'add':
      return { ...state, num: state.num + payload.num };

    case 'minus':
      return { ...state, num: state.num - payload.num };

    default:
      return state;
  }
};
export default countReducer;
