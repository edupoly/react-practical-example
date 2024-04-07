import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  var [rnum,setRnum] = useState();

  useRef()
    useEffect(()=>{
      setInterval(()=>{
        var n = Math.random();
        console.log(n)
        setRnum(n)
      },1000)
    },[])
  return (
    <div className='card'>
     <h1>Random Number:{rnum}</h1>
    </div>
  );
}
export default App;
