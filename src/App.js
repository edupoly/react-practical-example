import { useState,useMemo, useCallback } from "react";
import ChildComp from "./ChildComp";
function App() {
  let [a,setA] = useState(23)
  const abc=useCallback(()=>{
    return function(){
    console.log("function called")
  }
  },[])
  return (
    <div className="border border-5 border-success m-2 p-3">
      <h1>Parent Component:{a}</h1>
      <button onClick={()=>{setA(a+48)}}>Change A</button>
      <ChildComp x={abc}></ChildComp>
    </div>
  );
}

export default App;
