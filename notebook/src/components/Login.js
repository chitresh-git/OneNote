import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alertcont from '../context/notes/Alertcont'

const Login = (props) => {
  // const host = "http://localhost:3005"
  const host = "https://one-note-zeta.vercel.app/"
  let navigate = useNavigate()

  const [cred, setCred] = useState({ email: "", password: "" })
  const [demo, setdemo] = useState({ warning: "", visibilty: "d-none" })

  const context = useContext(Alertcont)
  const { usealert } = context



  const handleClick = async (e) => {
    e.preventDefault(); // this will prevent the page from reloading

    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      mode: 'cors', // set mode to the cors otherwise request sents the bad request 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: cred.email, password: cred.password })
    });
    const json = await response.json()


    if (json.flag) {
      // eslint-disable-line react-hooks/exhaustive-deps  
      localStorage.setItem('token',json.authtoken)
      localStorage.setItem('name',json.name)
      localStorage.setItem('email',json.email)
      localStorage.setItem('password',json.password)
      localStorage.setItem('date',json.date)

     

      usealert("logged in")
      navigate("/dashboard") // this will redirect to the defualt page 
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
    <div className="container">
      <h2 className='my-3'>LOGIN</h2>
      <div className='text-white bg-dark p-3 rounded my-2'>

        <form onSubmit={handleClick}>
          <div className="form-group my-3 text-uppercase">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control my-3" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={cred.email} required />
          </div>
          <div className="form-group my-3 text-uppercase">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control my-3" name="password" id="exampleInputPassword1" placeholder="Password" onChange={onChange} value={cred.password} required />

            <label id="emailHelp" className={`form-text  text-capitalize text-danger ${demo.visibilty}`}>{demo.warning}</label>
          </div>

          <button type="submit" className="btn btn-secondary my-1">SUBMIT</button>
        </form>

      </div>
    </div>
  )
}

export default Login
