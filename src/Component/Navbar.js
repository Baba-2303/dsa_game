import React from 'react'
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <header>
      <div className="navbar">
        <nav>
          <div className="logo"><Link to="index.html"><img src="images/logo.jpg" alt="" /><span>DSA Arena</span></Link>
          </div>
          <div id="nav-links">
            <Link to='/'>Home</Link>
            <Link to="/">Learn</Link>
            <Link to="/">About</Link>
            <Link to="/">Login</Link>
          </div>
          <form className="signin">
            <input type="search" placeholder="Search..." />
            <button><img src="images/seach icon.png" alt="" /></button>
          </form>
          <button id="nav-menu" ><img src="images/menu-rounded.png" alt="" /></button>
        </nav>
      </div >
    </header >
  )
}

export default navbar