import React from 'react'

export default function ComingSoon() {
  return (
    <div className='coming-soon'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9 col-lg-7">
              <div className="item">
                <h1>coming soon</h1>
                <p>We are working hard to get back to you</p>
                <div className="nofication-me mt-5">
                  <h4>nofication me</h4>
                  <div className="input d-flex align-items-center rounded-pill">
                    <input type="email" placeholder='Enter your e-mail' className='rounded-pill' />
                    <input type="submit" value="submit"  className='rounded-pill'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-5">
              <div className="item">
                <img src="assets/images/coming-soon.png" alt="" className='w-100'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
