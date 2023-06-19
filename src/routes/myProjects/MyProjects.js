import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import MusicApp from '../../img/SpotifyApiApp.png';
import diaryImage from '../../img/diary.jpg';
import redditImage from '../../img/reddit.jpg';
import './MyProjects.css';

const MyProjects = () => {
  const [img, setImg] = useState(0);
  const carousel = [MusicApp, diaryImage, redditImage];
  const currentImg = carousel[img];


  const picture = {
    backgroundImage: `url(${currentImg})`,
    backgroundSize: 'contain', // Adjust the backgroundSize property
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
    width: '70%',
    height: '60%',
    boxShadow: '2px 2px 8px black',
   
  };

  const changeImgForward = () => {
    // Handle image change logic here
if(img < carousel.length-1){
  setImg(prev => prev + 1)
}else{
  setImg(prev => 0)
}
  };

  const changeImgBackwards = () => {
    // Handle image change logic here
if(img > 0){
  setImg(prev => prev - 1)
}else{
  setImg(prev => carousel.length-1)
}
  };



  return (
    <main className='container'>
      <div className="slider">
        <div className="img-container" style={picture}>
          <FaAngleLeft onClick={changeImgBackwards} className='left' />
          <FaAngleRight onClick={changeImgForward} className='right' />
        </div>
        <p>Click <Link to=':id'>here</Link> for review.</p>
      </div>
    </main>
  );
}

export default MyProjects;
