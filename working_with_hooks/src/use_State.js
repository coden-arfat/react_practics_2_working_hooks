import React,{ useState } from 'react';
import './App.css';

function App() {
  let [color,setColor]=useState('red')
return(
  <div>
    <h1>
      hello react hook i will play with you 
    </h1>
    <h2>
      my fabourite color is {color}
    </h2>
  <button onClick={()=>setColor('green')}>click me</button>
  </div>
)

}

function App(){
  const [count,setCount]=useState(0)
  return(
    <div>
       <h1>this number is {count}</h1>
       <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}
export default App;
