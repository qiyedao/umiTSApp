import { commonFormUpload } from '@/utils/upload';
import type { Effect, Reducer } from 'umi';

export interface GlobalModelState {
  name: string;
  prevPath: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    name: '',
    prevPath: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
      call(commonFormUpload, payload);
      put({
        type: 'save',
        payload: {},
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;
