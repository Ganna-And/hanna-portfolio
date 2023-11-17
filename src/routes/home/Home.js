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
      <img className="image " src={profile} alt="profile" />
      <div className="info">
        <h1 className="text lg:text-7xl font-montserrat font-bold  md:text-6xl text-4xl mt-0 ">
          Greetings!I'm{" "}
        </h1>
        <h1 className="text lg:text-5xl text-3xl  ">
          Frontend<span className="text-primary font-montserrat"> Developer</span> Intern
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
      </div>
     
    </main>
  );
};

export default Home;
