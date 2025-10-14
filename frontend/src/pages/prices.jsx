import React from 'react';
import Footer from '../components/Footer/Footer';
import Prices from '../components/Prices/Prices';
import Separate from '../components/Separate/Separate';
import List from '../components/List/List';
import PurchaseForm from '../components/PurchaseForm/PurchaseForm';

export default function Cena() {
  return (
    <>
      <div className='cena'>
        <Prices />
        <Separate />
        <List />
        <PurchaseForm />
      </div>
      <Footer />
    </>
  );
}
