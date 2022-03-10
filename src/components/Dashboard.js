import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './loging.css'


function Dashboard() {

    const [user, setUser] = useState({

        acno: "",
        password: "",
        amount: 0
    })
    const handleChange = e => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const deposit = async (e) => {
        e.preventDefault()
        const acno = JSON.parse(localStorage.getItem("acno"))
        const password = JSON.parse(localStorage.getItem("password"))
        const tokens = (localStorage.getItem('token'))
        const amount = user.amount
        const datas = {
            acno, password, amount
        }
        if (user.acno == acno) {
            if (user.password == password) {
                axios.post("http://localhost:4000/deposit", datas, { headers: { 'x-access-token': `${tokens}` } })
                    .then(res => alert(res.data.message))
            } else {
                alert("password is not correct")
            }
        } else {
            alert("not  exist")
        }
        // if (datas) {
        //      axios.post("http://localhost:4000/deposit", datas, { headers: { 'x-access-token': `${tokens}` } })
        //         .then(res => alert(res.data.message))
        // }

    }





    return (
        <div className='login'>

            <h1>DEPOSIT</h1>
            <input type="text" name="acno" value={user.acno} placeholder='enter account number' onChange={handleChange} required></input>
            <input type="password" name="password" value={user.password} placeholder='enter password' onChange={handleChange} required></input>
            <input type="Number" name="amount" value={user.amount} placeholder='enter amount' onChange={handleChange} required></input>
            <div className='button' onClick={deposit}>Deposit</div>
        </div>
    )
}

export default Dashboard