import React, { useState } from 'react'
import Alertcont from './Alertcont'

const Alertstate = (prop) => {
    const [display, setdis] = useState("")
    const [alerttext, setalert] = useState("")
    const usealert = (text) => {
        setalert(text)
        setdis("")
        setTimeout(() => {
            setdis("none")
        }, 1000);
    }
    return (
       
            <Alertcont.Provider value={{ usealert,display,alerttext }}>
                {prop.children}
            </Alertcont.Provider>
        
    )
}

export default Alertstate
