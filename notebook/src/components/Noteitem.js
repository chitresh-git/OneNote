import React from 'react'

const Noteitem = (props) => {
    const {note}=props;

  return (
    <div className='col-md-4 my-3'>


      <div class="card" >

  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}</p>
    <i class="fa-sharp fa-solid fa-trash mx-2"></i>
    <i class="fa-solid fa-pen-to-square mx-2"></i>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
  )
}

export default Noteitem
