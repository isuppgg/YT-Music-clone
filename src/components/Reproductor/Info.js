import React from 'react';
import InfoText from './InfoText';
import Options from '../Options';
import '../options.css';

const Info = () => {
   return (
      <div className='reproductor__info-song'>
         <div className='thumbnail'></div>
         <InfoText />
         <Options hover />
      </div>
   );
};

export default Info;
