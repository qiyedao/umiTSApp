import { IApi, IConfig } from 'umi';

module.exports = (api: IApi) => {
  console.log('api');
  api.describe({
    key: 'changeFavicon',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
    enableBy: api.EnableBy.config,
  });
  api.modifyConfig((memo) => {
    console.log('memo', memo.favicons, 'memo', memo.favicon);
    memo.favicons = [api.userConfig.changeFavicon];
    return memo;
  });
};
