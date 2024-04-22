import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
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
      <section className="desc">
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
        <a href="/src/assets/Sahil Pednekar .pdf" className="download" download>
          Download CV
        </a>
      </section>
    </div>
  );
};

export default AboutMe;
