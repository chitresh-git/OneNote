
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


function App() {
  return (

    <>
    <NoteState>

    <Router>
   <Navbar/>
   <div className="container">

    <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/about'  element={<About/>}/>

    </Routes>
<Note/>
   </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
