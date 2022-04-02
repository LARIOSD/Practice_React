/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Gif from '../gif/Gif';
import getGifs from '../../hooks/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifList) => {
      setGifs(gifList);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) {
    return <i>...Loading</i>;
  }

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
