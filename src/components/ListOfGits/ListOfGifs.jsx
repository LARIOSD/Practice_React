/* eslint-disable react/prop-types */
import React from 'react';
import Gif from '../Gif/Gif';

import './style.css';

export default function ListOfGifs({ gifs }) {
  console.log('gifs', gifs);

  if (!gifs.length) {
    return (
      <div className="list">
        <h3 className="App-title">
          {' '}
          {gifs.length}
          {' '}
          Gifs encontrados
        </h3>
      </div>
    );
  }
  return (
    <div className="listGifs">
      {gifs.map(({ id, url }) => (
        <Gif
          id={id}
          key={id}
          url={url}
        />
      ))}
    </div>
  );
}
