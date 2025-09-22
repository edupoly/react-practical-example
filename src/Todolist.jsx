import React, { useEffect } from 'react'
import Todo from './Todo';

function Todolist() {
    var [newtask,setNewTask] = React.useState('')
    var [todos,setTodos] = React.useState([
        {
            title:'get car',
            id:'t1',
            status:false,
        },
        {
            title:'Pay bills',
            status:true,
            id:'t2',

        },
        {
            title:'pay fee',
            status:false,
            id:'t3',
        },
        {
            title:'goto gym',
            status:true,
            id:'t4',

        },
        {
            title:'purchase bike',
            status:false,
            id:'t5',
        },
    ]);
    function addTodo(){
        setTodos((prevTodos)=>{
            return [...prevTodos,{
                title:newtask,
                id:`t${todos.length+1}`,
                status:false,
            }]
        })
    }
    function deleteTodo(id){
        setTodos((prevTodos)=>{
            var temp = prevTodos.filter((todo)=>{
                if(todo.id!==id){
                    return true
                }
            })
            return temp
        })
    }
    // useEffect(()=>{
    //     console.log("Todolist mounted")
    // },[])
    // useEffect(()=>{
    //     console.log("rendered every time todolist changes")
    // })
  return (
    <div className='border border-3 border-success m-2 p-3'>
        <h2>Todolist</h2>
        <div className='d-flex px-5'>
            <input type="text" className='form-control border border-success' onChange={(e)=>{setNewTask(e.target.value)}}/>
            <button onClick={()=>{addTodo()}} className='btn btn-success'>Add Todo</button>
        </div>
        <ul style={{listStyle:'none'}}>
            {
                todos.map((todo)=>{
                    return <Todo {...todo} key={todo.title} deleteTodo={deleteTodo}></Todo>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist