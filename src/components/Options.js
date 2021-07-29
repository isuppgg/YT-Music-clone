import React from 'react';
import Like from './Like';
import Dislike from './Dislike';
import ThreeDotsMenu from './ThreeDotsMenu';

const Options = ({ hover }) => {
   return (
      <div className='options-container'>
         <Dislike hover />
         <Like hover />
         <ThreeDotsMenu hover />
      </div>
   );
};

export default Options;
