import React from "react";
import { Carousel, CarouselItem, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import caroselimg1 from "/carousel-images/carousel-img-1.svg";
import caroselimg2 from "/carousel-images/carousel-img-2.svg";
import caroselimg3 from "/carousel-images/carousel-img-3.svg";
import caroselimg4 from "/carousel-images/carousel-img-4.svg";
const Carosel = () => {
  return (
    <div>
      <>
        <Row>
          <Col>
            <Carousel style={{ width: "100%", color: "black" }}>
              <CarouselItem>
                <img style={{ width: "100%" }} src={caroselimg1} />
                <Carousel.Caption>
                  <h3>A BODY FITNESS-CLUB</h3>
                  <p className="caption">
                    Join FitClub for personalized workouts and expert guidance,
                    achieving your fitness goals with ease.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img style={{ width: "100%" }} src={caroselimg2} />
                <Carousel.Caption>
                  <h3>PORTFOLIO RE-DESIGN</h3>
                  <p className="caption">
                    Implemented a sleek UI with interactive filters for seamless
                    navigation through projects.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img style={{ width: "100%" }} src={caroselimg3} />
                <Carousel.Caption>
                  <h3>LUSCIOUS</h3>
                  <p className="caption">
                    Discover our culinary delights and ambiance through a
                    visually captivating and user-friendly website.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img style={{ width: "100%" }} src={caroselimg4} />
                <Carousel.Caption>
                  <h3>SCOOP N SMILE</h3>
                  <p className="caption">
                    Experience a delightful blend of flavors and fun on our ice
                    cream parlor's website, where sweet treats meet digital
                    delights.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
            </Carousel>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Carosel;
