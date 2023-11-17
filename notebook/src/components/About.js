import React from 'react'
import { Link } from 'react-router-dom'
// component for about our application
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const About = () => {

  const [text]=useTypewriter({
  words:['Create, update, read, and delete (CRUD) operations become seamless with this sophisticated Note Management System. Built on the powerful combination of React, Node.js, and MongoDB, the web application offers an intuitive user interface for managing textual notes efficiently. ','Key Technologies: ',' React: The front-end of the application is developed using React, ensuring a responsive and dynamic user experience.','  Node.js: The back-end is powered by Node.js, providing a scalable and efficient server environment. ',' MongoDB: Data storage and retrieval are handled by MongoDB, a flexible NoSQL database. ',' REST API: Communication between the front-end and back-end is facilitated through a RESTful API, enabling seamless data exchange. ',' Bootstrap: The application is styled using Bootstrap, ensuring a clean and modern design.'],
  loop:{}
  });
  return (
    <div>
      <section>
      <h1 id='titlename'>
    OneNote &nbsp;
    <span id='author'>-By CHITRESH</span>
  </h1>
        <h2 id="about">
        {text}
        <Cursor/>
        </h2>
      </section>

      <div class="card cardlogin bg-dark text-white " >

        <div class="card-body" id='signup'>
          <h5 class="card-title">GitHub</h5>
          <p class="card-text">View GitHub Repository</p>
         <Link to="https://github.com/chitresh-git">
         <i class="fa-brands fa-square-github m-3"></i>
         </Link> 
          {/* <Link to="/signup" class="btn btn-secondary">VISIT</Link> */}
        </div>

        <div className="divide"></div>

        <div class="card-body" id='login'>
          <h5 class="card-title">Contact</h5>
          <p class="card-text">Connect With Me On Various Apps</p>
         <Link to="https://x.com/chitresh_256?t=KZ0ulDn1ODAWBTArhEFZnQ&s=09">
         <i class="fa-brands fa-square-twitter m-3 mx-4"></i>        
         </Link> 
         <Link to="https://www.instagram.com/chitresh_mourya/">
         <i class="fa-brands fa-instagram m-3 mx-4"></i>        
         </Link> 
         <Link to="https://www.linkedin.com/in/chitresh-mourya-847838234/">
         <i class="fa-brands fa-linkedin m-3 mx-4"></i>
         </Link> 
          {/* <Link to="/login" class="btn btn-secondary">LOGIN</Link> */}
        </div>
      </div>
    </div>
  )
}

export default About
