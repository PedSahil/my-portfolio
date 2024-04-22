import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "./cardSlider.css"


const CardSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "/src/JsonData/cardSlider.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Container-fluid>
      <Carousel responsive={responsive} swipeable={false}
    draggable={true}>
      {data.map((item) => (
        <Card key={item.id} className="crad" style={{width:"16rem"}}>
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
