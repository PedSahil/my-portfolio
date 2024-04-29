import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import scoopNsmilefront from "/src/thumbnails/scopnsmilefront-min.jpg"
import luciousthumbnail from "/src/thumbnails/luscious-thumbnail.jpg"
import carouselImg4 from "/src/thumbnails/carousel-img-4.jpg"
import grihapravesh from "/src/thumbnails/GrihaPravesh-min.jpg"
import johnDoe from "/src/thumbnails/johnDoePort-min.jpg"
import firstPortfolio from "/src/thumbnails/firstPortfolio-min.jpg"

const Work = () => {
  const figmaLink =
    "https://www.figma.com/file/Y2c5acV1PyxoEi5x1QIKDJ/login?type=design&node-id=884-235&mode=design&t=27zFLHg3xzl5T3FV-0";
  const githubLink = "https://github.com/PedSahil?tab=repositories";
  const handleClick = () => {
    window.open(figmaLink, "_blank");
  };
  const handleClick2 = () => {
    window.open(githubLink, "_blank");
  };
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
          onClick={handleClick}
          src={scoopNsmilefront}
          alt=""
          className="img imag1"
        />
        <img
          onClick={handleClick}
          src={luciousthumbnail}
          alt=""
          className="img imag2"
        />
        <img
          onClick={handleClick2}
          src={carouselImg4}
          alt=""
          className="img imag3"
        />
        <img
          onClick={handleClick}
          src={grihapravesh}
          alt=""
          className="img imag4"
        />
        <img
          onClick={handleClick2}
          src={johnDoe}
          alt=""
          className="img imag5"
        />
        <img
          onClick={handleClick2}
          src={firstPortfolio}
          alt=""
          className="img imag5"
        />
        <Link className="showMore" to="/showmore">Show more...</Link>
      </div>
    </div>
  );
};

export default Work;
