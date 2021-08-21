import React from 'react';

const RightControls = ({ showModal }) => {
   const preventPropagation = e => {
      e.stopPropagation();
   };
   return (
      <div className='right-controls-wrapper'>
         <button id='show-range' onClick={preventPropagation}>
            <svg viewBox='0 0 24 24' className='transparent right-control-item'>
               <g className='style-scope tp-yt-iron-icon'>
                  <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'></path>
               </g>
            </svg>
         </button>
         <input
            type='range'
            name='volume'
            id='volume'
            max='100'
            onClick={preventPropagation}
         />
         <button onClick={preventPropagation}>
            <svg viewBox='0 0 24 24' className='transparent right-control-item'>
               <g>
                  <path d='M3 6.929c0-.75.643-1.393 1.393-1.393h14.286L16.32 3.179 17.5 2l4.393 4.393-4.393 4.393-1.179-1.179L18.68 7.25H4.714V11H3V6.929zM2.107 17.607L6.5 13.214l1.179 1.179L5.32 16.75l13.965-.071v-3.965H21V17c0 .75-.643 1.393-1.393 1.393l-14.286.071 2.358 2.357L6.5 22l-4.393-4.393z'></path>
               </g>
            </svg>
         </button>
         <button onClick={preventPropagation}>
            <svg viewBox='0 0 24 24' className='transparent right-control-item'>
               <g>
                  <path d='M16.808 4.655l2.069 1.978h-.527c-1.656 0-3.312.68-4.458 1.814L12.797 9.75l1.179 1.246 1.317-1.527c.764-.794 1.91-1.247 3.057-1.247h.55l-2.07 2.014 1.178 1.179 4.005-3.993-4.026-3.945-1.178 1.179zm1.974 10.998l-1.974-1.888 1.18-1.179 4.024 3.945-4.004 3.993-1.178-1.179 1.954-1.901h-.434c-1.656 0-3.312-.625-4.458-1.667L8.242 9.8C7.35 9.071 6.204 8.55 4.93 8.55H2l.006-1.794 2.965.003c1.784 0 3.312.521 4.459 1.563l5.904 6.185c.765.73 1.911 1.146 3.058 1.146h.39zm-9.02-2.092l-1.52 1.394c-.892.793-2.038 1.36-3.312 1.36H2v1.588h2.93c1.783 0 3.312-.567 4.459-1.701l1.537-1.396-1.164-1.245z'></path>
               </g>
            </svg>
         </button>
         <button
            onClick={() => {
               console.log(this);
               showModal();
            }}
         >
            <svg viewBox='0 0 24 24' className='transparent right-control-item'>
               <g>
                  <path d='M7 10l5 5 5-5z'></path>
               </g>
            </svg>
         </button>
      </div>
   );
};

export default RightControls;
