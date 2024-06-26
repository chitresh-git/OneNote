
import React, {  useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'




const Editmodal = (props) => {

    const context = useContext(NoteContext)     // context api recieving from notestate.js
    const { editnote } = context // fetching the notes state and fetchnote , editnote methods of context api

    const ref = useRef(null)// this will assign refernce to the objects 
    const [selectednote, setNote] = useState({ id: "", title: "", description: "", tag: "" }) // state for new note 



    const updatenote = (currentNote) => {
        ref.current.click()    // this will shows the modal whenever user clicks the edit icon , as edit icon ivokes updatenote method (this method)
        // and this method will call the object which assing to useRef (button of modal)
        // edit icon >>> updatenote() >>> modal button >>> shows modal

        setNote(currentNote)

    }

    const handleClick = (e) => {
        console.log(selectednote._id)
        editnote(selectednote._id, selectednote.title, selectednote.description, selectednote.tag)
        // e.preventDefault(); // this will prevent the page from reloading
    }

    const onChange = (e) => {
        setNote({ ...selectednote, [e.target.name]: e.target.value }) // this will update targets(title,desc) value as soon as they are change
        //and also update the note state 
    }


  return (
    <>
    <div>
       <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                Launch demo modal {/* target the button with useReference  */}
            </button>



            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update Your Note</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">


                            <form>
                                <div className="form-group my-3">
                                    <label for="title">TITLE</label>
                                    <input type="text" className="form-control my-1" id="title" name='title' value={selectednote.title} onChange={onChange} aria-describedby="emailHelp" />

                                </div>
                                <div className="form-group my-3">
                                    <label for="description">DESCRIPTION</label>
                                    <input type="text" className="form-control my-1" id="description" name='description' value={selectednote.description} onChange={onChange} />
                                </div>
                                <div className="form-group my-3">
                                    <label for="tag">TAG</label>
                                    <input type="text" className="form-control my-1" id="tag" name='tag' value={selectednote.tag} onChange={onChange} />
                                </div>


                            </form>





                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
                            <button disabled={selectednote.title.length<5 || selectednote.description.length<5}type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
<NoteContext.Provider value={{updatenote}}> 
{props.children} 
{/* NoteContext api will provide the access of all the states and methods which are assigned to the value  */}
</NoteContext.Provider>
</>
  )
}

export default Editmodal
