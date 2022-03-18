import React ,{useState} from 'react'
import './loging.css'
 import axios from 'axios'
 import {useNavigate} from 'react-router-dom'

function Registration() {
    const [user,setUser]=useState({
        uname:"",
        acno:"",
        password:""
    })

    const handleChange=e=>{
    
        const {name,value} =e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    let navigate=useNavigate()

    const register=()=>{
        const {uname,acno,password}=user
        if(uname&&acno&&password){
            axios.post("http://localhost:4000/register",user)
            .then(res=>alert(res.data.message))
            navigate("/")
            // alert("posted")
        }else{
            alert("invalid form")
        }
        
        
    }

   
  return (
    <div className='login'>
        {console.log("user",user)}
        <h1>REGISTER</h1>
    <input type="text" name="uname"  value={user.uname} placeholder='enter your name' onChange={handleChange} required></input> 
    <input type="text" name="acno"  value={user.acno}  placeholder='enter account number'onChange={handleChange} required></input> 
    <input type="password" name="password"  value={user.password} placeholder='enter password' onChange={handleChange}required></input> 
    <div className='button' onClick={register}>Register</div>

    </div>
  )
}

export default Registration