import React from 'react';
import { Link, Route } from 'wouter';
import imgGif from './img/gif.png';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import SearchResults from './pages/SearchResults/index';

import './PrimeraApp.css';

function PrimeraApp() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="gifLogo" alt="Figgy log" src={imgGif} />
        </Link>

        <Route path="/" component={Home} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/search/:keyword" component={SearchResults} />
      </section>
    </div>
  );
}

export default PrimeraApp;
