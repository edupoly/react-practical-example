import { useState } from "react";


function App() {
  var [billamount,setbillamount]=useState(0)
  var [tip,settip]=useState(0)
  var [total,settotal]=useState(0)
  function totalBill(){
    console.log("HI")
    settotal(()=>{
      return billamount+(billamount*tip/100)
    })
  }
  return (
    <div className="w-50 mx-auto m-5 border border-2 p-3 bg-white rounded-4">
      <h1 className=" text-center">Tip Calculator</h1>
      <h3>Whats your Bill!??</h3>
      <div class="form-floating mb-3">
        <input type="text" onChange={(e)=>{setbillamount(+e.target.value)}} class="form-control" id="billamount" placeholder="Rs.1000"/>
        <label for="billamount">Bill Amount</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" onChange={(e)=>{settip(+e.target.value)}} class="form-control" id="tippercentage" placeholder="10%"/>
        <label for="tippercentage">Tip Percentage</label>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button" onClick={()=>{totalBill()}}>CALCULATE TOTAL BILL</button>
      </div>
      <div className="my-4"><span className="blockquote">Total: </span><b class="h2">Rs.{total}</b></div>
    </div>
  );
}

export default App;
