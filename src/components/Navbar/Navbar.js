import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
   return (
      <div className='navbar-wrapper'>
         <div>
            <img
               src='https://music.youtube.com/img/on_platform_logo_dark.svg'
               alt=''
            />
         </div>
         <div></div>
         <div></div>
         <div>Hola como estas</div>
      </div>
   );
};

export default Navbar;
