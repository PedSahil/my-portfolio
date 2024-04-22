import React from "react";
import Carosel from "./showmoreComponents/Carosel";
import CardSlider from "./showmoreComponents/CardSlider";
import ProjectsGrid from "./showmoreComponents/ProjectsGrid";
import Footer from "../../footer/Footer"
import "./showmore.css"


const ShowMore = () => {
  return (
    <div className="shomore">
      <Container-fluid>
      {/* <Navbar/> */}
      <Carosel />
      <br />
      <h2>Featured</h2>
      <br />
      <CardSlider />
      <br />
      <h2>Projects</h2>
      <br />
      <ProjectsGrid/>
      <Footer/>
    </Container-fluid>
    </div>
  );
};

export default ShowMore;
