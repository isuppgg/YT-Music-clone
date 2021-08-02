import React from 'react';
import { useModal } from '../hooks/useModal';
import CurrentSongModal from './Current Song Modal/CurrentSongModal';
import Reproductor from './Reproductor/Reproductor';
import AppRouter from './routers/AppRouter';

const YtApp = () => {
   const [
      isOpenCurrentSongModal,
      changeVisibilityCurrentSong,
      closeCurrentSongModal,
   ] = useModal();

   return (
      <div className='container'>
         <AppRouter />
         <Reproductor changeVisibility={changeVisibilityCurrentSong} />
         <CurrentSongModal isOpen={isOpenCurrentSongModal} />
      </div>
   );
};

export default YtApp;
