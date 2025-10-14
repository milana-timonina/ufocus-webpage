import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Number from '../components/Number/Number'

const Contacts = () => {
    return (
        <>
          <div className='Contacts'>
            <Navbar/>
            <Number />
          </div>
          <Footer/>
        </>
      )
    }

export default Contacts