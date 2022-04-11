/* eslint-disable react/prop-types */
import React from 'react';
import Gif from '../Gif/Gif';

import './style.css';

export default function ListOfGifs({ gifs }) {
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
