import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props) {
  let prefix = "https://image.tmdb.org/t/p/w500";
  let error = '../../assets/images/error.webp';

  return (
   
       
            <div className="item col-md-4 col-lg-2 movie mb-5">
                <div className="image-holder">
                    <img src={props.movieData.poster_path?prefix+props.movieData.poster_path:error} alt="" className='w-100'loading="lazy"/>
                    <Link className='read-more rounded-pill' to={`/movies/${props.movieData.id}`}>read more</Link>
                </div>
                <h4 className='movie-name'>{props.movieData.title}</h4>
                <div className="review">
                    <span><i class="fa-solid fa-star"></i>{props.movieData.vote_average}/10</span>
                </div>
            </div>
    
  )
}
