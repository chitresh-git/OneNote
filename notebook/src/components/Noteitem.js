import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'

// component for showing each note inside the card 
const Noteitem = (props) => {
    const {note,updatenote}=props;
    const context = useContext(NoteContext)
    const {deletenote} = context
    const context2 = useContext(Alertcont)
    const {usealert} = context2

  return (
    <div className='col-md-4 my-3'>



      <div className="card" id='noteitem'>

  <div className="card-body" >
    <h5 id="notetitle" className="card-title">{note.title}</h5>        {/* title of our note  */}

    <p className="card-text">{note.description}</p>    {/* description of our note  */}

    <footer className="blockquote-footer">{note.tag}</footer>  {/* tag of our note  */}

            <hr />
    <i id="delete" className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id);{usealert("Note Deleted")}}}></i>   {/* delete icon  */}
    {/* the arrow function call the deletenote() method of notestate.js and note._id is passed as parameter */}
 
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}} ></i>    {/* edit icon */}

    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
</div>

  )
}

export default Noteitem