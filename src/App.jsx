import { useState } from "react";
function App() {
  var [dob,setdob]=useState()
  var [age,setage]=useState(0)
  function totalAge(){
    var ctime = (new Date()).getTime();
    var btime = (new Date(dob)).getTime();
    var atime = ctime-btime;
    setage(()=>atime/(1000*60*60*24*365))
  }
  return (
    <div className="w-50 mx-auto m-5 border border-2 p-3 bg-white rounded-4">
      <h1 className=" text-center">Tip Calculator</h1>
      <h3>Whats your Date Of Birth?</h3>
      <div class="form-floating mb-3">
        <input type="date" onChange={(e)=>{setdob(e.target.value)}} class="form-control" id="dob" placeholder="Rs.1000"/>
        <label for="dob">Date of Birth</label>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button" onClick={()=>{totalAge()}}>CALCULATE My AGE</button>
      </div>
      <div className="my-4"><span className="blockquote">Age: </span><b class="h2">{age}</b></div>
    </div>
  );
}

export default App;
