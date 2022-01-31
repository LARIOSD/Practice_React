/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';
import GifGridItem from './GifGridItem';
import useFetchGists from '../hooks/useFetchGifs';

export default function GifGrid({ category }) {
  const { data : images, loading } = useFetchGists(category);

  return (
    <>
      <h3 className="card animate__animated animate__pulse">{category}</h3>

      {loading && <p className="card animate__animated animate__flash">Loading...</p>}

      <div className="card-grid">
        {images.map((img) => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
