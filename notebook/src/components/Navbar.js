import { React, useContext } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Alertcont from '../context/notes/Alertcont'
import './css/navbar.css'



// component for navigation bar 

const Navbar = () => {
  const context2 = useContext(Alertcont)
  const { usealert } = context2
  const location = useLocation() // Returns the current location object, which represents the current URL in web browsers.

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" id='navbar' >
        <div className="container-fluid " >
          <Link className="navbar-brand" to="/">OneNote</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link id='title' className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">HOME</Link>
                {/* location.pathname returns current path or current url */}
                {/* when we click on home only then home link seems to be active with the help of location.pathname  */}
              </li>
              <li className="nav-item">
                <Link id='title' className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`} to={`${localStorage.getItem('token') == null ? "/" : "/dashboard"}`}>DASHBOARD</Link>
              </li>
              <li className="nav-item">
                <Link id='title' className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">ABOUT</Link>
              </li>

              <li className="nav-item" >
                <Link id='title' className="nav-link" to={`${localStorage.getItem('token') == null ? "/" : "/userdetail"}`}>ACCOUNT</Link></li>

              <li className="nav-item" >
                <Link id='title' className="nav-link" to="/contact">CONTACT</Link></li>

              <li className="nav-item dropdown">

                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <li><a class="dropdown-item" href='https://notion-one-jade.vercel.app/' target='_blank' >Notion</a></li>
                  <li><a class="dropdown-item" href='https://global-post.vercel.app/' target='_blank' >Global Post</a></li>
                  <li><a class="dropdown-item" href='https://ad-shield.vercel.app/' target='_blank' >Ad_Shield</a></li>
                  <li><a class="dropdown-item" href='https://show-gen.vercel.app/' target='_blank' >ShowGen</a></li>
                </ul>
              </li>

            </ul>

            {!localStorage.getItem('token') ? <form className="d-flex">
              {/* <Link className="btn btn-primary" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link> */}
            </form> : <Link className="btn btn-secondary " onClick={() => { localStorage.removeItem('token'); usealert("logged out ") }} to="/" role="button">LogOut</Link>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
