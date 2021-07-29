import React from 'react';
import { useIsPlaying } from '../../hooks/useIsPlaying';
import PrevSong from './PrevSong';
import PausePlayBtn from './PausePlayBtn';
import NextSong from './NextSong';
import Info from './Info';
import './reproductor.css';
import RightControls from './RightControls';

const Reproductor = () => {
   const { isPlaying, play, pause } = useIsPlaying();

   return (
      <div className='reproductor-wrapper'>
         <div id='left-controls'>
            <PrevSong />
            <PausePlayBtn isPlaying={isPlaying} play={play} pause={pause} />
            <NextSong />
         </div>
         <div>
            <Info />
         </div>
         <div>
            <RightControls />
         </div>
      </div>
   );
};

export default Reproductor;
