import React from 'react';
import PlayingSongProvider from '../context/playingSongContext';
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
      <PlayingSongProvider>
         <div className='container'>
            <AppRouter />
            <Reproductor changeVisibility={changeVisibilityCurrentSong} />
            <CurrentSongModal isOpen={isOpenCurrentSongModal} />
         </div>
      </PlayingSongProvider>
   );
};

export default YtApp;
