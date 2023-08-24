import React from 'react';
import { Link } from 'react-router-dom';
import{GoHome} from 'react-icons/go';
import{AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {BsFilePdf} from 'react-icons/bs';

const ligth ={
    textDecoration: 'none',
    color: 'black',
    
}

const dark = {
    textDecoration: 'none',
    color: 'white'
}

const Nav = ({isChecked}) => {

  const isNotLaptop = window.matchMedia('(max-width: 767px)').matches;
  return (
    <div className='nav-head'>
       <ul className='ul-head'>
      <li className='li-head'><Link className='link-head' style={isChecked ? dark : ligth } to='/'>
        {isNotLaptop ? <GoHome style={isChecked ? dark : ligth}/> : 'HOME'}</Link></li>
      <li className='li-head'><Link className='link-head' style={isChecked ? dark : ligth} to='projects'>
      {isNotLaptop ? <AiOutlineFundProjectionScreen style={isChecked ? dark : ligth} /> : 'PROJECTS'}</Link></li>
      <li className='li-head'><Link className='link-head' style={isChecked ? dark : ligth} to='mycv'>
      {isNotLaptop ? <BsFilePdf style={isChecked ? dark : ligth}/> : 'MY CV'}</Link></li>
     </ul>
    </div>
  )
}

export default Nav
