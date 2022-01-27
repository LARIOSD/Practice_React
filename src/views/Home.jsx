import React from 'react';
import Navbar from '../components/navbar/Navbar';
import MenuItems from '../components/navbar/MenuItems/MenuItems';
function Home() {
  const page = 'Pagina Principal';
  return (
    <>
      <Navbar />
      <span>{page}</span>
    </>
  );
}
export default Home;
