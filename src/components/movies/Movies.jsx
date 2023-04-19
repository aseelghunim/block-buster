import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../footer/Footer';
import Movie from './Movie';

export default function Movies() {
  let [movies, setMovies] = useState([]);
  let [search, setSearch] = useState('');
  let [isLoading, setIsLoading] = useState(true);

  async function getMovies() {
    let { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
    setMovies(data.results);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  // owl carousel settings
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
    },
  };


  if (isLoading) {
    return <div>
      <div className="loading">
        <span class="loader"></span>;
      </div>
    </div>
  } else {
    return (
      <>
        <div className="movies">
          <div className="movies-top">
            <h1 className='text-center'>movies</h1>

          </div>
          <div className="container">
            <div className="search text-end d-none d-md-block">
              <input type="search" onChange={e => setSearch(e.target.value)} placeholder='Search here..' />
            </div>
            <div className="row d-none d-md-flex">
              {movies.filter(movie => {
                if (search == '') {
                  return movie;
                }
                else if (movie.title.toLowerCase().includes(search)) {
                  return movie;
                }
              }).map((movie, index) =>
                <Movie key={index} movieData={movie} />
              )}
            </div>
            <div className="small-devices-slider d-block d-md-none">
              <OwlCarousel className="slider-items owl-carousel" {...options}>

                {movies.map((movie, index) =>
                  <Movie key={index} movieData={movie} />
                )}
              </OwlCarousel>
            </div>
          </div>

        </div>
        <Footer />
      </>

    )
  }

}
