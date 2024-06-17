import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './css/userdetail.css'


const Userdetail = () => {
    const dated= new Date(localStorage.getItem('date')).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    });
    const [text] = useTypewriter({
        words: [localStorage.getItem('name'), " For Visiting Us"],
        loop: {}
    });
    return (
    

                <div class="card  userinfo" >

                    <div class="card-body" id='signup'>
                        <h5 class="card-title">Name - {localStorage.getItem('name')}</h5>
                        <h5 class="card-title">Email - {localStorage.getItem('email')}</h5>


                    </div>

                    <div className="divide"></div>

                    <div class="card-body" id='login'>
                        <h5 class="card-title"> Password - {localStorage.getItem('password')}</h5>
                        <h5 class="card-title"> Created On-{dated}</h5>


                    </div>
                </div>
        
       
    )
}

export default Userdetail
