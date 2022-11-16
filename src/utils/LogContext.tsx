import React from 'react';
const LogContext = React.createContext({});
const LogContextProvider = (value: any) => {
  return (WrappedComponent: any) => {
    return class NewComponent extends React.Component {
      render(): React.ReactNode {
        return (
          <LogContext.Provider value={value}>
            <WrappedComponent {...this.props} />
          </LogContext.Provider>
        );
      }
    };
  };
};
const LogContextConsumer = LogContext.Consumer;
export { LogContextProvider, LogContextConsumer };
