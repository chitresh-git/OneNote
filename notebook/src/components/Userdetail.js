import React from 'react';
import './css/userdetail.css'; // Ensure the correct path to your CSS file

const Userdetail = () => {
  const dated = new Date(localStorage.getItem('date')).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: '2-digit'
  });



  return (
    <div className="userinfo text-white bg-dark">
      <div className="card-body p-2">
        <h5 className="card-title">Name - {localStorage.getItem('name')}</h5>
        <h5 className="card-title">Email - {localStorage.getItem('email')}</h5>
      </div>

      <div className="divide"></div>

      <div className="card-body p-2">
        <h5 className="card-title"> Password - {localStorage.getItem('password')}</h5>
        <h5 className="card-title"> Created On - {dated}</h5>
      </div>
    </div>
  );
}

export default Userdetail;
