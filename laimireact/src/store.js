import React,{ useReducer } from 'react'
export const Store = React.createContext();
export const Context = (prop) => {
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
    <Store.Provider value={{ state, dispatch }}>{prop.children}</Store.Provider>
  );
};