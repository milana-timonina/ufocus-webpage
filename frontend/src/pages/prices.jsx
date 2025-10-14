import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Prices from '../components/Prices/Prices'
import Separate from '../components/Separate/Separate'
import List from '../components/List/List'
import PurchaseForm from '../components/PurchaseForm/PurchaseForm'

const cena = () => {
    return (
        <>
          <div className='cena'>
          <Navbar/>
            <Prices/>
            <Separate/>
            <List/>
            <PurchaseForm/>
          </div>
          <Footer/>
        </>
      )
    }

export default cena