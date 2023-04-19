import React from 'react'

export default function header() {
  return (
    <div className='header'>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="info">
              <span>sci-fi</span>
              <span>action</span>
              <span>adventure</span>
            </div>
            <h1>guardians of the galaxy</h1>
            <div className="links">
              <a href=""><i class="fa-solid fa-play"></i>watch trailer</a>
              <a href=""><i class="fa-solid fa-heart"></i>add to favorites</a>
              <a href=""><i class="fa-solid fa-share-nodes"></i>share</a>
            </div>
            <div className="review">
              <span><i class="fa-solid fa-star"></i>7.4/10</span>
              <ul>
                <li>run time: 2h 21m</li>
                <li>rated: pg-13</li>
                <li>release: 1 may 2015</li>
              </ul>
            </div>
            <a href="" className="more-details rounded-pill">more details</a>
          </div>
          <div className="col-4 d-none d-lg-block ">
            <div className="image-holder">
              <img src="assets/images/header.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
