import React from 'react';
import { LogType } from './LogCallback';
const Log = (type: string) => {
  return (WrappedComponent: React.FC) => {
    return class NewComponent extends React.Component {
      @LogType(type)
      componentDidMount() {
        console.log('HOC Log type', type);
        LogType(type);
      }
      render(): React.ReactNode {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
};
export default Log;
