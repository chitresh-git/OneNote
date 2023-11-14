import NoteContext from "./NoteContext";
import { useState } from "react";
// component for client side CRUD operations of our notes 
const NoteState=(props)=>{
  const host="http://localhost:3000"
    const initailNote=[]

    const [notes,setNote]=useState(initailNote)

    const fetchnote= async ()=>{  // this method will fetch all the notes 

      const response= await fetch(`${host}/api/notes/fetchallnotes`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZThkNmUwMTg1MzMyYjVkNDE4ZWYwIn0sImlhdCI6MTY5Nzk3ODIxOX0.soY96BSIxPkiiEIobEz5RFuSZN_F5Ynw2cj8Rkb2A8A"
        }
      });

  const json = await response.json()
  setNote(json)


     
      
    }

    const addnote= async (title,description,tag)=>{  // this method will add the new note 

      const response= await fetch(`${host}/api/notes/addnotes`,{
        method:'POST',
        mode: 'cors', // set mode to the cors otherwise request sents the bad request 
        headers:{
          'Content-Type':'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZThkNmUwMTg1MzMyYjVkNDE4ZWYwIn0sImlhdCI6MTY5Nzk3ODIxOX0.soY96BSIxPkiiEIobEz5RFuSZN_F5Ynw2cj8Rkb2A8A"
        },
        body: JSON.stringify({title,description,tag})
      });

      const json=response.json()
      console.log(json)

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
    const deletenote= async (id)=>{
      const response= await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZThkNmUwMTg1MzMyYjVkNDE4ZWYwIn0sImlhdCI6MTY5Nzk3ODIxOX0.soY96BSIxPkiiEIobEz5RFuSZN_F5Ynw2cj8Rkb2A8A"
        }
      });
      const newnote=notes.filter((note)=>{return note._id!==id}) // if note id is present in the database then it will get deleted 
      setNote(newnote)    // update the notes state

    }


    const editnote=async (id, title, description,tag)=>{
      const response= await fetch(`${host}/api/notes/updatesnote/${id}`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyZThkNmUwMTg1MzMyYjVkNDE4ZWYwIn0sImlhdCI6MTY5Nzk3ODIxOX0.soY96BSIxPkiiEIobEz5RFuSZN_F5Ynw2cj8Rkb2A8A"
        },
        body: JSON.stringify({title,description,tag})
      });
      const json=response.json();

      for(let index=0;index<notes.length;index++){
        const element=notes[index];
        if(element._id===id){
             element.title=title;
             element.description=description;
             element.tag=tag;
        }
      }

    }

    return(
        <NoteContext.Provider value={{notes,setNote,fetchnote,addnote,deletenote,editnote}}> 
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