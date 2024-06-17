// this file, contains the component which will show the alert at the top website
import React, { useContext } from 'react'
import Alertcont from '../context/notes/Alertcont'
import './css/alerton.css'

function Alert(prop) {
const context=useContext(Alertcont) // using the context api to use alert funtion defined in alertcont.js
const {display,alerttext}=context // destructuring the values of  context of alert api
const text=alerttext.toUpperCase();
  return (

      <div id='p2' style={{height : "0vw",display:display}}> 
<div className="alert alert-dark alert-dismissible fixed-top start-50 translate-middle-x text-center text-white bg-dark p-0 alerton" role="alert" style={{ width: 'fit-content', border: 'none'}}>              {/* {prop.alert} */}
              <p>{text}</p>
               
            </div>
      </div>


      
    )
}

export default Alert
