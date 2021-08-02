import React, { useState } from 'react';
import { useIsPlaying } from '../../hooks/useIsPlaying';
import PrevSong from './PrevSong';
import PausePlayBtn from './PausePlayBtn';
import NextSong from './NextSong';
import Info from './Info';
import './reproductor.css';
import RightControls from './RightControls';

const Reproductor = ({ changeVisibility }) => {
   const { isPlaying, play, pause } = useIsPlaying();

   return (
      <div className='reproductor-wrapper' onClick={changeVisibility}>
         <div id='left-controls'>
            <PrevSong />
            <PausePlayBtn isPlaying={isPlaying} play={play} pause={pause} />
            <NextSong />
         </div>
         <div>
            <Info />
         </div>
         <div>
            <RightControls showModal={changeVisibility} />
         </div>
      </div>
   );
};

export default Reproductor;
