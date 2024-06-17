import React from 'react'
import { Link } from 'react-router-dom'
// component for about our application
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import './css/about.css'

const About = () => {

  const [text]=useTypewriter({
  words:['Create, update, read, and delete (CRUD) operations become seamless with this sophisticated Note Management System. Built on the powerful combination of React, Node.js, and MongoDB, the web application offers an intuitive user interface for managing textual notes efficiently. ','Key Technologies: ',' React: The front-end of the application is developed using React, ensuring a responsive and dynamic user experience.','  Node.js: The back-end is powered by Node.js, providing a scalable and efficient server environment. ',' MongoDB: Data storage and retrieval are handled by MongoDB, a flexible NoSQL database. ',' REST API: Communication between the front-end and back-end is facilitated through a RESTful API, enabling seamless data exchange. ',' Bootstrap: The application is styled using Bootstrap, ensuring a clean and modern design.'],
  loop:{}
  });
  return (
    <div className='aboutcontainer'>
 
      <h1 id='titlename'>
    OneNote &nbsp;
    {/* <span id='author'>-By CHITRESH</span> */}
  </h1>
        <h2 id="about">
        {text}
        <Cursor/>
        </h2>
     


    </div>
  )
}

export default About
