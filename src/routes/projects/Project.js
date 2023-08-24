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
        <FaAngleLeft />Previous
    </button> 
   <h1 className='project-title'>
    {projects[indexProject].title}</h1>   
   <button 
    onClick={changeProjectsForward} className='btn'>
    Next<FaAngleRight />
   
    </button>
    </div>  
        <section className='img-box'>
         <div>
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
        <div>
       <p className='project-description'>{projects[indexProject].description}</p>
       <ul>{projects[indexProject].features.map((feature)=>(
        <li key={feature.id}style={{fontSize:'1.3rem'}}>{feature}</li>
       ))}</ul>
       </div>
       </section> 
      
        <div className='references'>
       <p style={{marginRight:'3rem',
       fontSize:'x-large', 
       fontWeight:'600'}}>Technologies:
       <br /><span 
       style={{fontStyle:'italic',
        fontWeight:'400',
        fontSize:'1.3rem'}}>{projects[indexProject].technologies}</span></p> 
       
       <ul  className='links'>
        <li className='li-links'>
          Link to GitHub:<a href={projects[indexProject].links[0]}>{projects[indexProject].links[0]}</a>
          </li>
        <li className='li-links' >
         Demo live Version: <a href={projects[indexProject].links[1]}>{projects[indexProject].links[1]}</a>
          </li>{
  projects[indexProject].links.length === 4 && (
    <>
      <li className='li-links'>
        Link to GitHub:<a href={projects[indexProject].links[2]}>{projects[indexProject].links[2]}</a>
      </li>
      <li className='li-links'>
        Demo live Version: <a href={projects[indexProject].links[3]}>{projects[indexProject].links[3]}</a>
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
