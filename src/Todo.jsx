import React from 'react'

function Todo(props) {
    var [acn,setanc]=React.useState('entry')
    function delTodoFn(id){
        setanc('exit')
        setTimeout(()=>{
            props.deleteTodo(props.id)
        },1000)
    }
  return (
    <div className={acn}>
        <li className='p-2 m-2 bg-secondary text-light'>
            {props.title}
            <button className="btn btn-danger" onClick={()=>{delTodoFn(props.id)}}>Delete</button>
        </li>
    </div>
  )
}

export default Todo