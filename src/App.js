import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMemo } from 'react';
import Hello from './hello';
import Hai from './Hai';

function App() {
  const [count,setCount] = useState(0)
  const [val,setVal] = useState(0)
  const [newVal,setNewVal] = useState(0)
  const products=["hello","world","king"]  

  const hello=(newVal)=>{
    console.log("Hello Called!")
    for(let i=0;i<100000000;i++){
      newVal=newVal+i;
    }
    return newVal;
  }

  const helloMemo = useMemo(()=>hello(count),[count])

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <h2>Value: {val}</h2>
      <h2>Hello: {helloMemo}</h2>
      <button onClick={()=>setCount(count+1)}>Count Increment</button>
      <button onClick={()=>setVal(val+1)}>Val Increment</button>

      <Hello val={val}  />
      {newVal}
      <Hai newVal={newVal} setNewVal={setNewVal} />
    </div>
  );
}

export default App;
