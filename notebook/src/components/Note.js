import React, { useEffect, useRef,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'

// component for exrtacting all the notes , and showing every note one by one using cards 

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, fetchnote } = context
    useEffect(() => {
        fetchnote()
    }, [])

    const ref = useRef(null)// this will assign refernce to the objects 
    const [note, setNote] = useState({ title: "", description: "", tag: "" }) // state for new note 


    const updatenote = (currentNote) => {
        ref.current.click()    // this will shows the modal whenever user clicks the edit icon , as edit icon ivokes updatenote method (this method)
        // and this method will call the object which assing to useRef (button of modal)
        // edit icon >>> updatenote() >>> modal button >>> shows modal

        setNote(currentNote)

    }

    const handleClick = (e) => {
        e.preventDefault(); // this will prevent the page from reloading
    }

      const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
      }

    return (
        <div>
            <Addnote />
            {/* addnote component */}



            <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal {/* target the button with useReference  */}
            </button>
           


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">


                            <form>
                                <div className="form-group my-3">
                                    <label for="title">TITLE</label>
                                    <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} aria-describedby="emailHelp"  />

                                </div>
                                <div className="form-group">
                                    <label for="description">DESCRIPTION</label>
                                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange}  />
                                </div>
                                <div className="form-group">
                                    <label for="tag">TAG</label>
                                    <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onChange}  />
                                </div>
                             
                             
                            </form>





                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">update note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1>YOUR NOTES </h1>
            <div className='row my-3'>

                {notes.map((note) => { // this will call Noteitem component for each note 
                    return <Noteitem note={note} updatenote={updatenote} />
                })}
            </div>
        </div>
    )
}

export default Notes
