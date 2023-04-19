import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../footer/Footer';
import TvShow from './TvShow';

export default function TvShows() {
  let [tvShows, setTvShows] = useState([]);
  let [search, setSearch] = useState('');
  let [isLoading, setIsLoading] = useState(true);

  async function getPopularTvShows() {
    let { data } = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
    setTvShows(data.results);
    setIsLoading(false);
  }
  useEffect(() => {
    getPopularTvShows();
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
        <div className="tv-shows">
          <div className="tv-shows-top">
            <h1 className='text-center'>tv shows</h1>

          </div>
          <div className="container">
            <div className="search d-none d-md-block">
              <input type="search" onChange={e => setSearch(e.target.value)} placeholder='Search here..' />
            </div>
            <div className="row d-none d-md-flex">
              {tvShows.filter(tvShow => {
                if (search == '') {
                  return tvShow;
                }
                else if (tvShow.name.toLowerCase().includes(search)) {
                  return tvShow;
                }
              }).map((tvShow, index) =>
                <TvShow key={index} tvShowData={tvShow} />
              )}

            </div>
            <div className="small-devices-slider d-block d-md-none">
              <OwlCarousel className="slider-items owl-carousel" {...options}>

              {tvShows.map((tvShow, index) =>
                <TvShow key={index} tvShowData={tvShow} />
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
