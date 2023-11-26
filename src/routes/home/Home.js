import React, { useEffect, useRef } from "react";
import "./Home.css";
import { RiWhatsappLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import{RxEnvelopeClosed} from 'react-icons/rx'
import { useState } from "react";
import profile from "../../img/Hanna_Photo.png";
import CVPDF from '../../img/HannaCV_en (1) (1).pdf.pdf'

const Home = ({ isChecked }) => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJs", "Redux"];

  const [skillIndex, setSkillIndex] = useState(0);

  let skillRef = useRef(null);

  useEffect(() => {
    const skillItem = skills[skillIndex];
    let char = 0;
    const autoType = setInterval(() => {
      if (char <= skillItem.length) {
        skillRef.current.innerHTML = `Currently working with:<br /> <div><span className='typing'>|</span>${skillItem.slice(
          0,
          char
        )}</div>`;
        char++;
      } else {
        clearInterval(autoType);
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length);
        }, 1000);
      }
    }, 200);
    return () => {
      clearInterval(autoType);
    };
  }, [skillIndex, skillRef]);

  return (
    <main className="container">
     <h1 className="text text-3xl  mt-4 font-bold  lg:text-4xl">
          Frontend<span className="text-primary font-montserrat"> Developer</span> Intern
        </h1> 
        <div className="wr_img w-[220px] h-fit rounded-full mr-4 overflow-hidden float-left  ">
      <img className="image object-contain object-center" fill src={profile} alt="profile"  />
 </div>
        <h1 className="text
       
          font-montserrat
             text-4xl mt-8 ">
          Greetings!I'm Hanna Abdrushko
        </h1>
        <h4 className="text font-lora lg:text-xl font-[100]">
        dedicated to crafting exceptional user experiences through cutting-edge web technologies.
         Committed to continuous learning and eager to contribute creativity 
         and expertise to web development projects
        </h4>
        <aside
          className="text lg:visible  md: visible  font-montserrat lg:text lg:text-2xl"
          style={{ fontSize: "1.3rem", fontWeight: "400" }}
          ref={skillRef}
        ></aside> 
        <button className=" download  bg-transparent border-2 border-primary lg:self-end lg:mr-[5rem] lg:mt-[1rem] relative lg:p-[0.5rem] rounded-lg flex align-middle">
  <span className="bg-primary h-90% w-0 absolute rounded-lg"></span>
  <a href={CVPDF} download>DOWNLOAD CV</a>
  </button>
        <ul className="ul_social">
        <li className="icon_wrapper">
        <a className= 'logo-contact p-1' href="https://www.linkedin.com/in/ganna-andrushko-4406b2157/">
          <RiLinkedinLine />
          </a>
        </li>
        <li className="icon_wrapper">
        <a className= 'logo-contact p-1' href="https://github.com/Ganna-And">
          <RiGithubLine />
          </a>
        </li>
        <li className="icon_wrapper">
        <a className= 'logo-contact p-1' href="https://contacts.google.com/search/ganna.andrushko@gmail.com?hl=en-GB">
          <RxEnvelopeClosed />
          </a>
        </li>
        <li className="icon_wrapper">
        < button className='logo-content-btn m-1' /* onClick={()=>{onOpen()}} */>
          <RiWhatsappLine />
         </button>
        </li>
      </ul>
      

    </main>
  );
};

export default Home;
