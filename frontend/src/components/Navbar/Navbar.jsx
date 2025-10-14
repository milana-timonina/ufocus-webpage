import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [language, setLanguage] = useState('ENG');
  
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
  
    return (
      <div className='navbar'>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}><img src={assets.logo} className='logo' alt='Logo' /></NavLink>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/" exact activeClassName="active" onClick={() => window.scrollTo(0, 0)}>About us</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/prices" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Prices</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" activeClassName="active" onClick={() => window.scrollTo(0, 0)}>Contacts</NavLink>
          </li>
        </ul>
        <div className='navbar-right'>
          <div className="language-selector">
            <select
              id="language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="ENG">ENG</option>
              <option value="RUS">RUS</option>
              <option value="LV">LV</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

export default Navbar;
