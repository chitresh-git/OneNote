import './css/dashboard.css'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'
import { useContext, React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter';




const Dashboard = () => {

  let navigate = useNavigate()
  const context = useContext(NoteContext)     // context api recieving from notestate.js
  const { notes, fetchnote } = context
  useEffect(() => {
    if (localStorage.getItem('token')) {

      fetchnote()  // this will calls the fetchnote method of notestate.js 
    }
    else {
      navigate("/home")
    }

  }, []) // eslint-disable-line react-hooks/exhaustive-deps 

  let desc, ltitle, count, start
  if (notes.length > 0) {
    start = ""
    count = notes.length
    const lastnote = notes[notes.length - 1]
    ltitle = lastnote.title+" ,"
    desc = lastnote.description


  }
  else {
    count = "0"
    start = ""
    desc = "You don't have any Note to show , Please Creat a Note"
    ltitle = ""
  }
  const [text] = useTypewriter({
    words: [desc],
    loop: {}
  });



  return (
    <div>
      <dash>
        <h1 className="greeting">
          WELCOME
        </h1>
        <h2 className='lastnote '>
          {start} &nbsp;
          <div id="lasttitle">
            {ltitle} 
          <br />
          <p className='mt-1' id="typednote">
            {text}
            <Cursor/>
          </p>
          </div>


        </h2>
      </dash>


      <div class="card dashboard bg-dark text-white " >

        <div class="card-body" id='shownote'>
          <h5 class="card-title">View Notes</h5>
          <p class="card-text">Your Total Saved Notes Are &nbsp;{count}</p>
          <Link to="/shownote" class="btn btn-secondary">VIEW</Link>
        </div>

        <div className="divide"></div>

        <div class="card-body" id='addnote'>
          <h5 class="card-title">Add Note</h5>
          <p class="card-text">Create A New Note</p>
          <Link to="/addnote" class="btn btn-secondary">ADD</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
