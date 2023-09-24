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
        <button className='btn bg-primary btn-sm md:w-[10rem]  lg:w-[10rem] w-auto ' 
        onClick={changeProjectsBackwards}>
        <FaAngleLeft style={{marginRight:'0'}} /><p className='hidden lg:block md:block '>Previous</p>
    </button> 
   <h1 className='text font-montserrat lg:text-3xl md:text-3xl font-bold ml-[1.5rem]'>
    {projects[indexProject].title}</h1>   
   <button 
    onClick={changeProjectsForward} className='btn  btn-sm bg-primary md:w-[10rem] lg:w-[10rem]  w-auto'>
    <p className='hidden lg:block md:block'>Next</p><FaAngleRight />
   
    </button>
    </div>  
        <section className='img-box'>
         <div className='carousel flex-col'>
         <img 
         alt='project screenshot'
         className='img-container lg:w-[80%]' src={projects[indexProject].img[indexImg]}/> 
           <div className="indicators">
          {projects[indexProject].img.map((_, i)  =>(
           <div
           key={i}
           className={`myindicator ${i === indexImg ? 'active' : ''}`}
           onClick={()=>changeImage(i)}></div>
          ))}
        </div>
        </div>
        <div className='project-description w-full lg:w-[60%]'>
       <p  className='text font-lora inline-block text-xl mt-[2rem]  md:w-[100%]'>{projects[indexProject].description}</p>
       <ul className='md:mt-[3rem] ml-[2rem] '>{projects[indexProject].features.map((feature)=>(
        <li key={feature.id} className='font-lora font-thin'>{feature}</li>
       ))}</ul>
       </div>
       </section> 
      
        <div className='references'>
          <div className='technologies md:w-[40%]'>
       <p className='font font-montserrat md:text-2xl  '>Technologies:
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
