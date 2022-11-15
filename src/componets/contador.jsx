import React from 'react';
import '../styles/contador.css';

export function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}