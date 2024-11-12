import React from 'react';
import Todo from './Todo'
function Todolist(){
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
            id:'t2',

        },
        {
            title:'purchase bike',
            status:false,
            id:'t3',
        },
    ]);
    var ob1 = React.useMemo(()=>{
        return  {
                    a:100,
                    b:'rakhi'
                }
    },[])
    var delTodo = React.useCallback(function(i){
        setTimeout(()=>{
            setTodos((prevTodos)=>{
                prevTodos.splice(i,1)
                return [...prevTodos]
            })
        },1000)
    },[])
    var addTodo = function(addTodo){
        var nt = document.getElementById("d1").value;
        setTodos([...todos,{title:nt,status:false}])
    }
    var toggleTodo = React.useCallback(function(i){
        setTodos((prevTodos)=>{
            console.log(prevTodos)
            prevTodos[i].status=!prevTodos[i].status
            return [...prevTodos]
        })
    },[])
    return (
        <div className="border border-2 border-danger ">
            <div className='d-flex justify-content-center p-5'>
                <input id='d1' type="text" className='w-50 mx-2 form-control' placeholder='enter new todo'/>
                <button onClick={()=>{addTodo()}} className="btn btn-success btn-sm">Add Todo</button>
            </div>
            <ul className="p-2">
                {
                    todos.map((t,i)=>{
                        return <Todo ob1={ob1} {...t} delTodo={delTodo} i={i} toggleTodo={toggleTodo} key={t.title}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist