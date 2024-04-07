import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  var [count,setCount] = useState(0);
  var cRef = useRef();
    useEffect(()=>{
      cRef.current = setInterval(()=>{
        setCount((ov)=>{return ov+1})
        console.log(count)
        
      },1000)
    },[])
    useEffect(()=>{
      if(count==5){
          clearInterval(cRef.current)
        }
    },[count])
  return (
    <div className='card text-center'>
     <h1>Count:{count}</h1>
    </div>
  );
}
export default App;
