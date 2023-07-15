import React from 'react';
import './Buffering.css';

const Buffering = () => {
  return (
    <div className='flex justify-center items-center flex-col mt-8'>
        <div className='custom-loader'></div>
        <p>Loading Products...</p>
    </div>
  )
}

export default Buffering