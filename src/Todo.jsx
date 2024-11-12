import React from "react"

var Todo=React.memo(function(props){
    console.log(props.title+" Todo rendered")
    var [animicn,setanimicn]=React.useState("entry")
    React.useEffect(()=>{
        console.log('props.i',props.i)
    },[props.i])
    function deleteTodoFn(i){
        setanimicn('exit')
        props.delTodo(i)
    }
    return <li className={"border border-1 rounded bg-light list-unstyled m-2 p-1 "+animicn}>
        <span className={props.status?'text-decoration-line-through':''}>{props.title}</span>
        <button className="btn btn-danger m-1" onClick={()=>{deleteTodoFn(props.i)}}>Delete</button>
        <button className="btn btn-warning m-1" onClick={()=>{props.toggleTodo(props.i)}}>{props.status?'Undo':'Done'}</button>
        </li>
})
export default Todo;