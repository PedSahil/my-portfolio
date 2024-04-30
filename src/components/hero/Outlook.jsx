import React from 'react'
import "./Outlook.css"
import insta from "/src/assets/insta.png"
import banner from '/src/assets/banner.svg'
import scroll from "/src/assets/scroll.png"
import git from "/src/assets/git.png"
import linkedin from "/src/assets/linkedin.png"
const Outlook = () => {
  const handleClick = (url) => {
    console.log(url)
    window.open(url, '_blank');
  };
  return (
    <div className='hero'>
      <div className="otherlinks">
            <img src={insta} onClick={()=>{handleClick('https://www.instagram.com/sah.ilpednekar/')}} alt=""/>
            <img src={git} onClick={()=>{handleClick('https://github.com/dashboard')}} alt=""/>
            <img src={linkedin} onClick={()=>{handleClick('https://www.linkedin.com/in/sahil-pednekar-a55b8b222/')}} alt=""/>
      </div>
      <img src= {banner}></img>
      <img src={scroll} alt="" />
    </div>
  )
}

export default Outlook
