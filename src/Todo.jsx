import React, { useEffect } from 'react'

function Todo(props) {
    var [acn,setanc]=React.useState('entry')
    function delTodoFn(id){
        setanc('exit')
        setTimeout(()=>{
            props.deleteTodo(props.id)
        },1000)
    }
   useEffect(()=>{
    console.log("first render",props.title)
    return ()=>{
        console.log("Remove inappudu call avvu")
    }
   },[])
   
  return (
    <div className={acn} style={{border:'3px solid red',margin:'5px'}}>
        <li className='p-2 m-2 bg-secondary text-light'>
            {props.title}
            <button className="btn btn-danger" onClick={()=>{delTodoFn(props.id)}}>Delete</button>
        </li>
    </div>
  )
}

export default Todo