import React from 'react';
import PauseBtn from './PauseBtn';
import PlayBtn from './PlayBtn';

const PausePlayBtn = ({ isPlaying, play, pause }) => {
   return (
      <>
         {isPlaying ? (
            <PauseBtn stopPlaying={pause} />
         ) : (
            <PlayBtn startPlaying={play} />
         )}
      </>
   );
};

export default PausePlayBtn;
