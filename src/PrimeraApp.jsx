import React from 'react';
import ListOfGifs from './components/listOfGits/ListOfGifs';

import './index.css';

function PrimeraApp() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="anime" />
      </section>
    </div>
  );
}

export default PrimeraApp;
