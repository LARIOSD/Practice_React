/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getGifs from '../../hooks/getGifs';
import Spinner from '../../components/Spinner/Spinner';
import ListOfGifs from '../../components/ListOfGits/ListOfGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifList) => {
      setGifs(gifList);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    });
  }, [keyword]);

  return (
    <div>
      {/* <div>
        <button type="button" onClick={}> +1 </button>
      </div> */}

      {loading
        ? <Spinner loading={loading}/>
        : <ListOfGifs gifs={gifs} />}

    </div>
  );
}
