import React from "react";
import Carosel from "./showmoreComponents/Carosel";
import CardSlider from "./showmoreComponents/CardSlider";
import ProjectsGrid from "./showmoreComponents/ProjectsGrid";
import Footer from "../../footer/Footer"
import "./showmore.css"
import Navbar from "../../navbar/Navbar";



const ShowMore = () => {
  return (
    <div className="shomore">
      <Container-fluid>
      <p className="title">Portfolio.</p>
      {/* <Navbar/> */}
      <Carosel />
      <br />
      <h2 className="subtitle">Featured</h2>
      <br />
      <CardSlider />
      <br />
      <h2 className="subtitle">Projects</h2>
      <br />
      <ProjectsGrid/>
      <Footer/>
    </Container-fluid>
    </div>
  );
};

export default ShowMore;
