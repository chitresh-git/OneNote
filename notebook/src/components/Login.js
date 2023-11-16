import React, { useState } from 'react'

const Login = (props) => {
    const host="http://localhost:3000"

    const [cred,setCred] =useState({email:"",password:""})

    const handleClick = async (e) => {   
        e.preventDefault(); // this will prevent the page from reloading
        console.log(cred)
      
        const response= await fetch(`${host}/api/auth/login`,{
            method:'POST',
            mode: 'cors', // set mode to the cors otherwise request sents the bad request 
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({email:cred.email,password:cred.password})
          });
          const json= await response.json()
          console.log(json)
    }

    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
    }

  return (
    <div>
      
      <form onSubmit={handleClick}>
  <div className="form-group my-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control my-3" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value={cred.email}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control my-3" name="password" id="exampleInputPassword1" placeholder="Password" onChange={onChange} value={cred.password}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Login
