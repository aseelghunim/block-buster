import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ComingSoon from './components/coming soon/ComingSoon';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import Login from './components/login/Login';
import Movies from './components/movies/Movies';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/not found/NotFound';
import ProtectedRoute from './components/protected route/ProtectedRoute';
import Register from './components/register/Register';
import SingleMoviePage from './components/single movie page/SingleMoviePage';
import SingleTvShowPage from './components/single tv show page/SingleTvShowPage';
import TvShows from './components/tv shows/TvShows';


export default function App() {
  let navigate = useNavigate();
  let [userData, setUserData] = useState(null);
  function getUserData() {
    let decoded = jwtDecode(localStorage.getItem('userToken'));
    setUserData(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData();
    }
  }, []);
  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
    console.log('logged out')
  }
  return (
    <>
      <Navbar userData={userData} logOut={logOut} />
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path='home' element={<Home />}></Route>
          <Route path='movies/:id' element={<SingleMoviePage />}></Route>
          <Route path='tvshows/:id' element={<SingleTvShowPage />}></Route>
        <Route path='movies' element={<Movies />}></Route>
        <Route path='tvshows' element={<TvShows />}></Route>
        <Route path='community' element={<ComingSoon />}></Route>



        {/* </Route> */}
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='login' element={<Login getUserData={getUserData} />}></Route> */}
        {/* <Route path='register' element={<Register />}></Route> */}

        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </>
  )
}
