import React, { useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Alertcont from '../context/notes/Alertcont'
import { useNavigate } from 'react-router-dom'

// component For exrtacting all the notes , and showing every note one by one using cards 

/* hierarchy 
fetchnote() -> setnote(json) -> value of conext api = notes -> in Note.js -> extracting context api -> notes.map(note) -> calling Noteitem component & sending updatenote as a prop along with it -> Noteitem calls the updatenote(note) method -> -> updatenote() method calls the modal htmlFor editing -> modal submit button calls the editnote() method of notestate.js which updates the note -> In last editnote() calls agian fetchnote() method */
// hence completing the cycle

const Notes = () => {
    let navigate = useNavigate()
    const context = useContext(NoteContext)     // context api recieving from notestate.js
    const { notes, fetchnote, editnote } = context // fetching the notes state and fetchnote , editnote methods of context api
    const context2 = useContext(Alertcont)
    const { usealert } = context2

    useEffect(() => {
        if (localStorage.getItem('token')) {

            fetchnote()  // this will calls the fetchnote method of notestate.js 
        }
        else {
            navigate("/home")
        }

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
        usealert("Note Updated")
        editnote(selectednote._id, selectednote.title, selectednote.description, selectednote.tag)
        // e.preventDefault(); // this will prevent the page from reloading
    }

    const onChange = (e) => {
        setNote({ ...selectednote, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
    }

    return (
        <div>

            {/* addnote component */}



            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Launch demo modal {/* target the button with useReference  */}
            </button>



            <div className="modal fade bg-dark" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <form>
                                <div className="form-group my-3">
                                    <label htmlFor="title">TITLE</label>
                                    <input type="text" className="form-control my-1" id="title" name='title' value={selectednote.title} onChange={onChange} aria-describedby="emailHelp" minLength={2}required />

                                </div>
                       

                                <div class="my-3">
                                    <label htmlFor="description">DESCRIPTION</label>
                                    <textarea class="form-control my-1" id="exampleFormControlTextarea1" rows="5" name='description' onChange={onChange}  value={selectednote.description} minLength={5} required></textarea>
                                </div>


                                <div className="form-group my-3">
                                    <label htmlFor="tag">TAG</label>
                                    <input type="text" className="form-control my-1" id="tag" name='tag' value={selectednote.tag} onChange={onChange} required/>
                                </div>


                            </form>





                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                            <button disabled={selectednote.title.length < 2 || selectednote.description.length < 5 || selectednote.tag.length < 1} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClick}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>

            <h3>

                <div className="container">
                    {notes.length === 0 && "NO NOTES TO DISPLAY"}
                </div>
            </h3>
            <div className='row '>
                {notes.map((note) => { // this will call Noteitem component htmlFor each note 
                    return <Noteitem note={note} updatenote={updatenote} />
                })}
            </div>
        </div>
    )
}

export default Notes