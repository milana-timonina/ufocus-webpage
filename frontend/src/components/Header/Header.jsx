import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets' 


const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>
        We <span className="highlight-text">empower</span> scholars during every step of the university admissions process.
        </h2>
        <button>BOOK A FREE CONSULTATION!</button>
        <div className="social-media-icons">
          <img src={assets.instagram_icon} alt="Instagram" className="icon" />
          <img src={assets.facebook_icon} alt="Facebook" className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Header
