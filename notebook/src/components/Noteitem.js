import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

// component for showing each note inside the card 
const Noteitem = (props) => {
    const {note,updatenote}=props;
    const context = useContext(NoteContext)
    const {deletenote} = context

  return (
    <div className='col-md-4 my-3'>



      <div class="card" id='noteitem'>

  <div class="card-body" >
    <h5 id="notetitle" class="card-title">{note.title}</h5>        {/* title of our note  */}

    <p class="card-text">{note.description}</p>    {/* description of our note  */}

    <footer class="blockquote-footer">{note.tag}</footer>  {/* tag of our note  */}

            <hr />
    <i id="delete" class="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}}></i>   {/* delete icon  */}
    {/* the arrow function call the deletenote() method of notestate.js and note._id is passed as parameter */}
 
    <i class="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}} ></i>    {/* edit icon */}

    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
</div>

  )
}

export default Noteitem
