/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import './style.css';

const POPULAR_GIFS = ['Matrix', 'Anime', 'Kimetsu', 'Pocoyo'];

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChage = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Search">
          Search
          <input id="Search" placeholder="Search a gif here..." onChange={handleChage} type="text" value={keyword} />
        </label>
      </form>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li className="list" key={popularGif}>
            <Link className="link" to={`/search/${popularGif}`}>
              Gifs de
              {' '}
              {popularGif}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
