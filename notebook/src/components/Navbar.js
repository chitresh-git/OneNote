import {React , useEffect} from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

// component for navigation bar 

const Navbar = () => {
  const location=useLocation() // Returns the current location object, which represents the current URL in web browsers.
  useEffect(()=>{
    console.log(location)
  },[location])

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link id='title'class={`nav-link ${location.pathname==="/"?"active":""}`} to="/">HOME</Link> 
        {/* location.pathname returns current path or current url */}
        {/* when we click on home only then home link seems to be active with the help of location.pathname  */}
        </li>
        <li class="nav-item">
        <Link id='title'class={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">about</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
           
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
