// 总结：如果你在函数组件中定义了一个函数，而且不希望该函数在函数组件刷新的时候重复创建，而是希望该函数保存在内存中
import React, { useState, useCallback } from 'react';
const arr = []
const Example5 = () => {
  const [qty,changeQty] = useState(1);
  const [price,changePrice] = useState(998);
  // const fn = function(){
  //     console.log('click')
  // }
  // 用法1：不指定依赖
  // 每次刷新都返回一个新的函数（等效于以上用法）
  // const fn = useCallback(function(){
  //     console.log('click')
  // })

  // 用法2：指定依赖
  // 只有依赖发生改变时才返回新的函数
  const fn = useCallback(function(){
      console.log('click');

  },[price]);

  arr.push(fn);
  console.log('arr=',arr,arr[0] === arr[1])

  // 用法3：指定空依赖
  // 不会创建并返回新的函数（一般用户事件处理函数）
  const changeqty = useCallback(function(){
      console.log('qty=',qty)
      changeQty(qty+1)
  },[]);
  const changeprice = useCallback(function(){
      changePrice(price+price*0.2)
  },[price]);

  return (
      <div>
         <h4>useCallback</h4>
          <button onClick={fn}>点我</button>
          <button onClick={changeqty}>qty:{qty}</button>
          <button onClick={changeprice}>price:{price}</button>
      </div>
  )
};

export default Example5;



