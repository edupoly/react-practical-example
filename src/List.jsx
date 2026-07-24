import React,{useState} from 'react'

function List() {
    var [students,setStudents] = useState([
        {
            name:'Praveen',
            age:24,
            gender:'male',
            id:"1340"
        },
        {
            name:'Komali',
            age:34,
            gender:'female',
            id:"1341"
        },
        {
            name:'eshwar',
            age:21,
            gender:'male',
            id:"1345"
        }
    ]);
    var [newstd,setnewstd] = useState({
        name:'',
        age:0,
        gender:'',
        id
    });
    return (
    <div className='p-5'>
        <h1>Students List</h1>
        <label htmlFor="">Enter The name: </label>
        <input type="text" onChange={(ev)=>{setnewstd((cv)=>{return {...cv,name:ev.target.value}})}}/>
        <br />
        <label htmlFor="">Select The Gender:</label>
        <br />
        <input type="radio" name="gen" value="male" onChange={(ev)=>{setnewstd((cv)=>{return {...cv,gender:ev.target.value}})}}/>:Male
        <input type="radio" name="gen" value="female" onChange={(ev)=>{setnewstd((cv)=>{return {...cv,gender:ev.target.value}})}}/>:Female
        <input type="radio" name="gen" value="others" onChange={(ev)=>{setnewstd((cv)=>{return {...cv,gender:ev.target.value}})}}/>:Others
        <br />
        <label htmlFor="">Enter The Age:</label>
        <input type="text" onChange={(ev)=>{setnewstd((cv)=>{return {...cv,age:ev.target.value}})}}/>
        <br />
        <button onClick={()=>{setStudents((cv)=>{
            return [...cv,{...newstd}];
        })}}>Add Student</button>
        <table className='table table-bordered table-hover mt-3'>
            <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Id</th>
                    </tr>
            {students.map((student,i) => {
                return <tr key={student}>
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.age}</td>
                        <td>{student.id}</td>
                    </tr>
            })}
        </table>
    </div>
  )
}

export default List
// 