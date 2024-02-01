import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SingleTvShowPage() {
    let [tvShow, setTvShow] = useState({});
    let [tvShowReviews, setTvShowReviews] = useState([]);
    let [similarTvShows, setSimilarTvShows] = useState([]);
    let [reviewsCount, setReviewsCount] = useState(0);
    let [similarsCount, setSimilarsCount] = useState(0);
    let [isLoading, setIsLoading] = useState(true);
    let params = useParams();
    let prefix = "https://image.tmdb.org/t/p/w500";

    let avatar = '../../assets/images/blank-avatar.webp';
    let error = '../../assets/images/error.webp';
    async function getTvShowDetails() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setTvShow(data);
        setIsLoading(false);
    }
    async function getTvShowReviews() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}/reviews?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setTvShowReviews(data.results);
        setReviewsCount(data.total_results);
    }
    async function getSimilarMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=55d89c63bf180c9c81dff2035d1a659e&language=en-US`);
        setSimilarTvShows(data.results);
        setSimilarsCount(data.total_results);

    }
    useEffect(() => {
        getTvShowDetails();
        getTvShowReviews();
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
            <div className='single-tv-show-page'>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="item">
                                <img src={prefix + tvShow.poster_path} alt="" className='w-100 tv-show-main-image' />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="right-content ms-5">
                                <h1>{tvShow.name}</h1>
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
                                            <button className="nav-link" id="nav-related-movies-tab" data-bs-toggle="tab" data-bs-target="#nav-related-movies" type="button" role="tab" aria-controls="nav-related-movies" aria-selected="false">related tv shows</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <p className='overview-para'>{tvShow.overview? tvShow.overview : "No overview"}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="info">
                                                        <div className="">
                                                            <p>popularity:</p>
                                                            <p>{tvShow.popularity}</p>
                                                        </div>
                                                        <div className="">
                                                            <p>created by:</p>
                                                            <p>

                                                                {tvShow.created_by.map(creator => {
                                                                    return <>
                                                                        <span className='me-2'>{creator.name}</span>
                                                                        <br />
                                                                    </>

                                                                })}</p>
                                                        </div>
                                                        <div className="genres">
                                                            <p>genres:</p>
                                                            <p>{tvShow.genres.map(gen => {
                                                                return <>
                                                                    <span className='me-2'>{gen.name}</span>
                                                                    <br />
                                                                </>
                                                            })}</p>
                                                        </div>
                                                        <div className="">
                                                            <p>number of seasons</p>
                                                            <p>{tvShow.number_of_seasons} seasons</p>
                                                        </div>
                                                        <div className="">
                                                            <p>number of episodes</p>
                                                            <p>{tvShow.number_of_episodes} episodes</p>
                                                        </div>

                                                        <div className="">
                                                            <p>episode run time:</p>
                                                            <p>{tvShow.episode_run_time} min</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-reviews" role="tabpanel" aria-labelledby="nav-reviews-tab" tabIndex={0}>
                                            <div className="row reviews">
                                                <p className='total-reviews'>found <span>{reviewsCount} reviews</span> in total</p>
                                                {tvShowReviews.map(tvShowReview => (
                                                    <div className="col-12 mb-5">
                                                        <div className="item">
                                                            <div className="reviewer-details">
                                                                <img src={tvShowReview.author_details.avatar_path ? prefix + tvShowReview.author_details.avatar_path : avatar} alt="" />
                                                                <div className="text">
                                                                    <h4 className='mb-0'>{tvShowReview.author_details.name ? tvShowReview.author_details.name : 'Unknown user'} <span>({tvShowReview.author_details.rating ? tvShowReview.author_details.rating : 10}/10)</span></h4>
                                                                    <p className="date mb-0">{tvShowReview.created_at}</p>
                                                                </div>
                                                            </div>
                                                            <p className="review-content">{tvShowReview.content}</p>
                                                        </div>
                                                    </div>
                                                )
                                                )}

                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-related-movies" role="tabpanel" aria-labelledby="nav-related-movies-tab" tabIndex={0}>
                                            <div className="row similar-movies">
                                                <p className='total-similar-movies'>found <span>{similarsCount} tv shows</span> in total</p>

                                                {similarTvShows.map(tvShow =>
                                                    <>
                                                        <div className="col-md-3 ">
                                                            <div className="item px-3">
                                                            <Link  to={`/tvshows/${tvShow.id}`}>

                                                                <img src={tvShow.poster_path ? prefix + tvShow.poster_path : error} alt="" className="w-100" />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 ps-lg-0">
                                                            <Link className='similar-title' to={`/tvshows/${tvShow.id}`}>{tvShow.name}</Link>
                                                            <p className='similar-rate'><i class="fa-solid fa-star"></i>{tvShow.vote_average}/10</p>
                                                            <p className='similar-overview'>{tvShow.overview ? tvShow.overview : 'no description'}</p>
                                                            <p className='similar-release'>released: {tvShow.first_air_date}</p>
                                                        </div>
                                                    </>


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

