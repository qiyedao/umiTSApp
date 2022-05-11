export default function (initialState: any) {
  const { userId, role } = initialState;
  console.log('initialState access', initialState);

  return {
    canAdmin: () => role == 'admin',
  };
}
