// this file used for expanding notes 
import React from 'react'
import Downloadcontext from '../context/notes/Downloadcontext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const Expandnote = (props) => {
    let navigate = useNavigate()
    const context = useContext(Downloadcontext)// using the context api 

    const { selectednote } = context // extracting the selectednote state 

    return (
        <div>
            <div className="container my-3">

                <h1>Your Note</h1>
                <form className='bg-dark text-white p-2 rounded'>
                    <div className="form-group m-3">
                        <label htmlFor="title">TITLE</label>
                        <input type="text" className="form-control my-2" id="title" name='title' aria-describedby="emailHelp" value={selectednote.title} readOnly />

                    </div>


                    <div class="m-3">
                        <label htmlFor="description">DESCRIPTION</label>
                        <textarea class="form-control my-2" id="exampleFormControlTextarea1" rows="12" name='description' value={selectednote.description} readOnly></textarea>
                    </div>

                    <div className="form-group m-3">
                        <label htmlFor="tag">TAG</label>
                        <input type="text" className="form-control my-2" id="tag" name='tag' value={selectednote.tag} readOnly />
                    </div>


                    <button type="submit" className="btn btn-secondary m-3" onClick={() => { navigate("/shownote") }}>BACK</button>
                    {/* this is used for navigation */}
                </form>


            </div>
        </div>
    )
}

export default Expandnote
