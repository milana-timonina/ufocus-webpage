import React from 'react';
import './WhyChooseUs.css';
import { assets } from '../../assets/assets';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>WHY CHOOSE US?</h2>
      <div className="section">
        <img src={assets.personalized_approach} alt="Personalized Approach" />
        <div>
          <h3>Personalized Approach</h3>
          <p>
            We cherish each of our students and acknowledge that each student's journey to university is unique. We work hard to develop personalized plans and approach to achieve the highest potential. That's why we offer a variety of personalized service packages tailored to your specific needs, strengths, and aspirations. We are here to guide you every step of the way!
          </p>
        </div>
      </div>
      <div className="section">
        <img src={assets.insightful_tutoring} alt="Insightful Tutoring" />
        <div>
          <h3>Insightful Tutoring</h3>
          <p>
            Achieving academic excellence requires more than just hard work—it requires insightful guidance from experienced tutors who can offer fresh perspectives. Our tutoring team is composed of knowledgeable, dynamic individuals who are committed to helping you excel in your studies and beyond.
          </p>
        </div>
      </div>
      <div className="section">
        <img src={assets.unique_team} alt="Unique Team" />
        <div>
          <h3>Unique Team</h3>
          <p>
            At U-Focus, we believe that the best guidance comes from those who have successfully navigated the path themselves. Our unique team consists of inspired students from top universities who bring fresh perspectives, firsthand experience, and a deep passion for helping others achieve their academic dreams.
          </p>
        </div>
      </div>
      <div className="section">
        <img src={assets.variety_of_services} alt="Variety of Services" />
        <div>
          <h3>Variety of Services</h3>
          <p>
            U-Focus has developed numerous services for students to improve every aspect of their application, including academic performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
