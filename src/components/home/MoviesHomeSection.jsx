import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Movie from '../movies/Movie';

export default function MoviesHomeSection() {
    let [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    let [popularMovies, setPopularMovies] = useState([]);
    let [topRatedMovies, setTopRatedMovies] = useState([]);
    let [upcomingMovies, setUpcomingMovies] = useState([]);
    let [nowPlayingIsLoading,setNowPlayingIsLoading] = useState(true);
    let [popularIsLoading,setPopularIsLoading] = useState(true);
    let [topRatedIsLoading,setTopRatedIsLoading] = useState(true);
    let [upcomingIsLoading,setUpcomingIsLoading] = useState(true);


    async function getNowPlayingMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setNowPlayingMovies(data.results);
        setNowPlayingIsLoading(false);
    }
    async function getPopularMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setPopularMovies(data.results);
        setPopularIsLoading(false);
    }
    async function getTopRatedMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setTopRatedMovies(data.results);
        setTopRatedIsLoading(false);
    }
    async function getUpcomingMovies() {
        let { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US');
        setUpcomingMovies(data.results);
        setUpcomingIsLoading(false);
    }

    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
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
    if (nowPlayingIsLoading || popularIsLoading || topRatedIsLoading || upcomingIsLoading) {
        return <div>
            <div className="loading">
                <span class="loader"></span>;
            </div>
        </div>
    }
    return (
        <div className='home-movies' id='home-movies'>
            <div className="container-lg">
                <h2 className='text-uppercase mb-0'>movies</h2>
                <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active  ps-0" id="now-playing-tab" data-bs-toggle="tab" data-bs-target="#now-playing-tab-pane" type="button" role="tab" aria-controls="now-playing-tab-pane" aria-selected="true">#now playing</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="popular-tab" data-bs-toggle="tab" data-bs-target="#popular-tab-pane" type="button" role="tab" aria-controls="popular-tab-pane" aria-selected="false">#popular</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="top-rated-tab" data-bs-toggle="tab" data-bs-target="#top-rated-tab-pane" type="button" role="tab" aria-controls="top-rated-tab-pane" aria-selected="false">#top rated</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="upcoming-tab" data-bs-toggle="tab" data-bs-target="#upcoming-tab-pane" type="button" role="tab" aria-controls="upcoming-tab-pane" aria-selected="false">#upcoming</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="now-playing-tab-pane" role="tabpanel" aria-labelledby="now-playing-tab" tabIndex={0}>
                            <div className="row d-none d-md-flex">
                                {nowPlayingMovies.map((movie, index) =>
                                    <Movie key={index} movieData={movie} />
                                )}
                            </div>
                            <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                    {nowPlayingMovies.map((movie, index) => {
                                        return <Movie key={index} movieData={movie} />
                                    }
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="popular-tab-pane" role="tabpanel" aria-labelledby="popular-tab" tabIndex={0}>
                            <div className="row d-none d-md-flex">
                                {popularMovies.map((movie, index) =>
                                    <Movie key={index} movieData={movie} />
                                )}
                            </div>
                            <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                    {popularMovies.map((movie, index) => {
                                        return <Movie key={index} movieData={movie} />
                                    }
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="top-rated-tab-pane" role="tabpanel" aria-labelledby="top-rated-tab" tabIndex={0}>
                            <div className="row d-none d-md-flex">
                                {topRatedMovies.map((movie, index) =>
                                    <Movie key={index} movieData={movie} />
                                )}
                            </div>
                            <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                    {topRatedMovies.map((movie, index) => {
                                        return <Movie key={index} movieData={movie} />
                                    }
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="upcoming-tab-pane" role="tabpanel" aria-labelledby="upcoming-tab" tabIndex={0}>
                            <div className="row d-none d-md-flex">
                                {upcomingMovies.map((movie, index) =>
                                    <Movie key={index} movieData={movie} />
                                )}
                            </div>
                            <div className="small-devices-slider d-block d-md-none">
                                <OwlCarousel className="slider-items owl-carousel" {...options}>

                                    {upcomingMovies.map((movie, index) => {
                                        return <Movie key={index} movieData={movie} />
                                    }
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
