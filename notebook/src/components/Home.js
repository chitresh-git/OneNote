import React from 'react'



const Home = () => {


  return (
    <div>
      <div className="container my-2">

        <h1>add notes</h1>
        <form>
          <div class="form-group my-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>


      </div>
    </div>
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
