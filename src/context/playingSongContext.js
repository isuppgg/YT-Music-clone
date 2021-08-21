import React, { createContext, useState } from 'react';

const playingSongContext = createContext();

const PlayingSongProvider = ({ children }) => {
   const [isPlaying, setIsplaying] = useState(false);

   const play = e => {
      e.stopPropagation();
      setIsplaying(true);
   };
   const pause = e => {
      e.stopPropagation();
      setIsplaying(false);
   };

   const data = {
      isPlaying,
      play,
      pause,
   };

   return (
      <playingSongContext.Provider value={data}>
         {children}
      </playingSongContext.Provider>
   );
};

export default PlayingSongProvider;
export { playingSongContext };
