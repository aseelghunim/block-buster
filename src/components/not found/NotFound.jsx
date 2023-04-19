import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
      <img src="assets/images/err-img.png" alt=""/>
      <h1>not found</h1>
      <Link to='/home' className='rounded-pill'>go home</Link>
    </div>
  )
}
