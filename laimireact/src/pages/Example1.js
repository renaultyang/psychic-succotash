import React, {useState} from 'react';
const Example1 = () => {
  let divStyle = {width: 100, height:100 ,backgroundColor: '#000' }
  const [count, setCount] = useState(0);
  const [Style, setStyle] = useState(divStyle);
  const changeColor = () => {
    let color = '#' 
    for (let i = 6; i > 0; i=i-1) {
      color = color + parseInt(Math.random()*16).toString(16)
    }
    return { ...divStyle ,backgroundColor: color }
  }
  const changeWH = () => {
    let width = parseInt(Math.random()*300) + 100
    return { ...divStyle ,height: width, width }
  }
  return <>
    <h1>{count}</h1>
    <div style={ Style }>背景色</div>
    <button onClick={() => { setCount(count + 2 ) } }>+2</button>
    <button onClick={() => { setStyle(changeColor()) } }>改变背景色</button>
    <button onClick={() => { setStyle(changeWH()) } }>改宽高</button>
  </>;
};

export default Example1;
