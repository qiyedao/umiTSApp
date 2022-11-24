import React, { useEffect } from 'react';
import { connect, ConnectProps, Loading, useLocation, GlobalModelState } from 'umi';
interface ChatProps extends ConnectProps {
  global: GlobalModelState;
  loading: boolean;
}
const Chat: React.FC<ChatProps> = ({ global }) => {
  const location = useLocation<Location>();
  console.log('init', location);
  useEffect(() => {
    return () => {
      console.log('卸载');
    };
  }, []);
  const { name } = global;

  return <div>{name}</div>;
};
export default connect(({ global, loading }: { global: GlobalModelState; loading: Loading }) => ({
  global,
  loading: loading.models.global,
}))(Chat);
