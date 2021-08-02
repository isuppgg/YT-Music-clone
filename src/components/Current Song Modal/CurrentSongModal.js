import React from 'react';
import './current-song-modal.css';

const CurrentSongModal = ({ isOpen }) => {
   const preventPropagation = e => {
      e.stopPropagation();
   };
   return (
      <div
         className={`modal-overlay${isOpen ? ' visible' : ''}`}
         onClick={preventPropagation}
      >
         <div className='main-content modal-content-wrapper'>
            <div className='left'>
               <div className='thumbnail-wrapper'>
                  <img src='https://placeimg.com/500/500/any' alt='' />
               </div>
            </div>
            <div className='right'>Hola como estas</div>
         </div>
      </div>
   );
};

export default CurrentSongModal;
