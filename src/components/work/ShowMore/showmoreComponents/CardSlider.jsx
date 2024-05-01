import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "./cardSlider.css";

import scoopnsmile from "/projects-img/scoopNsmile.svg"
import resume1 from  "/projects-img/resume-1.svg"
import resume2 from "/projects-img/resume-2.svg"
import luscious from "/projects-img/luscious.svg"
import fitclub from "/projects-img/fitclub.svg"
import portpro from "/projects-img/portproject.svg"

const data = [
  {
    id: 1,
    title: "Scoop And Smile",
    img: scoopnsmile,
    desc: "A Figma design template for an ice-cream parlour",
  },
  {
    id: 2,
    title: "Portfolio-1",
    img: resume1,
    desc: "Portfolio design and implementation using html,css",
  },
  {
    id: 3,
    title: "Portfolio-2",
    img:resume2,
    desc: "Portfolio design and implementation using React",
  },
  {
    id: 4,
    title: "Luscious",
    img: luscious,
    desc: "A Figma design template for an healthy restaurant",
  },
  {
    id: 5,
    title: "Fitclub",
    img: fitclub,
    desc: "A React js website for a Fitness-Club",
  },
  {
    id: 6,
    title: "Portfolio-Project",
    img: portpro,
    desc: "A React js website for a Portfolio with scss",
  },
];

const CardSlider = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/src/JsonData/cardSlider.json");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2001 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 769 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };

  const figmaLink =
    "https://www.figma.com/file/Y2c5acV1PyxoEi5x1QIKDJ/login?type=design&node-id=884-235&mode=design&t=27zFLHg3xzl5T3FV-0";
  const projects = "https://github.com/PedSahil?tab=repositories";

  const handleClick = (item) => {
    if (item.id == 1 || item.id == 4) {
      window.open(figmaLink, "_blank");
    } else {
      window.open(projects, "_blank");
    }
  };
  return (
    <Container-fluid>
      <Carousel responsive={responsive} swipeable={false} draggable={true}>
        {data.map((item) => (
          <Card
            onClick={() => {
              handleClick(item);
            }}
            key={item.id}
            className="crad"
            style={{ width: "16rem" }}
          >
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="desc">{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container-fluid>
  );
};

export default CardSlider;
