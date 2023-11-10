import React from 'react'

// component for showing each note inside the card 
const Noteitem = (props) => {
    const {note}=props;

  return (
    <div className='col-md-4 my-3'>


      <div class="card" >

  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>        {/* title of our note  */}
            
    <p class="card-text">{note.description}</p>    {/* description of our note  */}

    <footer class="blockquote-footer">{note.tag}</footer>  {/* tag of our note  */}

    <i class="fa-sharp fa-solid fa-trash mx-2"></i>   {/* delete icon  */}
 
    <i class="fa-solid fa-pen-to-square mx-2"></i>    {/* edit icon */}

    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  )
}

export default Noteitem
