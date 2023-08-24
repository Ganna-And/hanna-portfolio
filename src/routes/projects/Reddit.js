import React, { useState } from 'react';
import MusicAppImg from '../../img/musicApp.png';
import { useEffect } from 'react';

const Reddit = () => {

    const [img, setImg] = useState(0)
    const carousel = [MusicAppImg, 'https://picsum.photos/300/200', 'https://picsum.photos/200/300'];
  
    useEffect(()=>{
        const interval = setInterval(()=>{
            setImg((prev)=>(prev+1)%carousel.length)
        }, 4000)

        return ()=>{
            clearInterval(interval);
        }

    },[])
  return (
    <>
       <section className='project-content'>
            <h2 className='project-title'>Build Your Own Reddit App</h2>
            <p>A front-end web app displaying data fetched from Reddit API.This project helped me tounderstand better  React, Redux, 
              and  Reddit Json API.</p>
            <p>Features:</p>
            <ul>
              <li>Fetch and display posts and comments from Reddit API</li>
              <li>Search functionality</li>
              <li>Filtering by predefined categories</li>
              <li>Detailed view for selected items</li>
              <li>Responsive design for all devices</li>
            </ul>
            <p>Technologies: React, Redux</p>
         
         
          </section>
        </>
  )
}

export default Reddit
