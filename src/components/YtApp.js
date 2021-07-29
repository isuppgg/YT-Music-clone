import React from 'react';
import Navbar from './Navbar/Navbar';
import Reproductor from './Reproductor/Reproductor';
import AppRouter from './routers/AppRouter';

const YtApp = () => {
   return (
      <div className='container'>
         <Navbar />
         <AppRouter />
         <Reproductor />
      </div>
   );
};

export default YtApp;
