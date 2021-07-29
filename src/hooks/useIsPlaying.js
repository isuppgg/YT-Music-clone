import { useState } from 'react';

export const useIsPlaying = () => {
   const [isPlaying, setIsPlaying] = useState(false);

   const play = () => setIsPlaying(true);

   const pause = () => setIsPlaying(false);

   return {
      isPlaying,
      play,
      pause,
   };
};
