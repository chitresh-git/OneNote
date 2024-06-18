// Contact.js

import React from 'react';
import './css/contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
        <div className="card text-white bg-dark contact">
    
            <div className="card-body" id='signup'>
                <h5 className="card-title">GitHub</h5>
                <p className="card-text">View GitHub Repository</p>
                <a href="https://github.com/chitresh-git" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-github m-3"></i>
                </a>
            </div>
    
            <div className="divide"></div>
    
            <div className="card-body" id='login'>
                <h5 className="card-title">Contact</h5>
                <p className="card-text">Connect With Me On Various Apps</p>
                <a href="https://x.com/chitresh_256?t=KZ0ulDn1ODAWBTArhEFZnQ&s=09" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-twitter m-3 mx-4"></i>
                </a>
                <a href="https://www.instagram.com/chitresh_mourya/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram m-3 mx-4"></i>
                </a>
                <a href="https://www.linkedin.com/in/chitresh-mourya-847838234/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin m-3 mx-4"></i>
                </a>
            </div>
        </div>
    </div>
    
    );
};

export default Contact;
