import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const[usevar,setUse]=useState(0);
  function HandleValue(event){
    console.log(event.target.value);
    let val=event.target.value;
    if(val==="Increment"){
      setUse((prev)=>{return prev+1})
    }
    else{
      setUse((prev)=>{return prev-1})
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Counter App</h1>
        <div>Count: {usevar}</div>
        <button value="Increment" onClick={HandleValue}>Increment</button>
        <button value="Decrement" onClick={HandleValue}>Decrement</button>
</div>
    </div>
  );
}

export default App;
