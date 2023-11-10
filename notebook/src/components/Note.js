import React from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'
import Noteitem from './Noteitem'

const Notes = () => {
    const context = useContext(NoteContext)
    const { notes, setNote } = context
    return (
        <div>

            <h1>YOUR NOTES </h1>
            <div className='row my-3'>
                {notes.map((note) => {
                    return <Noteitem note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
