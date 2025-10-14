import React from 'react';
import './Number.css';
import { assets } from '../../assets/assets';

const Number = () => {
        return (
          <div className="contacts">
            <h2>Contacts</h2>
            <div className="contact-item">
            <img src={assets.instagram_icon} alt='Instagram' />
              <span className="contact-name">u-focus</span>
            </div>
            <div className="contact-item">
            <img src={assets.facebook_icon} alt='Facebook' />
              <span className="contact-name">u-focus</span>
            </div>
            <p>If there are left any unanswered question, reach us via our e-mail: ufocus.education@gmail.com</p>
            <p>Approximate time of the replies is 1 day.</p>

          </div>
        );
      };
      
export default Number
