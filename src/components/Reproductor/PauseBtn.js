import React from 'react';

const PauseBtn = ({ stopPlaying }) => {
   return (
      <button onClick={stopPlaying}>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            style={{ fill: '#fff' }}
         >
            <path d='M8 7h3v10H8zm5 0h3v10h-3z'></path>
         </svg>
      </button>
   );
};

export default PauseBtn;
