import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Cv = () => {
  return (
    <main className='container'>
      cv
      <FaArrowAltCircleLeft/><Link to="/">HOME</Link> 
    </main>
  )
}

export default Cv
