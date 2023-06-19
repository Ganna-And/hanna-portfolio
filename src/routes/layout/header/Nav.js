import React from 'react';
import { Link } from 'react-router-dom';

const ligth ={
    textDecoration: 'none',
    color: 'black'
}

const dark = {
    textDecoration: 'none',
    color: 'white'
}

const Nav = ({isChecked}) => {

  return (
    <div className='nav-head'>
       <ul className='ul-head'>
      <li className='li-head'><Link style={isChecked ? dark : ligth} to='/'>HOME</Link></li>
      <li className='li-head'><Link style={isChecked ? dark : ligth} to='projects'>PROJECTS</Link></li>
      <li className='li-head'><Link style={isChecked ? dark : ligth} to='mycv'>MY CV</Link></li>
     </ul>
    </div>
  )
}

export default Nav
