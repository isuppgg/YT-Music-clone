import React from 'react';

const PlayBtn = ({ startPlaying }) => {
   return (
      <button onClick={startPlaying}>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            style={{ fill: '#fff' }}
         >
            <path d='M7 6v12l10-6z'></path>
         </svg>
      </button>
   );
};

export default PlayBtn;
