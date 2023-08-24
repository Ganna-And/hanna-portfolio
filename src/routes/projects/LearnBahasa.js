import React from 'react';

const LearnBahasa =  ({img,setImg}) => {
   
  return (
    <>
       <section className='project-content'>

       <h2 className='project-title'>Learn-Bahasa: Language Flex-Cards App</h2>
  <p> This project was my own creation for persanal usage. Its a learning tool that consists of small cards with english-bahasa phrases on them, and 10 different topics to start your learning process</p>
  <p>Features:</p>
  <ul>
    <li> Data with 10 diverse topics with 10 prases on each saved in Firestore, available for all users</li>
    <li>  Ability to shift cards from the "Learned" category back to "Study" that gives more control over learning process.</li>
    <li> Authentication with Firebase sign up, login experience that enables you to add your own cards and change the state of all cards</li>
  </ul>
  <p>Technologies used: React, Recoil, Styed Components/React-Bootstrap, Firebase Authentication & Firestore queriers</p>
  <div className='links'>
  <p>Live version <a href="learn-bahasa-git-master-ganna-and.vercel.app">here</a></p> 
  <p>Link to github <a href="https://github.com/Ganna-And/learn-bahasa">here</a></p>       
  </div>       
   </section>
        </>
  )
}

export default LearnBahasa

