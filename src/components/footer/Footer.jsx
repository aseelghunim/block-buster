import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row pb-5">
          <div className="col-md-3">
            <div className="item">
              <img src="assets/images/logo.png" alt="" />
              <p className='address'>5th Avenue st, manhattan <br />New York, NY 10001</p>
              <p>call us <a href="tel:(+01) 202 342 6789" >(+01) 202 342 6789</a></p>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 offset-lg-0">
            <div className="item">
              <h4>resources</h4>
              <ul>
              <li><a href="">about</a></li>
              <li><a href="">blockbuster</a></li>
              <li><a href="">contact us</a></li>
              <li><a href="">forums</a></li>
              <li><a href="">blog</a></li>
              <li><a href="">help center</a></li>
            </ul>
            </div>
            
          </div>
          <div className="col-md-2 offset-md-1 offset-lg-0">
          <div className="item">
              <h4>legal</h4>
              <ul>
              <li><a href="">terms of use</a></li>
              <li><a href="">privacy policy</a></li>
              <li><a href="">security</a></li>
            </ul>
            </div>
          </div>
          <div className="col-md-2 offset-md-1 offset-lg-0">
          <div className="item">
              <h4>account</h4>
              <ul>
              <li><a href="">my account</a></li>
              <li><a href="">watchlist</a></li>
              <li><a href="">collections</a></li>
              <li><a href="">user guide</a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="item newsletter">
              <h4>newsletter</h4>
              <p>Subscribe to our newsletter system now to get latest news from us.</p>
              <div className="newsletter-input position-relative">
                <input type="email" name="" id="" placeholder='Enter Your Email...' />
                <i class="fa-regular fa-envelope position-absolute"></i>
              </div>
              <a href="" className='subscribe-now'>subscribe now</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p className='mb-0'>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
        </div>
      </div>
    </div>
  )
}
