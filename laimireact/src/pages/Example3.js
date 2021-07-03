import React, {useState, useEffect} from 'react';
const Example1 = () => {
  const [count, setCount] = useState(0);
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
    return () => {
    console.log('清除事件')
      body.onclick = null
    }
   }, [])
  return <>
    <h1>{count}</h1>
    
  </>;
};

export default Example1;
