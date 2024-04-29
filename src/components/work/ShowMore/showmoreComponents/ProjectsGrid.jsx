import React from "react";
import { useState, useEffect } from "react";
import { Card, Row } from "react-bootstrap";
import style from "./projectsGrid.module.css";

import bedroom from "/projects-img/bedroom.svg"

const ProjectsGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/src/JsonData/projectsList.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const figmaLink =
    "https://www.figma.com/file/Y2c5acV1PyxoEi5x1QIKDJ/login?type=design&node-id=884-235&mode=design&t=27zFLHg3xzl5T3FV-0";
  const blenderFiles = "https://github.com/PedSahil/BlenderFiles";
  const projects = "https://github.com/PedSahil?tab=repositories";

  const handleClick = (item) => {
    if (
      item.id ==8 ||
      item.id ==11 ||
      item.id ==12 ||
      item.id ==13 ||
      item.id ==16 ||
      item.id ==17 ||
      item.id ==21
    ) {
      window.open(figmaLink, "_blank");
    } else if (
      item.id ==1 ||
      item.id ==3 ||
      item.id ==7 ||
      item.id ==10 ||
      item.id ==14 ||
      item.id ==15 ||
      item.id ==18 ||
      item.id ==22 ||
      item.id ==25 ||
      item.id ==26
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
          style={{ width: "26rem", margin: "1rem", paddingTop: "10px" }}
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
