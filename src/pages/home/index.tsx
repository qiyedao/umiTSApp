import type { FC } from 'react';
import { useEffect } from 'react';
import { connect, ConnectProps, GlobalModelState } from 'umi';
import dayjs from 'dayjs';
import Log from '@/utils/Log';
interface HomeProps extends ConnectProps {
  global: GlobalModelState;
}
import {
  ChatSDK,
  ScrollView,
  Card,
  CardTitle,
  CardText,
  MessageProps,
} from '../../../public/chat/index';
import '../../../public/chat/index.css';
import request from 'umi-request';
import React from 'react';
const ChatApp = () => {
  const initialMessages: MessageProps[] = [
    {
      type: 'system',
      content: { text: '8888VIP专属智能客服小蜜 为您服务' },
      _id: 123,
    },
    {
      type: 'text',
      content: { text: 'Hi，我是你的专属智能助理小蜜，有问题请随时找我哦~' },
      createdAt: Date.now(),
      hasTime: true,
      _id: 1234,
    },
    // {
    //   type: 'guess-you',
    //   _id: 12345,
    // },
    // {
    //   type: 'skill-cards',
    //   _id: 123456,
    // },
    // {
    //   type: 'text',
    //   content: { text: '小蜜我要查看我的物流信息' },
    //   position: 'right',
    //   _id: 1234567,
    // },
    // {
    //   type: 'image',
    //   content: {
    //     picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
    //   },
    //   _id: 12345678,
    // },
    // {
    //   type: 'system',
    //   content: {
    //     text: '由于您长时间未说话或退出小蜜（离开页面、锁屏等）已自动结束本次服务',
    //   },
    //   _id: 123456789,
    // },
  ];
  const defaultQuickReplies = [
    {
      icon: 'shopping-bag',
      name: '咨询订单问题（高亮）',
      code: 'orderSelector',
      isHighlight: true,
    },
    {
      icon: 'shopping-bag',
      name: '如何申请退款（高亮）',
      code: 'orderSelector',
      isHighlight: true,
    },
    {
      icon: 'message',
      name: '联系人工服务（高亮+新）',
      code: 'q1',
      isNew: true,
      isHighlight: true,
    },
    {
      name: '质量问题（新）',
      code: 'q3',
      isNew: true,
    },
    {
      name: '卖家文案',
      code: 'q4',
    },
    {
      name: '5强快捷短语',
      code: 'q5',
    },
    {
      name: '6弱快捷短语',
      code: 'q6',
    },
  ];
  const skillList = [
    { title: '话费充值', desc: '智能充值智能充值' },
    { title: '评价管理', desc: '我的评价' },
    { title: '联系商家', desc: '急速联系' },
    { title: '红包卡券', desc: '使用优惠' },
    { title: '修改地址', desc: '修改地址' },
  ];

  class SkillCard extends React.Component {
    render(): React.ReactNode {
      return (
        <ScrollView
          className="skill-cards"
          data={skillList}
          fullWidth
          renderItem={(item) => (
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.desc}</CardText>
            </Card>
          )}
        />
      );
    }
  }
  useEffect(() => {
    const chat = new ChatSDK({
      root: document.getElementById('chat') as HTMLElement,
      config: {
        messages: initialMessages,
        quickReplies: defaultQuickReplies,
        robot: {
          avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
          name: '小小蜜',
        },
        user: {
          avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
          name: '小小蜜',
        },
      },
      requests: {
        baseUrl: 'http://192.168.3.209:18080',
        tokenUrl: '/qa/security/token/',
        userId: '1000008c169907f3b2843fba8c67c6a4a8fd23a',
        sceneId: '4840de564d794fc7bee7fc90f1f125c0',
        request: request,
        send: async (msg) => {
          return {
            url: '/qa/server/qa/question',
            options: {
              params: {
                questioning: msg.content.text,
                version: 0,
                channel: 1,
              },
            },
          };
        },
      },
      components: {
        'skill-cards': SkillCard,
      },
    });
    chat.init();
  }, []);
  return <div style={{ height: 'calc(100vh - 48px)' }} id="chat"></div>;
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
