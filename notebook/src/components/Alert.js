import React, { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'


function Alert(prop) {
const context=useContext(Alertcont)
const {display,alerttext}=context
const text=alerttext.toUpperCase();
  return (

      <div id='p2' style={{height : "0vw",display:display}}> 
      <div className="alert alert-dark alert-dismissible  fixed-top top-0 start-50 translate-middle-x text-center text-dark" role="alert">
               {/* {prop.alert} */}
              <strong>{text}</strong>
               
            </div>
      </div>


      
    )
}

export default Alert
