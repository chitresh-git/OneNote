import React from 'react'
import './css/home.css'
import { Link } from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

// component for our home 

const Home = () => {
const [text]=useTypewriter({
words:['Create Your Note','Update Your Note','Delete Your Note','Do All In OneNote'],
loop:{}
});

  return ( 
    <>


<div className="homecontainer">

<div class="card homelogin text-white bg-dark" >

  <div class="card-body" id='signup'>
    <h5 class="card-title">Signup</h5>
    <p class="card-text">Register, By creating an account </p>
    <Link to="/signup" class="btn btn-secondary">CREATE</Link>
  </div>

<div className="divide"></div>

  <div class="card-body" id='login'>
    <h5 class="card-title">Login</h5>
    <p class="card-text">Already have an account ? Login to use</p>
    <Link to="/login" class="btn btn-secondary">LOGIN</Link>
</div>
</div>


</div>

 
    </>
  )
}

export default Home

