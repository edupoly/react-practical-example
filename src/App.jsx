
import { useEffect,useRef } from "react";
import Address from "./Address";

function App() {
  var ref1=useRef();
  var ref2=useRef();
  var ref3=useRef();
  useEffect(()=>{
    ref1.current.focus();
  },[])
  function checkEnter(e){
    if(e.key==="Enter"){
      ref2.current.focus();
    }
  }
  function checkEnter2(e){
    if(e.key==="Enter"){
      ref3.current.focus();
    }
  }
  return (
    <div className="m-3 border border-2 p-3 bg-white rounded" style={{height:"100vh"}}>
      <label htmlFor="">Firstname</label>
      <input type="text" ref={ref1} onKeyUp={(ev)=>{checkEnter(ev)}}/>
      <br />
      <br />
      <label htmlFor="">Lastname</label>
      <input type="text" ref={ref2} onKeyUp={(ev)=>{checkEnter2(ev)}} />
      <Address ref={ref3}></Address>
    </div>
  );
}

export default App;
