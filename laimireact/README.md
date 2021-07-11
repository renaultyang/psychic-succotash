6.25 学习打卡
6.26 学习打卡
6.27  知道canvans 重要的Api, getContext, fillStyle, fillRect(x,y,width,height)
> 知道Hook的使用范围
1. 只能在React函数组件中使用Hook 
2. 只能在函数组件最外层使用，别在条件语句或循环语句或子函数中使用 
> 解释: 为什么每次更新的时候都要运行 Effect
容易忘记这步 https://react.docschina.org/docs/hooks-effect.html
 // 取消订阅之前的 friend.id
 ```js
    ChatAPI.unsubscribeFromFriendStatus(
      prevProps.friend.id,
      this.handleStatusChange
    );
```

hook 
useContext 和 useReducer 配合模拟redux, 
注意reducer第一个参数是state,第二参数action是一个对象且有type属性
注意要用conText，不管是提供还是获取都要先引入

useMemo的目的是避免一部分代码反复执行，相关依赖不变不需要执行，代替shouldComponentUpdate
useCallback的目的是避免函数重复定义，相关依赖不变不需要重复定义
useEffect 代替 componentDidMount componentDidUpdate componentDidUnmount