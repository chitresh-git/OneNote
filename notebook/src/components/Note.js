import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'

// component for exrtacting all the notes , and showing every note one by one using cards 

const Notes = () => {
    const context = useContext(NoteContext)
    const {notes} = context
    return (
        <div>
            <Addnote/>  
            {/* addnote component */}
            
            <h1>YOUR NOTES </h1>
            <div className='row my-3'>

                {notes.map((note) => { // this will call Noteitem component for each note 
                    return <Noteitem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
