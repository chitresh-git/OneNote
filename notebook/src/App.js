
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Alertcont from './context/notes/Alertcont';
import { useContext,useEffect } from 'react';




import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


function App(props) {
const context=useContext(Alertcont)
const {usealert}=context
useEffect(() => {
  usealert("WELCOME")
 
}, []) // eslint-disable-line react-hooks/exhaustive-deps  

  return (

    <>


    <NoteState>

    <Router>
   <Navbar/>


   <Alert alert={alert}/>
   <div className="container">

    <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/about'  element={<About/>}/>
    <Route exact path='/login'  element={<Login/>}/>
    <Route exact path='/signup'  element={<Signup/>}/>

    </Routes>

   </div>

    </Router>
    </NoteState>


    </>
  );
}

export default App;
