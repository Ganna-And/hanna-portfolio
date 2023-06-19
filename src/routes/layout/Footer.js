import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear()
  return (
    <footer>
      <p>Copytext &copy; {date} </p>
    </footer>
  )
}

export default Footer
