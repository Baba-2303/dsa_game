import React from 'react';
import { Link } from 'react-router-dom';

function Card1({ imageurl, title, desc }) {
  
  return (
    <>
      <div class="news-con">
        <div class="card-news-img" style={{ backgroundImage: `url(${imageurl})` }}></div>
        <div class="card-news-main">

          <h3>{title}</h3>
          <p>{desc}</p>
          <Link to="/binarysearch" className="btn btn-primary btn-lg" role='button'>Let's Go!</Link>
        </div>
      </div>
    </>
  )
}

export default Card1
