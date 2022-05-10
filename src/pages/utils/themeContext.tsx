import * as React from 'react';

const styles = {
  color: 'red',
};
const themeActions = (state: any, action: any) => {
  console.log(state, 'state', action, 'action');

  switch (action.type) {
    case 'blue':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export const ThemeContext = React.createContext<object>(styles);
export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer(themeActions, styles);
  console.log('state', state);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
