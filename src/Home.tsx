import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

const Home: React.FC = () => {
  return (
  <header className="cover">
    <Carousel>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-1">
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-2">
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-3">
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </header>
  );
};

export default Home;
