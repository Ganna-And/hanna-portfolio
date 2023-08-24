import React from 'react';



const MusicApp = ({img,setImg}) => {
  
  return (
   <>
   <section className='project-content'>
   <h2 className='project-title'>Jammming: Advanced Spotify Playlist Manager</h2>
  <p>Description: A powerful React web app for effortless playlist customization and song exploration on Spotify.</p>
  <p>Features:</p>
  <ul>
    <li>Search songs</li>
    <li>Preview tracks</li>
    <li>Create and manage playlists</li>
    <li>Add selected songs to playlists</li>
    <li>Securely sync changes with Spotify</li>
  </ul>
  <p>Technologies: React.js, Spotify API, Asynchronous JavaScript.</p>
   <p>Link : <a href="https://music-app-delta-han.vercel.app/">https://music-app-delta-han.vercel.app/</a></p>
   </section>
   </> 
  )
}

export default MusicApp
