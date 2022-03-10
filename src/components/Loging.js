import React,{useState} from 'react'
import './loging.css'
import axios from 'axios'


function Loging() {
    const [user, setUser] = useState({
        acno: "",
        password: "",
        
    })

    
    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


// const login=()=>{
  
//     axios.post("http://localhost:4000/login",user)
//       .then(res=>alert(res.data.message))
//   //  .then(res=>console.log(res))
//   localStorage.setItem("acno",JSON.stringify(user.acno))
//   localStorage.setItem("password",JSON.stringify(user.password))
//   localStorage.setItem("token",token)
// }

const login=async e=>{
  const {acno,password}=user
  e.preventDefault()
  if(acno && password){
      const res=await axios.post("http://localhost:4000/login",user)
      alert(res.data.message);
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("acno",JSON.stringify(user.acno))
      localStorage.setItem("password",JSON.stringify(user.password))
  }
  else{
      alert("invalid form")
  }

  
}

  return (
    <div className='login'>
          {console.log("USER", user)}
            <h1>LOGIN</h1>
            <input type="text" name="acno" value={user.acno} placeholder='enter account number' onChange={handleChange} required></input> <br></br>
            <input type="password" name="password" value={user.password} placeholder='enter password' onChange={handleChange} required></input> <br></br>
            <div className='button' onClick={login} >Login</div>

            <a href="register">New user?</a>

    </div>
  )
}

export default Loging