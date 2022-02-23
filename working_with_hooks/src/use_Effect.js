import React,{ useState ,useEffect} from 'react';
import './App.css';


function App(){
  const [count,setCount]=useState(0)
  const [color,setColor]=useState('red')
  
  useEffect(()=>{
    setTimeout(()=>{
      
        setCount((count)=>count+1)
      
    })
  },[color])

  return(
    <div>
      <h1>
      the number is {count}
      <br/>
      the color {color}
    </h1>
   <button onClick={()=>{
     return setColor((color)=>color='green')}
     
     }>
       click me
   </button>
    </div>
    
  )
}



export default App;
