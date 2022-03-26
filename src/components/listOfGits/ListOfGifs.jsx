/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Gif from '../gif/Gif';
import getGifs from '../../hooks/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((gifList) => setGifs(gifList));
  }, [keyword]);

  return (
    <>
      {gifs.map(({ title, id, url }) => (
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      ))}
    </>
  );
}
