import React, { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Alertcont from '../context/notes/Alertcont'



const Signup = () => {
    const host = "http://localhost:3000"
    let navigate = useNavigate()
    
    const [cred, setCred] = useState({ name: "", email: "", password: "" })
    const [demo, setdemo] = useState({ warning: "", visibilty: "d-none" })
    
    const context = useContext(Alertcont)
    const { usealert } = context
    
    const handleClick = async (e) => {
        e.preventDefault(); // this will prevent the page from reloading
        
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            mode: 'cors', // set mode to the cors otherwise request sents the bad request 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password })
        });
        const json = await response.json()
     
        if (json.flag) { // if flag is true then it will create a account
            localStorage.setItem('token',json.authtoken)
            localStorage.setItem('name',json.name)
            localStorage.setItem('email',json.email)
            localStorage.setItem('password',json.password)
            localStorage.setItem('date',json.date)

            usealert("Registered Successfully !")
            navigate("/")  // this will redirect to the defualt page 
        }
        else {
            console.log("not")
            setdemo({ warning: json.error, visibilty: "" })
        }
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
    }

    return (
        <div className="container p-2 my-3">
            <h2>CREATE ACCOUNT</h2>

            <div className='text-white bg-dark p-3 rounded my-2'>

                <form onSubmit={handleClick}>

                    <div className="form-group my-3 text-uppercase ">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control my-3" name="name" id="exampleInputPassword1" placeholder="Name" onChange={onChange} value={cred.name} minLength={2} required />
                    </div>

                    <div className="form-group my-3  text-uppercase">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control my-3" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={cred.email} required />
                        <small id="emailHelp" className="form-text text-light text-lowercase ">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group my-3 text-uppercase">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control my-3" name="password" id="exampleInputPassword1" placeholder="Password" onChange={onChange} value={cred.password} minLength={4} required />
                        <label id="emailHelp" className={`form-text text-capitalize text-danger ${demo.visibilty}`}>{demo.warning}</label>
                    </div>


                    <button type="submit" className="btn btn-secondary my-2">CREATE</button>
                </form>

            </div>
        </div>
    )
}

export default Signup
