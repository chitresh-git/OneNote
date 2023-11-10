import NoteContext from "./NoteContext";
import { useState } from "react";
// component for client side CRUD operations of our notes 
const NoteState=(props)=>{
    const initailNote=[
        {
          "_id": "65351f151d0085b62230f151",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:09:41.177Z",
          "__v": 0
        },
        {
          "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
        }
        ,
        {
          "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
        }
        ,
        {
          "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
        }
        ,
        {
          "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
        }
        ,
        {
          "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": "my title",
          "description": "i have to master react asap",
          "tag": "react",
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
        }
    ]

    const [notes,setNote]=useState(initailNote)

    const addnote=(title,description,tag)=>{  // this method will add the new note 
      const note={
        "_id": "65352075260321e301708f52",
          "user": "652e8d6e0185332b5d418ef0",
          "title": title,
          "description":description,
          "tag": tag,
          "Date": "2023-10-22T13:15:33.913Z",
          "__v": 0
      }

      setNote(notes.concat(note)) // concatenating the new note in the existing notes state 
      
    }
    const deletenote=()=>{

    }
    const editnote=()=>{

    }

    return(
        <NoteContext.Provider value={{notes,setNote,addnote,deletenote,editnote}}> 
            {props.children} 
            {/* NoteContext api will provide the access of all the states and methods which are assigned to the value  */}
        </NoteContext.Provider>
    )
}

export default NoteState;

/* 
example of context api - 
const mystate={ // defining the state
    "name":"cm",
    "age":12
}
const [mpstate,setState]=useState({"name":"shivraj","tenure":15}) // defining the state 

const update=(val1,val2)=>{
    setTimeout(() => {
        setState({"name":val1,"tenure":val2}) // the setstate will update the value of mpstate
    }, 3000);
}
return(
    <NoteContext.Provider value={{mystate,mpstate,update}}> 
        {props.children} 
        {/* NoteContext api will provide the access of mystate, mpstate and udpate method to all of its children }

    </NoteContext.Provider>
) */ 