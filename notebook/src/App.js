
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Note from './components/Note'

import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';


function App() {
  return (

    <>
    <NoteState>

    <Router>
   <Navbar/>
   <Alert/>
   <div className="container">

    <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/about'  element={<About/>}/>
    <Route exact path='/login'  element={<Login/>}/>

    </Routes>

   </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
