import React from 'react';
import './Prices.css';
import { assets } from '../../assets/assets';

const Prices = () => {
  return (
    <div className="packages-container">
      <h1>Prices and Packages</h1>
      {/* Package 1: Basic */}
      <div className="package-block">
        <div className="package-header">PACKAGE NO 1: BASIC</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.variety_of_services} alt="Package 1" />
          </div>
          <div className="package-details">
            <p>
              This service compilation is perfect for a student who has already chosen
              universities to apply to.
            </p>
            <ul>
              <li>Admissions Strategy Planning</li>
              <li>College essay Refinement</li>
              <li>Resume Review and Guidance</li>
              <li>Interview Preparation</li>
              <li>Entrance Exam Preparation (can be substituted with other International examinations)</li>
              <li>5 Tutoring lessons in any subject</li>
            </ul>
            <div className="package-price">
              650 EUR <span>(Up to 6 universities, each additional 100 EUR)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Package 2: High School */}
      <div className="package-block">
        <div className="package-header">PACKAGE NO 2: HIGH SCHOOL (GRADE 9-11)</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.high_school} alt="Package 2" />
          </div>
          <div className="package-details">
            <ul>
              <li>“University Match”</li>
              <li>Admissions Strategy Planning (can be substituted with Timeline Management)</li>
              <li>Resume Review and Guidance</li>
              <li>Volunteering Experience Counseling</li>
              <li>5 Tutoring lessons in any subject</li>
              <li>Personalized workshops on leadership</li>
            </ul>
            <div className="package-price">500 EUR</div>
          </div>
        </div>
      </div>

      {/* Package 3: Extra-curricular */}
      <div className="package-block">
        <div className="package-header">Package no 3: Extra-curricular</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.extra_curricular} alt="Package 3" />
          </div>
          <div className="package-details">
            <ul>
              <li>Guidance</li>
              <li>Admissions Strategy Planning (can be substituted with Timeline Management)</li>
              <li>Resume Review and Guidance</li>
              <li>Volunteering Experience Counseling</li>
            </ul>
            <div className="package-price">250 EUR</div>
          </div>
        </div>
      </div>


      {/* Package no 4: Academic Guidance */}
      <div className="package-block">
        <div className="package-header">Package no 4: Academic Guidance</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.academic_guidance} alt="Package 4" />
          </div>
          <div className="package-details">
            <ul>
              <li>“University Match”</li>
              <li>Admissions Strategy Planning</li>
              <li>College Essay Refinement</li>
              <li>Interview Preparation</li>
              <li>Entrance Exam Preparation</li>
              <li>Application Review</li>
              <li>5 Tutoring lessons in any subject</li>
            </ul>
            <div className="package-price">700 EUR
            <span>(Up to 6 universities, each additional 100 EUR)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Package no 5: U-Focus */}
      <div className="package-block">
        <div className="package-header">Package no 5: U-Focus</div>
        <div className="package-content">
          <div className="package-image">
            <img src={assets.u_focus} alt="Package 5" />
          </div>
          <div className="package-details">
            <ul>
              <li>“University Match”</li>
              <li>Admissions Strategy Planning</li>
              <li>College Essay Refinement</li>
              <li>Letters of Recommendation Development</li>
              <li>Resume Review and Guidance</li>
              <li>Volunteering Experience Counseling</li>
              <li>Interview Preparation</li>
              <li>Entrance Exam Preparation</li>
              <li>Application Review</li>
              <li>7 Tutoring lessons in any subject</li>
              <li>Moving Abroad Services</li>
            </ul>
            <div className="package-price">1500 EUR
            <span>(Up to 8 universities, each additional 100 EUR)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-price">

      <button type="submit" className="buying-button">
            BUY YOUR PACKAGE!
      </button>

      <button type="submit" className="submit-button1">
            BOOK A FREE CONSULTATION!
      </button>

      </div>
    </div>
  );
};

export default Prices;
