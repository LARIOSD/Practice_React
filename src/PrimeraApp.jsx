import React from 'react';
import { Link, Route } from 'wouter';
import imgGif from './img/gif.png';
import ListOfGifs from './components/listOfGits/ListOfGifs';

import './PrimeraApp.css';

function PrimeraApp() {
  return (
    <div className="App">
      <section className="App-content">
        <img className="gifLogo" alt="Figgy log" src={imgGif} />
        <Link to="/gif/kimetsunoyaiba">Gifs kimetsunoyaiba</Link>
        <Link to="/gif/anime">Gifs anime</Link>
        <Link to="/gif/rick">Gifs rick</Link>
        <Link to="/gif/panda">Gifs panda</Link>
        <h1>App</h1>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default PrimeraApp;
