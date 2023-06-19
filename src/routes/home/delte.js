const autoType = setInterval(()=>{
    if(charIndex <= skillText.length){
    skillRef.current.innerText =`Currently can work with: ${skillText.slice(0,charIndex)}`
    charIndex++
    }else{
     clearInterval(autoType);
     setTimeout(()=>{
      setSkillIndex(prev => (prev +1)%skills.length)
     },1000)
      }
    },200);
   return ()=>{
    clearInterval(autoType);
   }
  },[skillIndex, skills]);