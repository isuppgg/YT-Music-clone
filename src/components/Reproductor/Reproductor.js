import React, { useContext } from 'react';
import PrevSong from './PrevSong';
import NextSong from './NextSong';
import Info from './Info';
import './reproductor.css';
import RightControls from './RightControls';
import { playingSongContext } from '../../context/playingSongContext';
import PauseBtn from './PauseBtn';
import MainPlayBtn from './MainPlayBtn';

const Reproductor = ({ changeVisibility }) => {
   const { isPlaying } = useContext(playingSongContext);

   return (
      <div className='reproductor-wrapper' onClick={changeVisibility}>
         <div id='left-controls'>
            <PrevSong />
            {isPlaying ? <PauseBtn /> : <MainPlayBtn />}
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
