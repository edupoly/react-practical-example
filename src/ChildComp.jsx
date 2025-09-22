import React, { useEffect } from 'react'

function ChildComp() {
    useEffect(()=>{
        console.log("child component rendered")
    })
  return (
    <div className="border border-5 border-primary m-2 p-3">
        <h1>ChildComp</h1>
    </div>
  )
}

export default React.memo(ChildComp)