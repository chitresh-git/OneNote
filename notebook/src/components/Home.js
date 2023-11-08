import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'


const Home = () => {

const a=useContext(NoteContext)
  return (
    <div>
      <h1>this is home</h1>
      <h1>the name of our client is {a.name} and his age is {a.age}</h1> {/* accessing the mystate values using context  */}
     
      <h2>the name of cm is {a.mpstate.name} and his tenure is {a.mpstate.tenure}</h2>       {/* accessing the mpstate state  */}

      <h2>after some time {a.update("kamalnath","2")} </h2>      {/* calling the update method which will change the value of mpstate's values using context  */}

    </div>
  )
}

export default Home
