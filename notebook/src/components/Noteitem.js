
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'
import './css/noteitem.css'
import Downloadcontext from '../context/notes/Downloadcontext'

// component for showing each note inside the card 
const Noteitem = (props) => {
  const { note, updatenote } = props;
  const context = useContext(NoteContext)
  const { deletenote } = context
  const context2 = useContext(Alertcont)
  const { usealert } = context2

  const context3=useContext(Downloadcontext)
  const {downloadTextFile,handleCopyClick}=context3


  return (
    <>
    <div className='col-md-4 my-3 '>



      <div className="card text-white " id='noteitem'>

        <div className="card-body" >
          <h5 id="notetitle" className="card-title">{note.title}</h5>        {/* title of our note  */}

          <i id="delete" className="fa-sharp fa-solid fa-trash mx-3" onMouseOver={()=>{usealert("delete your note")}} onClick={() => { deletenote(note._id);  usealert("Note Deleted")  }}>
           
            </i>  


          {/* the arrow function call the deletenote() method of notestate.js and note._id is passed as parameter */}

          <i id="edit" className="fa-solid fa-pen-to-square mx-3 delete-icon" onMouseOver={()=>{usealert("edit your note")}} onClick={() => {  updatenote(note) }} ></i>    {/* edit icon */}

          <i id="edit" className="fa-solid fa-download mx-3 delete-icon" onMouseOver={()=>{usealert("download your note")}} onClick={() => {  downloadTextFile(note.title,note.description) }} ></i>

          <i id="edit" className="fa-solid fa-copy mx-3 delete-icon" onMouseOver={()=>{usealert("copy your note")}} onClick={() => {  handleCopyClick(note.description) }} ></i>


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