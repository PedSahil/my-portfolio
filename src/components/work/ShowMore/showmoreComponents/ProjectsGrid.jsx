import React from 'react'
import { useState,useEffect } from 'react';
import { Card, Row } from 'react-bootstrap';
import style from "./projectsGrid.module.css"

const ProjectsGrid = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "/src/JsonData/projectsList.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Row>
      {data.map((item) => (
        <Card className={style.c_card} key={item.id} style={{ width: "26rem",margin:"1rem",paddingTop:"10px" }} >
          <Card.Img className={style.image} variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Row>
  )
}

export default ProjectsGrid
