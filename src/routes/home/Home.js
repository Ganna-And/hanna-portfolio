import React, { useEffect, useRef } from 'react';
import './Home.css';
import {FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import { useState } from 'react';




const Home = () => {
const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Redux'];

 const [skillIndex, setSkillIndex] = useState(0);
 let skillRef = useRef(null);

useEffect(()=>{
const skillItem = skills[skillIndex];
let char = 0;
const autoType = setInterval(()=>{
  if(char <= skillItem.length){
  skillRef.current.innerText = `Currently working with:${skillItem.slice(0,char)}`;
  char++
} else{
  clearInterval(autoType);
  setTimeout(()=>{
    setSkillIndex(prev => (prev + 1)%skills.length)
  },1000)
}
},200)
return ()=>{
  clearInterval(autoType)
}
},[skillIndex, skillRef]);


  return (
    <div className='container'>
      <div className="phone">
        <div className="screen"> 
        <div className="img"></div> 
         <div className="contact-box">
              <a className= 'logo-contact' href="https://www.linkedin.com/in/ganna-andrushko-4406b2157/">
                <FaLinkedin />
              </a>
              <a className= 'logo-contact' href="./resources/img/my_WA.jpg" target="_blank">
                <FaWhatsapp />
              </a>
              <a
                className= 'logo-contact' href="https://contacts.google.com/search/ganna.andrushko@gmail.com?hl=en-GB"
              >
                <FaEnvelope />
              </a>
              <a className= 'logo-contact' href="https://github.com/Ganna-And">
                <FaGithub />
              </a>
          </div>
          </div>
        <div className="phone-btn">
       
        </div>
      </div>
     <div className="info">
     <h3 className="name">Hanna Andrushko</h3>
     <h4 className="title">Frontend Developer Intern</h4>
     <h5 ref={skillRef}></h5> 
      </div>
    </div>
  )
}

export default Home
