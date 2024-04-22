import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="about">
      <img className="aboutme" src="/Icons/side myworks.png" alt="" />
      <section className="whoiam">
        <aside className="whoiam1">See My Work</aside>
        <aside className="myself">
          To create dynamic user interfaces and enhance user experience,
          demonstrating strong problem-solving skills and attention to detail.
        </aside>
      </section>
      <div className="gallery">
        <img
          src="/src/thumbnails/scopnsmilefront-min.jpg"
          alt=""
          className="img imag1"
        />
        <img
          src="/src/thumbnails/luscious-thumbnail.jpg"
          alt=""
          className="img imag2"
        />
        <img src="/src/thumbnails/carousel-img-4.jpg" alt="" className="img imag3" />
        <img
          src="/src/thumbnails/GrihaPravesh-min.jpg"
          alt=""
          className="img imag4"
        />
        <img
          src="/src/thumbnails/johnDoePort-min.jpg"
          alt=""
          className="img imag5"
        />
        <img
          src="/src/thumbnails/firstPortfolio-min.jpg"
          alt=""
          className="img imag5"
        />
       <Link to='/showmore'>Show more</Link>
      </div>
    </div>
  );
};

export default Work;
