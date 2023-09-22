import React from 'react';
import './Projects.css';
import { useState,useEffect} from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { myProjects} from '../../projects-data/data';


const Project = () => {
  
  const [indexProject, setIndexProject] = useState(0);
  const [indexImg, setIndexImg] = useState(0);


  const projects = myProjects;

  const currentProject = projects[indexProject];
 


  useEffect(()=>{
    const interval = setInterval(()=>{
        setIndexImg((prev)=>(prev+1)%currentProject.img.length)
    }, 4000)

    return ()=>{
        clearInterval(interval);
    }
},[])
  const changeProjectsForward = () => {
    // Handle image change logic here
      setIndexProject((prev) =>( prev + 1)%projects.length);
      setIndexImg(0);
  };
  const changeProjectsBackwards = () => {
    setIndexProject((prev) =>( prev - 1 + projects.length)%projects.length);
    setIndexImg(0);
  };

  const changeImage =(newIndex)=>{
    setIndexImg(newIndex);
  }
  
  return (
     <main className='myprojects'>
      <div className='project'>
        <div 
        className='main-head'>
        <button className='btn' 
        onClick={changeProjectsBackwards}>
        <FaAngleLeft style={{marginRight:'0'}} />Previous
    </button> 
   <h1 className='text font-montserrat text-4xl font-bold'>
    {projects[indexProject].title}</h1>   
   <button 
    onClick={changeProjectsForward} className='btn'>
    Next<FaAngleRight />
   
    </button>
    </div>  
        <section className='img-box'>
         <div className='carousel'>
         <img 
         alt='project screenshot'
         className='img-container' src={projects[indexProject].img[indexImg]}/> 
           <div className="indicators">
          {projects[indexProject].img.map((_, i)  =>(
           <div
           key={i}
           className={`indicator${i === indexImg ? '.active' : ''}`}
           onClick={()=>changeImage(i)}></div>
          ))}
        </div>
        </div>
        <div className='project-description'>
       <p  className='text font-lora inline-block text-base'>{projects[indexProject].description}</p>
       <ul className='mt-[3rem] ml-[2rem]'>{projects[indexProject].features.map((feature)=>(
        <li key={feature.id} className='font-lora font-thin'>{feature}</li>
       ))}</ul>
       </div>
       </section> 
      
        <div className='references'>
          <div className='technologies'>
       <p className='font font-montserrat text-2xl '>Technologies:
       <br />
       <span 
       className='font font-lora italic text-md'>{projects[indexProject].technologies}</span></p> 
        </div>
       
       <ul  className='links'>
        <li className='li-links font-montserrat font-bold'>
          Link to GitHub: <a className='font-thin' href={projects[indexProject].links[0]}>{projects[indexProject].links[0]}</a>
          </li>
        <li className='li-links font-montserrat font-bold' >
         Demo live Version: <a  className='font-thin' href={projects[indexProject].links[1]}>{projects[indexProject].links[1]}</a>
          </li>{
  projects[indexProject].links.length === 4 && (
    <>
      <li className='li-links font-montserrat font-bold'>
        Link to GitHub: <a className='font-thin'  href={projects[indexProject].links[2]}>{projects[indexProject].links[2]}</a>
      </li>
      <li className='li-links font-montserrat font-bold'>
        Demo live Version: <a className='font-thin'  href={projects[indexProject].links[3]}>{projects[indexProject].links[3]}</a>
      </li>
    </>
  )
}
       </ul>
       </div>
       </div>
    </main>
  )
}

export default Project
