import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from './header/Navbar';

const Layout = () => {
  return (
    <div className='App'>
     <Navbar />
      <Outlet />   
    </div>
  )
}

export default Layout;
