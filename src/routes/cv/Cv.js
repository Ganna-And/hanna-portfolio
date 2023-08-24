import React from 'react';
import CV from '../../img/My CV.pdf.png';
import CVPDF from '../../img/CV.PDF.pdf'
import './Cv.css'

const Cv = ({isChecked}) => {
  return (
    <main className='container'>
      <section  className='cv-box'>
      <img className='cv' src={CV} alt='my cv' />
      <h3>Click <a href={CVPDF} download>here</a> to dowload</h3>
      </section>
    </main>
  )
}

export default Cv
