import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './css/userdetail.css'


const Userdetail = () => {
  
    const [text] = useTypewriter({
        words: [localStorage.getItem('name')," For Visiting Us"],
        loop: {}
    });
    return (
        <div>

            <div>
                <section3>
                    <h1 id='titlenameud'>
                        OneNote
                    </h1>
                    <h1 id='thanks' className='m-1'> Thank You , &nbsp;

                        <span id='username'>
                            {text}
                            <Cursor />
                        </span>
                    </h1>

                </section3>

                <div class="card cardlogin bg-dark text-white " >

                    <div class="card-body" id='signup'>
                        <h5 class="card-title">Name - {localStorage.getItem('name')}</h5>
                        <h5 class="card-title">Email - {localStorage.getItem('email')}</h5>


                        {/* <Link to="/signup" class="btn btn-secondary">VISIT</Link> */}
                    </div>

                    <div className="divide"></div>

                    <div class="card-body" id='login'>
                        <h5 class="card-title"> Password - {localStorage.getItem('password')}</h5>
                        <h5 class="card-title"> Created On-{localStorage.getItem('date')}</h5>


                        {/* <Link to="/login" class="btn btn-secondary">LOGIN</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetail
