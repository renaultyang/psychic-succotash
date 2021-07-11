import React, { useState, useRef, useEffect } from 'react';



const Example4 = () => {
  const input = useRef(null)
  const [inputValue, setInputValue] = useState(0)
  useEffect(() => {
    input.current.onblur = function () {
      debugger
      setInputValue(inputValue + 1)
    }
    return () => {
      input.current.onblur = null
    }
  })
  const Handler = (e) => {
    console.log('e',e.target.value)
    console.log('input', input.current)
    setInputValue(e.target.value)
  }
  return <>
    <input ref={input}  onChange={(e) => Handler(e)} value={ inputValue } />
  </>;
};

export default Example4;



