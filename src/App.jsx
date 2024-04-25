import { useEffect } from "react";
import { useState,useRef } from "react";


function App() {
  var [min,setMin] = useState(5)
  var [sec,setSec] = useState(0)
  var [startFlag,setStartFlag]=useState(false)
  var timerRef = useRef();
  
  function startTimer(){
    timerRef.current=setInterval(()=>{
      setSec((oldsec)=>{
        if(oldsec===0){
          setMin(oldmin=>{
            return oldmin-1
          })
          return 59
        }
        else{
          return oldsec-1
        }
      })
    },100)
  }
  useEffect(()=>{
    if(startFlag){
      startTimer()
    }
    else{
      clearInterval(timerRef.current)
    }
  },[startFlag])
  useEffect(()=>{
    if(min===0 && sec===0){
      clearInterval(timerRef.current)
    }
  },[min,sec])
  function startToggle(){
    setStartFlag(f=>!f)
  }
  function resetTimer(){
    clearInterval(timerRef.current)
    setStartFlag(false)
    setMin(5);
    setSec(0)
  }
  return (
    <div>
      <h3>Timer</h3>
      <h1>{min}:{sec}</h1>
      <button onClick={()=>{startToggle()}}>{startFlag?'pause':'start'}</button>
      <button onClick={()=>{resetTimer()}}>Reset</button>
    </div>
  );
}

export default App;
