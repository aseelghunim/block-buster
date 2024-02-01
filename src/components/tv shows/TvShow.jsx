import React from 'react';
import { Link } from 'react-router-dom';

export default function TvShow(props) {
    let prefix = "https://image.tmdb.org/t/p/w500";
    let error = '../../assets/images/error.webp';
  
    return (
     
          <div className="col-md-4 col-lg-2 tv-show mb-5">
              <div className="item">
                  <div className="image-holder">
                      <img src={props.tvShowData.poster_path?prefix+props.tvShowData.poster_path:error} alt="" className='w-100' loading="lazy"/>
                      <Link className='read-more rounded-pill' to={`/tvshows/${props.tvShowData.id}`}>read more</Link>
                  </div>
                  <h4 className='movie-name'>{props.tvShowData.name}</h4>
                  <div className="review">
                      <span><i class="fa-solid fa-star"></i>{props.tvShowData.vote_average}/10</span>
                  </div>
              </div>
          </div>
    )
}
