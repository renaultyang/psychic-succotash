import { useContext } from 'react';
import { Store } from './store'
function App(prop) {
  const { state, dispatch } =  useContext(Store)
  console.log(prop)
  console.log(state, dispatch)
  return (
    <div className="App">
      <h1>{state}</h1>
      <h2>{ '合并分支' }</h2>
      <button onClick={()=> dispatch({type:'plus',})}>+1</button>
      <button onClick={()=> dispatch({type:'decline'})}>-1</button>
    </div>
  );
}

export default App;
