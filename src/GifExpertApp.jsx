import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h3>GifExpertApp</h3>
      <AddCategory setCategories={setCategories} />
      <hr />
      { categories.map((category) => <GifGrid key={category} category={category} />) }
    </>
  );
}

export default GifExpertApp;
