import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SingleMoviePage() {
    let [movie, setMovie] = useState({});
    let [isLoading, setIsLoading] = useState(true);
    let [movieReviews, setMovieReviews] = useState([]);
    let [similarMovies, setSimilarMovies] = useState([]);
    let [reviewsCount, setReviewsCount] = useState(0);
    let [similarsCount, setSimilarsCount] = useState(0);

    let params = useParams();
    console.log(params)
    let prefix = "https://image.tmdb.org/t/p/w500";

    let avatar = '../../assets/images/blank-avatar.webp';
    let error = '../../assets/images/error.webp';
    async function getMovieDetails() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setMovie(data);
        setIsLoading(false);
    }
    async function getMovieReviews() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setMovieReviews(data.results);
        setReviewsCount(data.total_results);
    }
    async function getSimilarMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setSimilarMovies(data.results);
        setSimilarsCount(data.total_results);

    }
    console.log(isLoading)
    useEffect(() => {
        getMovieDetails();
        getMovieReviews();
        getSimilarMovies();
        setIsLoading(true);
    }, [params.id]);


    if (isLoading) {
        return <div>
            <div className="loading">
                <span class="loader"></span>;
            </div>
        </div>
    }
    else {
        return (
            <div className='single-movie-page'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="item">
                                <img src={prefix + movie.poster_path} alt="" className='w-100 main-movie-image' />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="right-content ms-5">
                                <h1>{movie.title}</h1>
                                <div className="links">
                                    <a href=""><i class="fa-solid fa-heart"></i>add to favorites</a>
                                    <a href=""><i class="fa-solid fa-share-nodes"></i>share</a>
                                </div>
                                <div>
                                    <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <li>
                                            <button className="nav-link active" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">overview</button>
                                        </li>
                                        <li>
                                            <button className="nav-link" id="nav-reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab" aria-controls="nav-reviews" aria-selected="false">reviews</button>
                                        </li>
                                        <li>
                                            <button className="nav-link" id="nav-related-movies-tab" data-bs-toggle="tab" data-bs-target="#nav-related-movies" type="button" role="tab" aria-controls="nav-related-movies" aria-selected="false">related movies</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane  show active" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <p className='overview-para'>{movie.overview? movie.overview : "No overview"}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="info">
                                                        <div className="">
                                                            <p>popularity:</p>
                                                            <p>{movie.popularity}</p>
                                                        </div>
                                                        <div className="run-time">
                                                            <p>run time:</p>
                                                            <p>{movie.runtime} min</p>
                                                        </div>
                                                        <div className="genres">
                                                            <p>genres:</p>
                                                            <p>{movie.genres.map((gen,index) => {
                                                                return <Fragment key={index}>
                                                                    <span className='me-2'>{gen.name}</span>
                                                                    <br />
                                                                </Fragment>
                                                            }

                                                            )}</p>
                                                        </div>
                                                        <div className="release-date">
                                                            <p>release date:</p>
                                                            <p>{movie.release_date}</p>
                                                        </div>
                                                        <div className="">
                                                            <p>revenue:</p>
                                                            <p>${movie.revenue}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab" tabIndex={0}>
                                            <div className="row reviews">
                                                <p className='total-reviews'>found <span>{reviewsCount} reviews</span> in total</p>
                                                {movieReviews.map(movieReview => (
                                                    <div className="col-12 mb-5">
                                                        <div className="item">
                                                            <div className="reviewer-details">
                                                                <img src={movieReview.author_details.avatar_path ? prefix + movieReview.author_details.avatar_path : avatar} alt="" />
                                                                <div className="text">
                                                                    <h4 className='mb-0'>{movieReview.author_details.name ? movieReview.author_details.name : 'Unknown user'} <span>({movieReview.author_details.rating ? movieReview.author_details.rating : 10}/10)</span></h4>
                                                                    <p className="date mb-0">{movieReview.created_at}</p>
                                                                </div>
                                                            </div>
                                                            <p className="review-content">{movieReview.content}</p>
                                                        </div>
                                                    </div>
                                                )
                                                )}

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-related-movies" role="tabpanel" aria-labelledby="nav-related-movies-tab" tabIndex={0}>
                                            <div className="row similar-movies">
                                                <p className='total-similar-movies'>found <span>{similarsCount} movies</span> in total</p>

                                                {similarMovies.map(movie =>
                                                    <Fragment key={movie.id}>
                                                        <div className="col-md-3 ">
                                                            <div className="item px-3">
                                                            <Link to={`/movies/${movie.id}`}>

                                                                <img src={movie.poster_path ? prefix + movie.poster_path : error} alt="" className="w-100" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 ps-lg-0">
                                                            <Link className='similar-title' to={`/movies/${movie.id}`}>{movie.title}</Link>
                                                            <p className='similar-rate'><i class="fa-solid fa-star"></i>{movie.vote_average}/10</p>
                                                            <p className='similar-overview'>{movie.overview ? movie.overview : 'no description'}</p>
                                                            <p className='similar-release'>released: {movie.release_date}</p>
                                                        </div>
                                                    </Fragment>


                                                )}
                                            </div>
                                        </div>
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
