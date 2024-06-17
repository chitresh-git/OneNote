// Contact.js

import React from 'react';
import { Link } from 'react-router-dom'
import './css/contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <div class="card   contact  " >

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
    );
};

export default Contact;
