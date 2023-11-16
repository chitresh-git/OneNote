import React, { useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

// component htmlFor adding new note in our database 

const Addnote = () => {
  const context = useContext(NoteContext) // context api
  const { addnote } = context              // exracting the value of context api which contains state or method 

  const [note, setNote] = useState({ title: "", description: "", tag: "" }) // state htmlFor new note 

  const handleClick = (e) => {
    e.preventDefault(); // this will prevent the page from reloading
    addnote(note.title, note.description, note.tag) // this call the addnote method of notestate.js
    setNote({ title: "", description: "", tag: "" }) // empty the input fields as soon as client submits its details 
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
    //and also update the note state 
  }
  return (
    <div>
      <div className="container my-2">

        <h1>add notes</h1>
        <form>
          <div className="form-group my-4">
            <label htmlFor="title">TITLE</label>
            <input type="text" className="form-control my-1" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter title" value={note.title}minLength={5} required/>

          </div>
          <div className="form-group my-4">
            <label htmlFor="description">DESCRIPTION</label>
            <input type="text" className="form-control my-1" id="description" name='description' onChange={onChange} placeholder="Enter description"  value={note.description} minLength={5} required/>
          </div>
          <div className="form-group my-4">
            <label htmlFor="tag">TAG</label>
            <input type="text" className="form-control my-1" id="tag" name='tag' onChange={onChange} placeholder="Enter tag" value={note.tag}  minLength={5} required/>
          </div>


          <button disabled={note.title.length<5 || note.description.length<5}type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
          {/* if lenght of title or description is lesst than 5 then we will disabled the submit button */}
        </form>


      </div>
    </div>
  )
}

export default Addnote
