import React from "react";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";

//import Carousel from "react-bootstrap/Carousel";

const Home: React.FC = () => {
  return (
  <header className="cover">
    <Carousel>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-1">
        <Carousel.Caption>
          <h3>Experience the unparalleled</h3>
          <p>Explore our widest range of tours.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-2">
        <Carousel.Caption>
          <h3>Experience the unparalleled</h3>
          <p>Explore our widest range of tours.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="custom-carousel-item custom-carousel-item-3">
        <Carousel.Caption>
          <h3>Experience the unparalleled</h3>
          <p>
            Explore our widest range of tours.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </header>
  );
};

export default Home;
