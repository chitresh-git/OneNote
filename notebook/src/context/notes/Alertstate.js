import React, { useState } from 'react'
import Alertcont from './Alertcont'
// context api funtion for alert component

const Alertstate = (prop) => {
    const [display, setdis] = useState("")
    const [alerttext, setalert] = useState("")

    const usealert = (text) => {// this funtion will assign the text to the alert component 
        setalert(text)
        setdis("")
        setTimeout(() => {
            setdis("none")
        }, 1000);
    }
    return (

        <Alertcont.Provider value={{ usealert, display, alerttext }}> 
        {/* assigning funtions to the context api  */}
            {prop.children}
        </Alertcont.Provider>

    )
}

export default Alertstate
