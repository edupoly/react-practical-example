import React from 'react'
import useCounter from './useCounter'

function Counter() {
    var [count,incCount,decCount]=useCounter()
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={incCount}>Increment</button>
        <button onClick={decCount}>Decrement</button>
    </div>
  )
}

export default Counter