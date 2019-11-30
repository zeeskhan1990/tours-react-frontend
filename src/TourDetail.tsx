import React from "react";
import { Container, Row, Col, Form, Button, Jumbotron, ListGroup, Media } from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";

const TourDetail: React.FC = () => {
  return (
  <React.Fragment>
   <Container fluid className="px-0">
     <Jumbotron className="test-jumbo d-flex justify-content-end align-items-center flex-column">
        <Row>
          <div className="jumbo-image-overlay">
            <span className="jumbo-title-text">The Culture Explorer</span>
          </div>
        </Row>
        <Row className="text-white mt-2 p-1 bg-gradient-dark">
          <Col className="tour-pointer"><i className="far fa-clock"></i> <span>June, 2021</span> </Col>
          <Col className="tour-pointer"><i className="fas fa-map-marker-alt"></i> <span>Auckland, NZ</span></Col>
        </Row>
     </Jumbotron>    
   </Container>
   <Container>
    <Row>
      <Col className="bg-light d-flex-column">
      <h4 className="pt-2 text-primary">Quick Facts</h4>
      <ListGroup variant="flush" className="my-4">
        <ListGroup.Item className="bg-transparent text-nowrap"><i className="fas fa-calendar tour-icons"></i><b>&nbsp;&nbsp;Next Date&nbsp;&nbsp;</b>June 2021</ListGroup.Item>
        <ListGroup.Item className="bg-transparent text-nowrap"><i className="fas fa-chart-line tour-icons"></i><b>&nbsp;&nbsp;Difficulty&nbsp;&nbsp;</b>Moderate</ListGroup.Item>
        <ListGroup.Item className="bg-transparent text-nowrap"><i className="fas fa-user tour-icons"></i><b>&nbsp;&nbsp;Max Participants&nbsp;&nbsp;</b>15</ListGroup.Item>
        <ListGroup.Item className="bg-transparent text-nowrap"><i className="far fa-star tour-icons"></i><b>&nbsp;&nbsp;Rating&nbsp;&nbsp;</b>4.7/5</ListGroup.Item>
      </ListGroup>
      <h4 className="pt-2 text-primary">Your Tour Guide</h4>
      <Media className="align-items-center my-4">
        <img
          width={48}
          height={48}
          className="mr-3 rounded-circle"
          src="https://source.unsplash.com/9UVmlIb0wJU/512x512"
          alt="Generic placeholder"
        />
        <Media.Body>
          <p className="text-nowrap">
            <b>&nbsp;&nbsp;Lead Guide&nbsp;&nbsp;</b>Rene Williams
          </p>
        </Media.Body>
      </Media>
      <Media className="align-items-center my-4">
        <img
          width={48}
          height={48}
          className="mr-3 rounded-circle"
          src="https://source.unsplash.com/VVEwJJRRHgk/512x512"
          alt="Generic placeholder"
        />
        <Media.Body>
          <p className="text-nowrap">
            <b>&nbsp;&nbsp;Lead Guide&nbsp;&nbsp;</b>Ray Wong
          </p>
        </Media.Body>
      </Media>
      </Col>
      <Col>
        <h4 className="pt-2 text-primary">About the Tour</h4>
        <p>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
        Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </Col>
    </Row>
   </Container>
  </React.Fragment>
  );
};

export default TourDetail;
