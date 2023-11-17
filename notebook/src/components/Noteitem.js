import React, { useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'
import './css/noteitem.css'

// component for showing each note inside the card 
const Noteitem = (props) => {
  const { note, updatenote } = props;
  const context = useContext(NoteContext)
  const { deletenote } = context
  const context2 = useContext(Alertcont)
  const { usealert } = context2
  const ref=useRef(null)
 


  return (
    <>
    <div className='col-md-4 my-3 '>



      <div className="card text-white bg-dark" id='noteitem'>

        <div className="card-body" >
          <h5 id="notetitle" className="card-title">{note.title}</h5>        {/* title of our note  */}

          <i id="delete" className="fa-sharp fa-solid fa-trash mx-2" onClick={() => { deletenote(note._id); { usealert("Note Deleted") } }}></i>  


          {/* the arrow function call the deletenote() method of notestate.js and note._id is passed as parameter */}

          <i id="edit" className="fa-solid fa-pen-to-square mx-2" onClick={() => {  updatenote(note) }} ></i>    {/* edit icon */}

          <hr />
          <tag className="">- {note.tag}</tag>  {/* tag of our note  */}
          <p className="card-text">{note.description}</p>    {/* description of our note  */}
        
        <hr />
          <p className="card-text">Time-{note.Date}</p>    {/* description of our note  */}

       


          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>

  

    </>

  )
}

export default Noteitem