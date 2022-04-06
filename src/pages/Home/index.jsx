/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'Anime', 'Kimetsu', 'Pocoyo'];

export default function Home() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (evt) => {

  };

  const handleChage = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form>
        <input onChange={handleChage} type="text" value={keyword} />
      </form>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
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
