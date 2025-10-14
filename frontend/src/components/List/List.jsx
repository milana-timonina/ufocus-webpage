import React from 'react';
import './List.css';


const List = () => {
    return (
        <div className="services-container">
        <ul>
          <li>"University Match" <strong>130 EUR</strong></li>
          <li>Admissions Strategy Planning (1-3 universities) <strong>110 EUR</strong> (each additional <strong>25 EUR</strong>)</li>
          <li>College Essay Refinement <strong>110 EUR</strong></li>
          <li>Resume Review and Guidance <strong>100 EUR</strong></li>
          <li>Volunteering Experience Counseling <strong>100 EUR</strong></li>
          <li>Interview Preparation <strong>130 EUR</strong></li>
          <li>Entrance Exam Preparation <strong>200 EUR</strong></li>
          <li>Application Review (1 university) <strong>50 EUR</strong></li>
          <li>Application Review (3 universities) <strong>100 EUR</strong></li>
          <li>Application Review (5 universities) <strong>150 EUR</strong></li>
          <li>Moving Abroad Services from <strong>100 EUR</strong></li>
          <li>1 Tutoring lesson in any subject <strong>25 EUR</strong></li>
          <li>5 Tutoring lessons in any subject <strong>100 EUR</strong></li>
        </ul>
      </div>
  );
};

export default List;

