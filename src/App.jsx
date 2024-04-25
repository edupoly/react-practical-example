import { useEffect } from "react";
import { useState,useRef } from "react";


function App() {
  var [min,setMin] = useState(0)
  var [sec,setSec] = useState(0)
  var [startFlag,setStartFlag]=useState(false)
  var timerRef = useRef();
  
  function startTimer(){
    timerRef.current=setInterval(()=>{
      setSec((oldsec)=>{
        if(oldsec===59){
          setMin(oldmin=>{
            return oldmin+1
          })
          return 0
        }
        else{
          return oldsec+1
        }
      })
    },300)
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
    setMin(0);
    setSec(0)
  }
  return (
    <div className="w-50 text-center mx-auto m-5 border border-2 p-3">
      <h3>Timer</h3>
      <h1>{min}:{sec}</h1>
      <button onClick={()=>{startToggle()}}>{startFlag?'Pause':'Start'}</button>
      <button onClick={()=>{resetTimer()}}>Reset</button>
    </div>
  );
}

export default App;
