import React, { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'


function Alert(prop) {
const context=useContext(Alertcont)
const {display,alerttext}=context
  return (

      <div id='p2' style={{height : "1vw",display:display,position:"static"}}> 
      <div className="alert alert-primary alert-dismissible fade show" role="alert">
               {/* {prop.alert} */}
              <strong>{alerttext}</strong>
               
            </div>
      </div>


      
    )
}

export default Alert
