import React from 'react';
import InfoText from './InfoText';
import Options from '../Options';
import '../options.css';

const Info = () => {
   return (
      <div className='reproductor__info-song'>
         <div className='thumbnail'>
            <img
               src='https://lh3.googleusercontent.com/-LQ9U3M24vS9KyGUkG_kiTdNF5J9RckMcUwDBAdF7Sj5dN39SO1apKL7dq6zblUQ8XZnO05lqq8e9lbdSw=w226-h226-l90-rj'
               alt=''
            />
         </div>
         <InfoText />
         <Options hover />
      </div>
   );
};

export default Info;
