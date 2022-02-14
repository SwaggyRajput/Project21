import {React,useState} from 'react'
import ReactDOM  from 'react-dom'
const App=()=>{
    const [Student,setStudent]=useState({
        name:"",
        clas:"",
        branch:""
    })
    let name,value;
    const changeHandle=(event)=>{
        name=event.target.name;
        value=event.target.value; 
        setStudent({...Student,[name]:value})
    }
    const postData=async(e)=>{
        e.preventDefault()
const {name,clas,branch} = Student;
const res=await fetch("http://localhost:7000",{
  method:"post",
  headers:{
    "Accept":"application/json",
  "Content-type":"application/json"
  },
 
  body:JSON.stringify({
    name,clas,branch
  })
})
const data = await res.json();
console.log(data)

    }
    
    return(
        
        <>
<form method='post' action='http://localhost:7000'>
<ul type='none'>
  <li>Name: <input type='text' name='name' onChange={changeHandle} value={Student.name}/></li> 
  <li>Clas: <input type='text' name='clas' onChange={changeHandle} value={Student.clas}/></li> 
  <li>Branch: <input type='text' name='branch' onChange={changeHandle} value={Student.branch}/></li> 
  <li><input type="submit" onClick={postData}/></li>
  </ul>
</form>








        </>
    )
}
export default App;