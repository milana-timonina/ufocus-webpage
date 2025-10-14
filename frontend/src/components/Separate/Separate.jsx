import React from 'react';
import './Separate.css';
import { assets } from '../../assets/assets';


const Separate = () => {
    return (
        <div className="package-container">
        <hr></hr>
        <h1>Separate Options and Prices</h1>
        {/* separate */}
        <div className="package-block">
          <div className="package-content">
            <div className="package-details">
              <p>
              Addition that takes to the Tutoring services page
              </p>
              <ul>
                <li>Academic evaluation and feedback</li>
                <li>Tutoring Service twice a week in selected subjects</li>
              </ul>
              <div className="package-price">
              150 eur/ month
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Separate;