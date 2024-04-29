import React from 'react'
import "./Outlook.css"
import insta from "/src/assets/insta.png"
import banner from '/src/assets/banner.svg'
import scroll from "/src/assets/scroll.png"
import git from "/src/assets/git.png"
import linkedin from "/src/assets/linkedin.png"
const Outlook = () => {
  return (
    <div className='hero'>
      <div className="otherlinks">
            <img src={insta} alt=""/>
            <img src={git} alt=""/>
            <img src={linkedin} alt=""/>
      </div>
      <img src= {banner}></img>
      <img src={scroll} alt="" />
    </div>
  )
}

export default Outlook
