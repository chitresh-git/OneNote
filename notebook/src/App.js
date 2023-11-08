import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'

import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <>
    <Router>
   <Navbar/>
    <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/about'  element={<About/>}/>

    </Routes>
    </Router>
    </>
  );
}

export default App;
