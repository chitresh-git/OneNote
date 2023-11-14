import React, { useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

// component for adding new note in our database 

const Addnote = () => {
  const context = useContext(NoteContext) // context api
  const { addnote } = context              // exracting the value of context api which contains state or method 

  const [note, setNote] = useState({ title: "", description: "", tag: "" }) // state for new note 

  const handleClick = (e) => {
    e.preventDefault(); // this will prevent the page from reloading
    addnote(note.title, note.description, note.tag) // this call the addnote method of notestate.js
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
          <div className="form-group my-3">
            <label for="title">TITLE</label>
            <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter title" />

          </div>
          <div className="form-group">
            <label for="description">DESCRIPTION</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onChange} placeholder="Enter description" />
          </div>
          <div className="form-group">
            <label for="tag">TAG</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} placeholder="Enter tag" />
          </div>


          <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
        </form>


      </div>
    </div>
  )
}

export default Addnote
