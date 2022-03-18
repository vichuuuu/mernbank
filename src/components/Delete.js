import React, { useState } from 'react'
import './delete.css'
import axios from 'axios'

function Delete() {


    const [user, setUser] = useState({

        acno: "",
        password: ""

    })
    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const deleteacc = async () => {
        const acno = JSON.parse(localStorage.getItem("acno"))
        const password = JSON.parse(localStorage.getItem("password"))
        const tokens = (localStorage.getItem('token'))
        const datas = {
            acno, password
        }
        if (user.acno == acno) {
            if (user.password == password) {
                axios.post("http://localhost:4000/deleteacc", datas, { headers: { 'x-access-token': `${tokens}` } })
                    .then(res => alert(res.data.message))

            }

            else {
                alert("password is not correct")
            }
        } else {
            alert("NO such account")
        }
    }
    return (

        <div className='login'>

            <h1>DELETE</h1>
            <input type="text" name="acno" value={user.acno} placeholder='enter account number' onChange={handleChange} required></input>
            <input type="password" name="password" value={user.password} placeholder='enter password' onChange={handleChange} required></input>

            <div className='button' onClick={deleteacc}>Delete your account</div>

        </div>
    )

}

export default Delete