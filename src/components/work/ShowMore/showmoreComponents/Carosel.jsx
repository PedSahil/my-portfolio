import React from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Carosel = () => {
  return (
    <div>
      <>
        <Row>
          <Col>
            <Carousel style={{ width: "100%" ,color:"black"}}>
              <CarouselItem >
                <img
                  style={{ width: "100%" }}
                  src="/carousel-images/carousel-img-1.svg"
                />
                <Carousel.Caption>
                  <h3>A BODY FITNESS-CLUB</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img
                  style={{ width: "100%" }}
                  src="/carousel-images/carousel-img-2.svg"
                />
                <Carousel.Caption>
                  <h3>A BODY FITNESS-CLUB</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img
                  style={{ width: "100%" }}
                  src="/carousel-images/carousel-img-3.svg"
                />
                <Carousel.Caption>
                  <h3>A BODY FITNESS-CLUB</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </Carousel.Caption>
              </CarouselItem>
              <CarouselItem>
                <img
                  style={{ width: "100%" }}
                  src="/carousel-images/carousel-img-4.svg"
                />
                <Carousel.Caption>
                  <h3>A BODY FITNESS-CLUB</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
