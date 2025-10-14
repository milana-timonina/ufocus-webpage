import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import About from '../About/About'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import ConsultationForm from '../ConsultationForm/ConsultationForm'

const Home = () => {
  console.log("Home component rendered");
  return (
    <div>
      <Header/>
      <About/>
      <WhyChooseUs/>
      <ConsultationForm/>
    </div>
  );
};

export default Home
