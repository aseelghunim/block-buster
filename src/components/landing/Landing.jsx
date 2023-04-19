import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      navigate('/home');
    }
  },[]);
  
  return (
    <div className='landing text-center'>
        <div className="content mt-5">
        <h2>block buster</h2>
        <h1>film review - movie database</h1>
        <div className="links">
            <Link to='/login' className='rounded-pill'>log in</Link>
            <Link to='/register' className='rounded-pill'>sign up</Link>
        </div>
        </div>
        
    </div>
  )
}
