import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from '../movies/Movie';
import TvShow from '../tv shows/TvShow';
import OwlCarousel from 'react-owl-carousel';


export default function TvHomeSection() {
    let [airingTodayTvShows, setAiringTodayTvShowss] = useState([]);
    let [popularTvShows, setPopularTvShows] = useState([]);
    let [topRatedTvShows, setTopRatedTvShows] = useState([]);
    let [onAirTvShows, setonAirTvShows] = useState([]);
    let [airingIsLoading,setAiringIsLoading] = useState(true);
    let [popularIsLoading,setPopularIsLoading] = useState(true);
    let [topRatedIsLoading,setTopRatedIsLoading] = useState(true);
    let [onAirIsLoading,setOnAirIsLoading] = useState(true);


    async function getAiringTodayTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setAiringTodayTvShowss(data.results);
        setAiringIsLoading(false);
    }
    async function getPopularTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setPopularTvShows(data.results);
        setPopularIsLoading(false);
    }
    async function getTopRatedTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setTopRatedTvShows(data.results);
        setTopRatedIsLoading(false);
    }
    async function getOnAirTvShows() {
        let { data } = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setonAirTvShows(data.results);
        setOnAirIsLoading(false);
    }
    useEffect(() => {
        getAiringTodayTvShows();
        getPopularTvShows();
        getTopRatedTvShows();
        getOnAirTvShows();
    }, []);
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
    if (airingIsLoading || popularIsLoading || topRatedIsLoading || onAirIsLoading) {
        return <div>
            <div className="loading">
                <span class="loader"></span>;
            </div>
        </div>
    } else{
         return (
        <div>
            <div className='home-tv'>
                <div className="container-lg">
                    <h2 className='text-uppercase mb-0'>on tv</h2>
                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active  ps-0" id="airing-today-tab" data-bs-toggle="tab" data-bs-target="#airing-today-tab-pane" type="button" role="tab" aria-controls="airing-today-tab-pane" aria-selected="true">#airing today</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="on-air-tab" data-bs-toggle="tab" data-bs-target="#on-air-tab-pane" type="button" role="tab" aria-controls="on-air-tab-pane" aria-selected="false">#on air</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="popular-tv-tab" data-bs-toggle="tab" data-bs-target="#popular-tv-tab-pane" type="button" role="tab" aria-controls="popular-tv-tab-pane" aria-selected="false">#popular</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="top-rated-tv-tab" data-bs-toggle="tab" data-bs-target="#top-rated-tv-tab-pane" type="button" role="tab" aria-controls="top-rated-tv-tab-pane" aria-selected="false">#top rated</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="airing-today-tab-pane" role="tabpanel" aria-labelledby="airing-today-tab" tabIndex={0}>
                                <div className="row d-none d-md-flex">
                                    {airingTodayTvShows.map((show, index) =>
                                        <TvShow key={index} tvShowData={show} />
                                    )}
                                </div>
                                <div className="small-devices-slider d-block d-md-none">
                                    <OwlCarousel className="slider-items owl-carousel" {...options}>

                                        {airingTodayTvShows.map((show, index) =>
                                            <TvShow key={index} tvShowData={show} />
                                        )}
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="popular-tv-tab-pane" role="tabpanel" aria-labelledby="popular-tv-tab" tabIndex={0}>
                                <div className="row d-none d-md-flex">
                                    {popularTvShows.map((show, index) =>
                                        <TvShow key={index} tvShowData={show} />
                                    )}
                                </div>
                                <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                {popularTvShows.map((show, index) =>
                                <TvShow key={index} tvShowData={show} />
                            )}
                                </OwlCarousel>
                            </div>

                            </div>
                            <div className="tab-pane fade" id="top-rated-tv-tab-pane" role="tabpanel" aria-labelledby="top-rated-tv-tab" tabIndex={0}>
                                <div className="row d-none d-md-flex">
                                    {topRatedTvShows.map((show, index) =>
                                        <TvShow key={index} tvShowData={show} />
                                    )}
                                </div>
                                <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                {topRatedTvShows.map((show, index) =>
                                <TvShow key={index} tvShowData={show} />
                            )}
                                </OwlCarousel>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="on-air-tab-pane" role="tabpanel" aria-labelledby="on-air-tab" tabIndex={0}>
                                <div className="row d-none d-md-flex">
                                    {onAirTvShows.map((show, index) =>
                                        <TvShow key={index} tvShowData={show} />
                                    )}
                                </div>
                                <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                {onAirTvShows.map((show, index) =>
                                <TvShow key={index} tvShowData={show} />
                            )}
                                </OwlCarousel>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
    }
   
}
