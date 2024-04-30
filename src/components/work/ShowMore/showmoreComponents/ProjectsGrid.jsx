import React from "react";
import { useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import style from "./projectsGrid.module.css";

import bedroom from "/projects-img/bedroom.svg";
import bimbifood from "/projects-img/bimbifood.svg";
import teabiscuit from "/projects-img/biscuit-tea.svg";
import digitalclock from "/projects-img/digital-clock.svg";
import dragndrop from "/projects-img/dragNdrop.svg";
import fitclub from "/projects-img/fitclub.svg";
import glasscup from "/projects-img/glass-cup.svg";
import gruhaPravesham from "/projects-img/gruha-prasvesham.svg";
import htmltemplate from "/projects-img/html-css-template.svg";
import island from "/projects-img/island.svg";
import khavu from "/projects-img/Khavu.svg";
import kimchi from "/projects-img/kimchi.svg";
import luscious from "/projects-img/luscious.svg";
import perfume from "/projects-img/perfume.svg";
import mushrooms from "/projects-img/mushrooms.svg";
import newyear from "/projects-img/newYear.svg";
import prototype from "/projects-img/prototype.svg";
import redheart from "/projects-img/red-heart.svg";
import resume1 from "/projects-img/resume-1.svg";
import resume2 from "/projects-img/resume-2.svg";
import scoopnsmile from "/projects-img/scoopNsmile.svg";
import spider from "/projects-img/spider.svg";
import stonepaper from "/projects-img/stonepprscissors.svg";
import tictactoe from "/projects-img/tictactoe.svg";
import villa from "/projects-img/villa.svg";
import witch from "/projects-img/witch-house.svg";

const data = [
  {
    id: 1,
    title: "3D Room",
    img: bedroom,
    desc: "Explore low-poly 3D bedroom designs crafted with Blender's creative prowess.",
  },
  {
    id: 2,
    title: "BimbiFood",
    img: bimbifood,
    desc: "Bimbifood presents a delightful culinary webpage, meticulously crafted using the Chakra UI framework.",
  },
  {
    id: 3,
    title: "Coffee Cookies",
    img: teabiscuit,
    desc: " A 3D modelling masterpiece featuring a meticulously crafted coffee cup paired with delectable cookies.",
  },
  {
    id: 4,
    title: "Digital Clock",
    img: digitalclock,
    desc: "Experience time in a new light with our digital clock webpage. Seamlessly blending HTML, CSS, and JavaScript.",
  },
  {
    id: 5,
    title: "Drag and Drop",
    img: dragndrop,
    desc: "Experience seamless interaction with our drag-and-drop webpage, meticulously crafted using HTML, CSS, and JavaScript.",
  },
  {
    id: 6,
    title: "Fit-Club",
    img: fitclub,
    desc: "Embark on your fitness journey with our dynamic React-powered webpage.",
  },
  {
    id: 7,
    title: "Glass-Cup",
    img: glasscup,
    desc: " 3D modelling of transparent glass cup using Blender",
  },
  {
    id: 8,
    title: "Invitation",
    img: gruhaPravesham,
    desc: "Simple invitation card design in Figma.",
  },
  {
    id: 9,
    title: "Template Design",
    img: htmltemplate,
    desc: "A html template webpage (MiniProject)",
  },
  {
    id: 10,
    title: "Lopoly Island",
    img: island,
    desc: "A 3D model of an lopoly island, Blender.",
  },
  {
    id: 11,
    title: "Khavu App Design",
    img: khavu,
    desc: "A Figma design template of Android App Khavu,with added buttons and different pages",
  },
  {
    id: 12,
    title: "Recipe page Design",
    img: kimchi,
    desc: "An android view design of Recipe page.",
  },
  {
    id: 13,
    title: "Luscious",
    img: luscious,
    desc: "Delicious food order app with interactive animations in figma.",
  },
  {
    id: 14,
    title: "Perfume",
    img: perfume,
    desc: "A 3D modelling of a perfume container with matte texture.",
  },
  {
    id: 15,
    title: "Lopoly Mushroom",
    img: mushrooms,
    desc: "A simple modelling of lopoly mushroom with, blooming dotts.",
  },
  {
    id: 16,
    title: "NewYear",
    img: newyear,
    desc: "An invitation for a new year event, design in figma.",
  },
  {
    id: 17,
    title: "App Prototype-Design",
    img: prototype,
    desc: "An pure Android application prototype design in figma",
  },
  {
    id: 18,
    title: "Red-Heart",
    img: redheart,
    desc: "A 3D glooming red heart model in Blender",
  },
  {
    id: 19,
    title: "Portfolio",
    img: resume1,
    desc: "A portfolio implemented using pure html and vanilla css.",
  },
  {
    id: 20,
    title: "Portfolio Re-Design",
    img: resume2,
    desc: "A portfolio redesigned using vite React, design inspired from Johndoe template",
  },
  {
    id: 21,
    title: "Scoop And Smile",
    img: scoopnsmile,
    desc: "A Figma design template for an ice-cream parlour named Scoop N Smile",
  },
  {
    id: 22,
    title: "3D Spider",
    img: spider,
    desc: "A 3D model of a technical spider which glows a light.",
  },
  {
    id: 23,
    title: "Stone Paper Game",
    img: stonepaper,
    desc: "A Javascript project game, which is played between a human and a computer.",
  },
  {
    id: 24,
    title: "TIC-TAC-TOE",
    img: tictactoe,
    desc: "A Javascript project which is two player game.",
  },
  {
    id: 25,
    title: "3D Villa Modelling",
    img: villa,
    desc: "3D model of an holiday villa at a river side Deck.",
  },
  {
    id: 26,
    title: "Witch-House",
    img: witch,
    desc: "A 3d model of Haunted house simulated using Blender.",
  },
];

const ProjectsGrid = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/src/JsonData/projectsList.json");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const figmaLink =
    "https://www.figma.com/file/Y2c5acV1PyxoEi5x1QIKDJ/login?type=design&node-id=884-235&mode=design&t=27zFLHg3xzl5T3FV-0";
  const blenderFiles = "https://github.com/PedSahil/BlenderFiles";
  const projects = "https://github.com/PedSahil?tab=repositories";

  const handleClick = (item) => {
    if (
      item.id == 8 ||
      item.id == 11 ||
      item.id == 12 ||
      item.id == 13 ||
      item.id == 16 ||
      item.id == 17 ||
      item.id == 21
    ) {
      window.open(figmaLink, "_blank");
    } else if (
      item.id == 1 ||
      item.id == 3 ||
      item.id == 7 ||
      item.id == 10 ||
      item.id == 14 ||
      item.id == 15 ||
      item.id == 18 ||
      item.id == 22 ||
      item.id == 25 ||
      item.id == 26
    ) {
      window.open(blenderFiles, "_blank");
    } else {
      window.open(projects, "_blank");
    }
  };
  return (
    <Row>
      {data.map((item) => (
        <Card
          onClick={() => {
            handleClick(item);
          }}
          className={style.c_card}
          key={item.id}
          style={{width:"25rem", margin: "1rem", paddingTop: "10px" }}
        >
          <Card.Img className={style.image} variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  );
};

export default ProjectsGrid;
