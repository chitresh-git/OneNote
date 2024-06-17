
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'
import './css/noteitem.css'
import Downloadcontext from '../context/notes/Downloadcontext'
import { useNavigate } from 'react-router-dom'


// component for showing each note inside the card 
const Noteitem = (props) => {
  const { note, updatenote } = props;

  const context = useContext(NoteContext)
  const { deletenote,addnote } = context

  const context2 = useContext(Alertcont)
  const { usealert } = context2

  const context3=useContext(Downloadcontext)
  const {downloadTextFile,handleCopyClick,handleExpand}=context3

  let navigate=useNavigate()

  const createdummy=(title,description,tag)=>{
      addnote(title,description,tag)
      usealert("clone created")
  }

  const expand=(title,desc,tag)=>{
          navigate("/expandnote")
         handleExpand(title,desc,tag)
  }

  const formattedDate = new Date(note.Date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: '2-digit'
});

const formattedTime = new Date(note.Date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
});


  return (
    <>
    <div className='col-md-4 my-3 '>



      <div className="card text-white " id='noteitem' onClick={()=>{expand(note.title,note.description,note.tag)}}>

        <div className="card-body" >
          <h5 id="notetitle" className="card-title">{note.title}</h5>        {/* title of our note  */}

          <i id="icon" className="fa-sharp fa-solid fa-trash mx-3" onMouseOver={()=>{usealert("delete your note")}} onClick={() => { deletenote(note._id);  usealert("Note Deleted")  }}>
           
            </i>  


          {/* the arrow function call the deletenote() method of notestate.js and note._id is passed as parameter */}

          <i id="icon" className="fa-solid fa-pen-to-square mx-3 delete-icon" onMouseOver={()=>{usealert("edit your note")}} onClick={() => {  updatenote(note) }} ></i>    {/* edit icon */}

          <i id="icon" className="fa-solid fa-download mx-3 delete-icon" onMouseOver={()=>{usealert("download your note")}} onClick={() => {  downloadTextFile(note.title,note.description) }} ></i>

          <i id="icon" className="fa-solid fa-copy mx-3 delete-icon" onMouseOver={()=>{usealert("copy your note")}} onClick={() => {  handleCopyClick(note.description) }} ></i>

          <i id="icon" class="fa-regular fa-clone mx-3" onMouseOver={()=>{usealert("create clone of this note")}} onClick={()=>{createdummy(note.title,note.description,note.tag)}}></i>

          <i id="icon" class="fa-solid fa-up-right-and-down-left-from-center mx-3" onMouseOver={()=>{usealert("expand this note")}} onClick={()=>{expand(note.title,note.description,note.tag)}}></i>

          <i id="icon" class="fa-solid fa-plus mx-3" onMouseOver={()=>{usealert("add a note")}} onClick={()=>{navigate("/addnote")}}></i>

          <hr />
          <tag className="">- {note.tag}</tag>  {/* tag of our note  */}
          <p className="card-text">{note.description}</p>    {/* description of our note  */}
        
        <hr />
          <p className="card-text">{formattedDate} at {formattedTime}</p>

    
        </div>
      </div>
    </div>

  

    </>

  )
}

export default Noteitem