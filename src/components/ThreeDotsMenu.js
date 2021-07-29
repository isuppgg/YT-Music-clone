import React from 'react';

const ThreeDotsMenu = ({ hover, transparent = true }) => {
   return (
      <button className={`options-item ${hover && 'item-hover'}`}>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={`${transparent && 'transparent'}`}
         >
            <path d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
         </svg>
      </button>
   );
};

export default ThreeDotsMenu;
