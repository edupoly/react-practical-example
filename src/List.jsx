import React from 'react'

function List({todos,filterStatus,handleDrop,handleDragStart}) {
  return (
    <div>
        <h4 className='text-center'>{filterStatus.toUpperCase()}</h4>
        <ul className='list-group' style={{listStyle:'none'}} onDragOver={(e)=>{e.preventDefault()}} onDrop={(e)=>{handleDrop(e)}}>
            {
                todos.filter(todo=>todo.status==filterStatus).map((todo)=>{
                    return <li className='list-item p-2 m-2 bg-secondary' id={todo.id} draggable="true" onDragStart={(event)=>{handleDragStart(event)}}>{todo.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default List