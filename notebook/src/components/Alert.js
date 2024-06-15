// this file, contains the component which will show the alert at the top website
import React, { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'

function Alert(prop) {
const context=useContext(Alertcont) // using the context api to use alert funtion defined in alertcont.js
const {display,alerttext}=context // destructuring the values of  context of alert api
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
