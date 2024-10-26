import React, { useState } from 'react'
import List from './List';

function Todolist() {
    var [todos,setTodos]=useState( [
          {
            "title": "Buy groceries",
            "status": "pending",
            "id":1
          },
          {
            "title": "Clean the kitchen",
            "status": "doing",
            "id":2
          },
          {
            "title": "Write project report",
            "status": "pending",
            "id":3
          },
          {
            "title": "Respond to emails",
            "status": "done",
            "id":4
          },
          {
            "title": "Exercise",
            "status": "doing",
            "id":5
          },
          {
            "title": "Schedule doctor appointment",
            "status": "pending",
            "id":6
          },
          {
            "title": "Read 20 pages of a book",
            "status": "doing",
            "id":7
          },
          {
            "title": "Prepare for team meeting",
            "status": "done",
            "id":8
          },
          {
            "title": "Organize desk",
            "status": "pending",
            "id":9
          },
          {
            "title": "Plan weekend trip",
            "status": "doing",
            "id":10
          }
        ])
        function handleDragStart(ev){
            ev.dataTransfer.setData('id',ev.target.id)
        }
        function handleDrop(event){
            var id = event.dataTransfer.getData('id');
            var el = document.getElementById(id);
            // console.log(el)
            console.log(el.innerHTML)
            console.log(event.target.innerHTML)
            if(el.innerHTML!==event.target.innerHTML){
                el.ondragstart = handleDragStart
                if(event.target.tagName=='LI'){
                    event.target.parentElement.appendChild(el)
                }
                else{
                    event.target.appendChild(el)
                }
            }
            
            
        }
  return (
    <div>
        <h2>Todolist</h2>
        <div className='d-flex p-2 m-2'>
            <div id='pending' className='w-25 border border-2 rounded p-2 m-2 bg-danger text-light h-100'>
                <List filterStatus="pending" todos={todos} handleDragStart={handleDragStart} handleDrop={handleDrop}></List>
            </div>
            <div id='doing' className='w-25 border border-2 rounded p-2 m-2 bg-primary text-light h-100'>
                <List filterStatus="doing" todos={todos} handleDragStart={handleDragStart} handleDrop={handleDrop}></List>
            </div>
            <div id='done' className='w-25 border border-2 rounded p-2 m-2 bg-success text-light h-100'>
                <List filterStatus="done" todos={todos} handleDragStart={handleDragStart} handleDrop={handleDrop}></List>
            </div>
        </div>
    </div>
  )
}

export default Todolist