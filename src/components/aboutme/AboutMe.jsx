import React from "react";
import "./Aboutme.css";


const AboutMe = () => {

  const handleClick=()=>{
     // URL to your PDF file
     const pdfUrl = "https://drive.google.com/file/d/1M_EUhnbIxLH-mQ29O1fhzZme99imsic0/view?usp=drive_link";
    
     window.open(pdfUrl, '_blank');
  }
  return (
    <div className="about">
      <img className="aboutme" src="../../assets/side-about.png" alt="" />
      <section className="whoiam">
        <aside className="whoiam1">Who I Am ?</aside>
        <aside className="myself">
          Step into the world of design with Sahil, a dynamic UI/UX designer and
          developer. From wireframes to pixel-perfect interfaces.{" "}
        </aside>
      </section>
      <section className="des">
        <br />
        <br />
        <br />
        <br />
        Take a journey through visuals crafted by Sahil Pednekar, a skilled
        designer and developer. Sahil combines looks and practicality, making
        digital spaces better with new ideas. creating interfaces that users
        appreciate. Beyond just pictures and code, making designs that are easy
        to use, going beyond what users expect. His collection of work shows how
        dedicated he is to making digital experiences that stand out. Mixing
        creativity with advanced development, creating top-notch UI/UX.
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={handleClick} className="download" >
          Download CV
        </button>
      </section>
    </div>
  );
};

export default AboutMe;
