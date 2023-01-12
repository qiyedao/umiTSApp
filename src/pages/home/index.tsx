import type { FC } from 'react';
import { useEffect } from 'react';
import { connect, ConnectProps, GlobalModelState } from 'umi';
import dayjs from 'dayjs';
import Log from '@/utils/Log';
interface HomeProps extends ConnectProps {
  global: GlobalModelState;
}
import '../../../public/chat/index';
import '../../../public/chat/index.css';
const ChatApp = () => {
  useEffect(() => {
    const chat = new window.ChatSDK({ root: document.getElementById('chat') as HTMLElement });
    chat.init();
  }, []);
  return <div style={{ height: 'calc(100vh - 0px)' }} id="chat"></div>;
};
const Home: FC<HomeProps> = (props) => {
  useEffect(() => {
    console.log(dayjs().format('YYYY-MM-DD hh:mm:ss'), 'dayjs');

    window.wx.config({});
    console.log('props', props);
  }, []);
  // const queryStatus = () => {
  //   return new Promise((resolve, reject) => {
  //     console.log('status');
  //     resolve({ status: 'success' });
  //   });
  // };
  // const { data, run, cancel } = useRequest(queryStatus, {
  //   pollingInterval: 3000,
  // });

  return (
    <div>
      <ChatApp />
    </div>
  );
};
export default connect(({ global }: { global: GlobalModelState }) => global)(Log('home')(Home));
