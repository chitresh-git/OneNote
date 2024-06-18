import React, { useState, useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import Alertcont from '../context/notes/Alertcont';
import { useNavigate } from 'react-router-dom';

const Addnote = () => {
  let navigate = useNavigate();

  const context = useContext(NoteContext); // context api
  const { addnote } = context;              // extracting the value of context api which contains state or method 

  const context2 = useContext(Alertcont);
  const { usealert } = context2;

  const [note, setNote] = useState({ title: "", description: "", tag: "" }); // state for new note 

  const handleClick = (e) => {
    e.preventDefault(); // this will prevent the page from reloading
    // Validation checks
    if (note.title.length < 2 || note.description.length < 5 || note.tag.length < 1) {
      usealert("Decription should be more than 5 characters ");
      return;
    }
    usealert("Note Added");
    addnote(note.title, note.description, note.tag); // this calls the addnote method of notestate.js
    setNote({ title: "", description: "", tag: "" }); // empty the input fields as soon as client submits its details 
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); // this will update targets(title, desc) value as soon as they are changed
    // and also update the note state 
  };

  return (
    <div>
      <div className="container my-3">
        <h1>Add Note</h1>
        <form className='bg-dark text-white p-2 rounded' onSubmit={handleClick}>
          <div className="form-group m-3">
            <label htmlFor="title">TITLE</label>
            <input
              type="text"
              className="form-control my-2"
              id="title"
              name='title'
              onChange={onChange}
              placeholder="Enter title"
              value={note.title}
              minLength={2}
              required
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              className="form-control my-2"
              id="exampleFormControlTextarea1"
              rows="8"
              name='description'
              onChange={onChange}
              placeholder="Enter description"
              value={note.description}
              minLength={5}
              required
            ></textarea>
          </div>
          <div className="form-group m-3">
            <label htmlFor="tag">TAG</label>
            <input
              type="text"
              className="form-control my-2"
              id="tag"
              name='tag'
              onChange={onChange}
              placeholder="Enter tag"
              value={note.tag}
              minLength={1}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary m-3">ADD</button>
          <button type="button" className="btn btn-secondary m-3" onClick={() => { navigate("/shownote") }}>BACK</button>
        </form>
      </div>
    </div>
  );
}

export default Addnote;
