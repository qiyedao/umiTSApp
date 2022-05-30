import { history } from 'umi';
export default function (initialState: any) {
  // const { userId, role } = initialState;
  console.log('initialState access');
  let auth: string | any[] = [];

  return {
    canAdmin: (current: any) => {
      return true;
    },
  };
}
