import React,{ useReducer } from 'react'
export const Context = React.createContext();
export const Store = (prop) => {
  const [state, dispatch] = useReducer((state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'decline':
        return state - 1;
    }
  }, 0);
  return (
    <Context.Provider value={{ state, dispatch }}>{prop.children}</Context.Provider>
  );
};