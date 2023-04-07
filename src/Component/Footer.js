import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="foot-news">
          <h3>Subscribe to our Newsletter</h3>
          <form action="">
            <input type="email" id="email" name="email" placeholder="Enter your Email" />
            <input type="submit" value="Subscribe" id="email-btn" />
          </form>
        </div>
        <div className="foot-main">
          <div className="foot-main-img">
            <img src="images/instagram icon.png" alt="" />
            <img src="images/facebook icon.png" alt="" />
            <img src="images/twitter icon.png" alt="" />
            <img src="images/youtube-icon.png" alt="" />
          </div>
          <p>Copyright © 2023 All rights reserved | made by Rajkamal Yadav</p>
          <p>Terms & Conditions/ Privacy Policy</p>
        </div>
      </footer>
    </>
  )
}

export default Footer