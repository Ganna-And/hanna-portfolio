import React, { useEffect, useState }from "react";
import "./Header.css";
import Switcher from "./Switcher";
import Nav from "./Nav";


const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(()=>{
     updateBody()
    }, [isChecked])
 
 
  function updateBody(){
     const body = document.querySelector('body');
     if(isChecked){
     body.style.backgroundColor = 'black';
 }else{
     body.style.backgroundColor = 'white';
 }
  }
  return (
    <header>
      <Switcher isChecked={isChecked} setIsChecked={setIsChecked}/>
      <Nav isChecked={isChecked}/>
    </header>
  );
};

export default Header;
