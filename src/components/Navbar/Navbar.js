import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import oswaldogg from '../../assets/oswaldogg.jpg';
import './navbar.css';
import OswaldoLinks from '../Oswaldo_SM/OswaldoLinks';

const Navbar = () => {
   const [scrollY, setScrollY] = useState(0);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const detectarScroll = () => setScrollY(window.pageYOffset);

      window.addEventListener('scroll', detectarScroll);
   }, [scrollY]);

   const changeVisible = () => setVisible(!visible);

   return (
      <div className={`navbar-wrapper ${scrollY !== 0 && 'nav-active'}`}>
         <Link to='/'>
            <img
               src='https://music.youtube.com/img/on_platform_logo_dark.svg'
               alt=''
            />
         </Link>
         <nav>
            <NavLink
               exact
               to='/'
               className='nav-item transparent'
               activeClassName='active'
            >
               Inicio
            </NavLink>
            <NavLink
               exact
               to='/explore'
               className='nav-item transparent'
               activeClassName='active'
            >
               Explorar
            </NavLink>
            <NavLink
               exact
               to='/biblioteca'
               className='nav-item transparent'
               activeClassName='active'
            >
               Biblioteca
            </NavLink>
            <NavLink
               exact
               to='/search'
               className='nav-item transparent'
               activeClassName='active'
            >
               Buscar
            </NavLink>
         </nav>
         <div className='user' onClick={changeVisible}>
            <img src={oswaldogg} alt='' />
         </div>
         <OswaldoLinks visible={visible} />
      </div>
   );
};

export default Navbar;
