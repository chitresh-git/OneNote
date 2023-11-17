import '../index.css'
import { Link } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext'
import { useContext,React,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useTypewriter,Cursor} from 'react-simple-typewriter';



const Dashboard = () => {

    let navigate=useNavigate()
    const context = useContext(NoteContext)     // context api recieving from notestate.js
    const { notes,fetchnote } = context 
    useEffect(() => {
        if(localStorage.getItem('token')){

            fetchnote()  // this will calls the fetchnote method of notestate.js 
        }
        else{
            navigate("/home")
        }
       
    }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  
let desc ,ltitle
    if(notes.length>0){
        const lastnote=notes[notes.length-1]
         ltitle=lastnote.title
       desc=lastnote.description


    }
    else{
desc="You don't have any Note to show , Please Creat a Note"
ltitle=""
    }
    const [text]=useTypewriter({
        words:[desc],
        loop:{}
        });
    // console.log(notes[notes.length-1])
    // console.log(lastnote.description)
    

        
    
  return (
    <div>
<dash>
    <h1 className="greeting">
        WELCOME
    </h1>
<h2 className='lastnote'>
   Your Last Note is &nbsp;
   <lasttitle>
   {ltitle} 
   </lasttitle>
   <br />
   <p id='typednote'>

   {text}
   </p>
</h2>
</dash>


<div class="card dashboard bg-dark text-white " >

  <div class="card-body" id='shownote'>
    <h5 class="card-title">View Notes</h5>
    <p class="card-text">See All Your Notes At Once</p>
    <Link to="/shownote" class="btn btn-secondary">VIEW</Link>
  </div>

<div className="divide"></div>

  <div class="card-body" id='addnote'>
    <h5 class="card-title">Add Note</h5>
    <p class="card-text">Create A New Note</p>
    <Link to="/addnote" class="btn btn-secondary">ADD</Link>
</div>
</div>
    </div>
  )
}

export default Dashboard
