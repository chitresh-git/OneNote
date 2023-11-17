import React, { useEffect } from 'react'
import Note from './Note'
import '../index.css'
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
<section>
  <h1 id='titlename'>
    OneNote
  </h1>
  <h1 id='subtype' className='m-1'> You Can &nbsp;

<span id='type'>
  {text}
<Cursor/>
</span>
  </h1>

</section>


<div class="card cardlogin bg-dark text-white " >

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



 
    </>
  )
}

export default Home

/* 
example to use context api -
     <h1>this is home</h1>
      <h1>the name of our client is {a.name} and his age is {a.age}</h1> {/* accessing the mystate values using context  }
     
      <h2>the name of cm is {a.mpstate.name} and his tenure is {a.mpstate.tenure}</h2>       {/* accessing the mpstate state  }

      <h2>after some time {a.update("kamalnath","2")} </h2>      {/* calling the update method which will change the value of mpstate's values using context  }
 */
