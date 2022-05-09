import mockjs from 'mockjs';
type IData = {
  [key: string]: any;
};

type IRestult = {
  code: number;
  message?: string;
  data?: IData;
};
export default {
  'GET /user': (req: any, res: { send: (arg0: IRestult) => void }) => {
    console.log('req', req.params);

    res.send({
      code: 1,
      data: {
        name: 'yiyi',
      },
    });
  },
  'GET /v1/user': mockjs.mock({
    'list|100': [
      { 'rowKey|1-100': 50, name: '@city', 'value|1-100': 50, 'type|0-2': 1 },
    ],
  }),
};
