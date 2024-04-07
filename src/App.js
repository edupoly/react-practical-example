import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  var [count,setCount] = useState(0);

    useEffect(()=>{
      setInterval(()=>{
        setCount(count+1)
        console.log(count)
      },1000)
    },[])
  return (
    <div className='card text-center'>
     <h1>Count:{count}</h1>
    </div>
  );
}
export default App;
