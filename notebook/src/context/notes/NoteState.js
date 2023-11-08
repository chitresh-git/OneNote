import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState=(props)=>{
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
            {/* NoteContext api will provide the access of mystate, mpstate and udpate method to all of its children */}

        </NoteContext.Provider>
    )
}

export default NoteState;
