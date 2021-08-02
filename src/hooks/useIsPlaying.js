import { useState } from 'react';

export const useIsPlaying = () => {
   const [isPlaying, setIsPlaying] = useState(false);

   const play = e => {
      e.stopPropagation();
      setIsPlaying(true);
   };

   const pause = e => {
      e.stopPropagation();
      setIsPlaying(false);
   };

   return {
      isPlaying,
      play,
      pause,
   };
};
