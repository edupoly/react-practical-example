import React from 'react'
import { v4 as uuidv4 } from 'uuid';
function Todolist() {
  const [todos,setTodos] = React.useState([])
  const [newtodo,setNewtodo] = React.useState("")
  function addTodo(){
    const todo={
        title:newtodo,
        id:uuidv4(),
        status:false
    }
    setTodos([...todos,todo])
  }
  return (
    <div className='container m-2 p-2 border border-dark'>
        <h1>Todolist</h1>
        <input type="text" onChange={(ev)=>{setNewtodo(ev.target.value)}}/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
        <ul>
            {
                todos.map((todo)=>{
                    return(
                        <li key={todo.id}>
                        <b>{todo.title}</b>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Todolist