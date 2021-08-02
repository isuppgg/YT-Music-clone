import React from 'react';

const NextSong = () => {
   const handleNextSong = e => {
      e.stopPropagation();
   };

   return (
      <button onClick={handleNextSong}>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            style={{ fill: '#fff' }}
         >
            <path d='M7 7v10l7-5zm9 10V7h-2v10z'></path>
         </svg>
      </button>
   );
};

export default NextSong;
