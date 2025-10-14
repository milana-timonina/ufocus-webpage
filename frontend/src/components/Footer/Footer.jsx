import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_white} alt="" />
                <p>At U-Focus, we offer high-quality tutoring services designed to help students excel in their academic pursuits. Our team consists of experienced tutors from top universities, each with at least three years of teaching experience. We provide personalized and effective lessons in a variety of subjects to meet the diverse needs of our students.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_white} alt='facebook' />
                    <img src={assets.instagram_white} alt='instagram' />
                </div>
            </div>

            <div className="footer-content-center">
                <h3>COMPANY</h3>
                <ul>
                  <li>
                    <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>About us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/prices" onClick={() => window.scrollTo(0, 0)}>Prices</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts" onClick={() => window.scrollTo(0, 0)}>Contacts</NavLink>
                  </li>
                </ul>
            </div>

            <div className="footer-content-right">
              <h3>GET IN TOUCH</h3>
              <ul>
                <li>+1-271-567-856</li>
                <li>ufocus.education@gmail.com</li>
              </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024. Ufocus Team </p>
    </div>
  )
}

export default Footer
