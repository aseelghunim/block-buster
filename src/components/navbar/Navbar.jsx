import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to='/'><img src={require('./images/logo.png')} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/movies'>movies</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to='/celebrities'>celebrities</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to='/tvshows'>tv shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/community'>community</Link>
            </li>
          </ul> 

          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {props.userData ?
              <li className="nav-item">
                <span className="nav-link logout" onClick={props.logOut}>log out</span>
              </li> :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to='/login'>log in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/register'>sign up</Link>
                </li>
              </>
            }
          </ul> */}
        </div>
      </div>
    </nav>

  )
}
