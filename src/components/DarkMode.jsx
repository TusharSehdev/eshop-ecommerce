import React, { useState } from 'react'
import LightButton from "../assets/website/dark-mode-button.png"
import DarkButton from "../assets/website/light-mode-button.png"

const DarkMode = () => {
const [theme , setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem('theme'): 'light');
const element = document.documentElement;

React.useEffect(()=>{
  localStorage.setItem('theme',theme);
  if(theme==="dark"){
    element.classList.add('dark');
    element.classList.remove('light');
  }else{
    element.classList.remove('dark')
    element.classList.add('light');
  }
})
console.log(element);

  return (
    <>   
     <div className='relative'>
      <img onClick={()=> setTheme(theme === 'dark' ? "light" : "dark")} className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark"?"opacity-0":"opacity-100"} transition-all duration-300`} src={LightButton} alt="" />
      <img onClick={()=> setTheme(theme === 'dark' ? "light" : "dark")} className={`w-12 cursor-pointer transition-all duration-300`} src={DarkButton} alt="" />  
     </div>
    </>


    
  )
}

export default DarkMode