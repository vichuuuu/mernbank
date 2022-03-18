import axios from 'axios'
import React, { useState } from 'react'
import './table.css'
// import Select from 'react-select/dist/declarations/src/Select'

function Table() {

    const [acno, setAcno] = useState({

        acno: ""


    })
    const [uname, setUname] = useState({

        uname: ""


    })

    const handleChange = e => {

        const { name, value } = e.target
        setAcno({
            ...acno,
            [name]: value
        })
    }
    const fetchData = async () => {
        axios.post('http://localhost:4000/search', acno)
            // .then((res)=>res.json())
            // .then(res => console.log(res))
            .then(data => display(data))
    }


    function display(res) {
        let user_name = res.data.uname;
        let account_number = res.data.acno;
        let account_balance = res.data.balance;
        let html_data = `

        <div class="card" style="width: 18rem;">

            <div class="card-body">
                <h5 class="card-title">${user_name}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">username:${user_name}</li>
                <li class="list-group-item">Account number:${account_number}</li>
                <li class="list-group-item">Balance:${account_balance}</li>
                
            </ul>
        </div>
        `
        document.querySelector("#result").innerHTML = html_data
    }

    const Changes = e => {

        const { } = e.target
        setUname({
            ... uname

        })
    }


    const viewData = async () => {

        axios.post('http://localhost:4000/view', acno)
            // .then((res)=>res.json())
            .then(res => console.log(res))
        // .then(data => display(data))

        axios.post('http://localhost:4000/view', uname)
            // .then((res)=>res.json())
            .then(res => console.log(res))
        // .then(data => display(data))


    }

    return (

        <>
            {console.log("dats", acno)}
            <h2>VIEW DETAILS</h2>

            <input type="Number" name="acno" value={acno.acno} placeholder='enter account number' onChange={handleChange} />
            <button onClick={fetchData}>search</button>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-lg-3 col-md-4 col-sm-12" id="result">

                </div>
                <div class="col-4"></div>
            </div> <br></br>

            <label for="views">view all details</label>
            {/* 
            <select name="list" id="list"> */}
            <select onChange={Changes}>
                <option value="accnum" >sort by acno</option>
                <option value="username"   >Sort by name </option>
            </select>
            <button type='submit' onClick={viewData}>view</button>
        </>

    )
}

export default Table