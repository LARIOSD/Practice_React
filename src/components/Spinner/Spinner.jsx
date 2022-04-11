import React from 'react';
import { PacmanLoader } from 'react-spinners';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="holis">
      <PacmanLoader
        color="#f30051"
        size={30}
        margin={2}
      />
    </div>
  );
}
