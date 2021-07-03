import React, { useState, useEffect } from 'react';
// useEffect 空依赖常用于初始化绑定事件和解绑事件
const Example1 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);
  const increase = () => {
    let newCount = count + parseInt(Math.random()*10);
    setCount(newCount)
  }
  const body = document.getElementsByTagName('body')[0]
 
  body.style.height ='100vh'
  console.log(body)

  useEffect(() => {
    body.onclick = () => increase();
    console.log('添加事件')
     // eslint-disable-next-line react-hooks/exhaustive-deps
    let timer = setInterval(() => {
      setCount2(parseInt(Math.random()*100)+100)
    },10000)
    return () => {
      console.log('清除事件');
      // eslint-disable-next-line no-unused-vars
      clearInterval(timer);
      body.onclick = null
    }
  }, [])

  // 初始化执行一次 依赖项变化时执行
  useEffect(() => {
    console.log('依赖count3变化时才执行')
  },[count3])

  //没依赖 组件刷新就执行
  useEffect(() => {
    console.log('没依赖时总执行')
  })

  return <>
    <h1>{count}</h1>
    <h2>{count2}</h2>
    <button onClick={() => { setCount3(count3 + 11) } }>count3+</button>
  </>;
};

export default Example1;
