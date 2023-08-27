import React, { useEffect, useRef } from 'react';
import './Home.css';
import {FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';
import { useState } from 'react';
import profile from '../../img/Hanna Photo.jpg'

import { useDisclosure } from '@chakra-ui/react';
import { ModalPage } from '../../components/modal';






const Home = ({isChecked}) => {
const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'Redux'];

 const [skillIndex, setSkillIndex] = useState(0);
 const { isOpen, onOpen, onClose } = useDisclosure();



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
           <div className="camera"></div>
           <div className="content">
            <img className='profile-img' src={profile} alt="" />
         <div className="contact-box">
              <a className= 'logo-contact' href="https://www.linkedin.com/in/ganna-andrushko-4406b2157/">
                <FaLinkedin />
              </a>
              < button className='logo-content-btn' onClick={()=>{onOpen()}}>
                <FaWhatsapp />
              </button>
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
       
       
        </div>
      </div>
     <div className="info">
     <h3 style={{fontSize: '1.8rem', }}>Greetings!</h3>
     <h4 style={{fontSize: '1.3rem', fontWeight:'400' }}>I'm Hanna Andrushko, Frontend Developer Intern with a passion for crafting digital experiences. Eager to learn, create, and contribute.
      Let's build something extraordinary together!</h4>
     <h5 style={{fontSize: '1.3rem', fontWeight:'400' }} ref={skillRef}></h5> 
      </div>
       {<ModalPage onClose={onClose} isOpen={isOpen} onOpen={onOpen}/>}
    </div>
   
  )
}

export default Home
