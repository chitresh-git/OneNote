import NoteContext from "./NoteContext";
import { useState } from "react";
// component for client side CRUD operations of our notes 
const NoteState=(props)=>{
  const host = process.env.REACT_APP_BACKEND_URL;
    const initailNote=[]

    const [notes,setNote]=useState(initailNote)

    const fetchnote= async ()=>{  // this method will fetch all the notes 

      const response= await fetch(`${host}/api/notes/fetchallnotes`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
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
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag})
      });

      const json= await response.json()
      setNote(notes.concat(json)) // concatenating the new note in the existing notes state 
      
    }
    const deletenote= async (id)=>{
      const response= await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        }
      });
     await response.json()
  
      const newnote=notes.filter((note)=>{return note._id!==id}) // if note id is present in the database then it will get deleted 
      setNote(newnote)    // update the notes state

    }


    const editnote=async (id, title, description,tag)=>{
    
      const response= await fetch(`${host}/api/notes/updatenote/${id}`,{
        method:'PUT',
        mode: 'cors', // set mode to the cors otherwise request sents the bad request 
        headers:{
          'Content-Type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag})
      });
      // const json=response.json();

      let editednote= await JSON.parse(JSON.stringify(notes))


      for(let index=0;index<editednote.length;index++){ // iterating through all the notes fetching from the database 
        const element=editednote[index];

        if(element._id===id){ // and when note selected by the client matches with the note database , then we update that note using client entered details
             editednote.title=title;
             editednote.description=description;
             editednote.tag=tag;
             break
        }
      }
      await response.json()
      setNote(editednote); // updating the state of note
      fetchnote(); // this will reload the page with new edited notes 

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