import React, { useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'

// component For exrtacting all the notes , and showing every note one by one using cards 

/* hierarchy 
fetchnote() -> setnote(json) -> value of conext api = notes -> in Note.js -> extracting context api -> notes.map(note) -> calling Noteitem component & sending updatenote as a prop along with it -> Noteitem calls the updatenote(note) method -> -> updatenote() method calls the modal htmlFor editing -> modal submit button calls the editnote() method of notestate.js which updates the note -> In last editnote() calls agian fetchnote() method */
// hence completing the cycle

const Notes = () => {
    const context = useContext(NoteContext)     // context api recieving from notestate.js
    const { notes, fetchnote, editnote } = context // fetching the notes state and fetchnote , editnote methods of context api

    useEffect(() => {
        fetchnote()  // this will calls the fetchnote method of notestate.js 
       
    }, []) // eslint-disable-line react-hooks/exhaustive-deps   
    // the above comment will remove warning caused by the useEffect hooks

    const ref = useRef(null)// this will assign refernce to the objects 
    const [selectednote, setNote] = useState({ id: "", title: "", description: "", tag: "" }) // state htmlFor new note 


    const updatenote = (currentNote) => {
        ref.current.click()    // this will shows the modal whenever user clicks the edit icon , as edit icon ivokes updatenote method (this method)
        // and this method will call the object which assing to useRef (button of modal)
        // edit icon >>> updatenote() >>> modal button >>> shows modal

        setNote(currentNote)

    }

    const handleClick = (e) => {
   
        editnote(selectednote._id, selectednote.title, selectednote.description, selectednote.tag)
        // e.preventDefault(); // this will prevent the page from reloading
    }

    const onChange = (e) => {
        setNote({ ...selectednote, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
    }

    return (
        <div>
            <Addnote />
            {/* addnote component */}



            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Launch demo modal {/* target the button with useReference  */}
            </button>



            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form>
                                <div className="form-group my-3">
                                    <label htmlFor="title">TITLE</label>
                                    <input type="text" className="form-control my-1" id="title" name='title' value={selectednote.title} onChange={onChange} aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="description">DESCRIPTION</label>
                                    <input type="text" className="form-control my-1" id="description" name='description' value={selectednote.description} onChange={onChange} />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="tag">TAG</label>
                                    <input type="text" className="form-control my-1" id="tag" name='tag' value={selectednote.tag} onChange={onChange} />
                                </div>


                            </form>





                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                            <button disabled={selectednote.title.length<5 || selectednote.description.length<5}type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1>YOUR NOTES </h1>
            <div className="container">
                {notes.length===0 && "NO NOTES TO DISPLAY"}
            </div>
            <div className='row my-3'>
                {notes.map((note) => { // this will call Noteitem component htmlFor each note 
                    return <Noteitem note={note} updatenote={updatenote} />
                })}
            </div>
        </div>
    )
}

export default Notes