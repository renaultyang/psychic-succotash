import React, { useMemo, useState } from 'react';

const Example7 = () => {
  const [xiaohong,setxiaohong] = useState('小红') 
  const [xiaolv,setxiaolv] = useState('小绿') 
  return <>
    <button onClick={()=> setxiaohong(new Date())}>小红</button>
    <button onClick={()=> setxiaolv(new Date() + ',小绿走来了')}>小绿</button>
    <ChildrenComponent name={ xiaohong }> { xiaolv } </ChildrenComponent>
  </>;
};
// 父组件刷新连带子组件刷新，但是子组件内有些代码依赖项不变不需要执行，就可以利用useMemo
const ChildrenComponent = ({ name, children }) => {
  console.log('子组件刷新')
  useMemo(() => {
    console.log('name变化组件刷新，小红才执行')
  }, [ name ] )
  return <>
    <span>{ children }</span>
  </>;
};

export default Example7;

