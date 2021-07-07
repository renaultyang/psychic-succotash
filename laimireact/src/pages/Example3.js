import React, { useState, useContext } from 'react';
import { Store } from '../store';
import { Context } from '../store';
const ChildComponent = () => {
  const {state, dispatch } = useContext(Context)
  return <>
    <h1>{ state }</h1>
    <button onClick={()=>dispatch({type:'plus'})}>{ state }</button>
    <button onClick={()=>dispatch({type:'decline'})}>{ state }</button>
  </>;
};

const Example3 = () => {
  

  return <>
    <Store>
      <ChildComponent ></ChildComponent>
    </Store>
  </>;
};

export default Example3;



