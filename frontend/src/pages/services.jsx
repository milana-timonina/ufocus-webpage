import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Offer from '../components/Offer/Offer'

const services = () => {
    return (
        <>
          <div className='services'>
          <Navbar/>
            <Offer/>
          </div>
          <Footer/>
        </>
      )
    }

export default services