import { IApi, IConfig } from 'umi';

module.exports = (api: IApi) => {
  api.describe({
    key: 'customFavicon',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
    enableBy: api.EnableBy.config,
  });
  api.modifyConfig((memo) => {
    console.log('memo', memo.favicons, 'memo', memo.favicon);
    memo.favicons = [api.userConfig.customFavicon];
    return memo;
  });
};
