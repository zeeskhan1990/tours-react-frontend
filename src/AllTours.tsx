import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  CardDeck,
  Card,
  CardColumns,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Rating from "react-rating";

import Carousel from "react-bootstrap/Carousel";

const SVGIcon = (props: { href?: string; className }) => (
  <svg className={props.className} pointerEvents="none">
    <use xlinkHref={props.href} />
  </svg>
);

const AllTours: React.FC = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <div className="d-flex justify-content-between align-content-center">
          <h3 className="mt-3 mr-2">Explore all tours. </h3>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show Map"
            className="mt-4 text-nowrap"
          />
        </div>
        <Dropdown.Divider />
        <Row noGutters>
          <Col md={2} className="my-3 d-none d-lg-block">
            <Card>
              <article className="card-group-item">
                <Card.Header><h6>Sort By</h6></Card.Header>
                <div className="fliter-content">
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="sortBy">
                        <Form.Control as="select">
                          <option>Price</option>
                          <option>Duration</option>
                          <option>Stops</option>
                          <option>Participants</option>
                          <option>Best Rated</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </div>
              </article>

              <article className="card-group-item">
                <Card.Header><h6>Search By Name</h6></Card.Header>
                <div className="fliter-content">
                  <Card.Body>
                    <Form>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon2"><i className="fas fa-search" /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Tour Name"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                      </InputGroup>
                    </Form>
                  </Card.Body>
                </div>
              </article>
              <article className="card-group-item">
                <Card.Header><h6>Filters</h6></Card.Header>
                <div className="fliter-content">
                  <Card.Body>
                    <Card.Subtitle className="mb-3">Dates: </Card.Subtitle>
                    <Form>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Start After" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Control type="text" placeholder="End Before" />
                      </Form.Group>
                    </Form>
                    <Card.Subtitle className="mb-3 mt-3">Difficulty: </Card.Subtitle>
                    <Form>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Difficult" />
                        <Form.Check type="checkbox" label="Moderate" />
                        <Form.Check type="checkbox" label="Easy" />
                      </Form.Group>
                    </Form>
                    <Card.Subtitle className="mb-3 mt-3">Region: </Card.Subtitle>
                    <Form>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Difficult" />
                        <Form.Check type="checkbox" label="Moderate" />
                        <Form.Check type="checkbox" label="Easy" />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </div>
              </article>
            </Card>
          </Col>
          <Col>
            <CardDeck className="m-3">
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/phIFdC6lA4E"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Mountain Hiker</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.3}
                          readonly
                        />
                        <span className="text-muted">&nbsp;6</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/_UIN-pFfJ7c"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Culture Lover</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.7}
                          readonly
                        />
                        <span className="text-muted">&nbsp;9</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1VYdx37vOGQ"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Sea Explorer</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={3.8}
                          readonly
                        />
                        <span className="text-muted">&nbsp;5</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </CardDeck>

            <CardDeck className="m-3 mt-5">
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/phIFdC6lA4E"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Mountain Hiker</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.3}
                          readonly
                        />
                        <span className="text-muted">&nbsp;6</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/_UIN-pFfJ7c"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Culture Lover</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.7}
                          readonly
                        />
                        <span className="text-muted">&nbsp;9</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1VYdx37vOGQ"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Sea Explorer</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={3.8}
                          readonly
                        />
                        <span className="text-muted">&nbsp;5</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </CardDeck>

            <CardDeck className="m-3 mt-5">
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/phIFdC6lA4E"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Mountain Hiker</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.3}
                          readonly
                        />
                        <span className="text-muted">&nbsp;6</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/_UIN-pFfJ7c"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Culture Lover</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={4.7}
                          readonly
                        />
                        <span className="text-muted">&nbsp;9</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
              <Card border="primary">
                <Card.Img
                  variant="top"
                  src="https://source.unsplash.com/1VYdx37vOGQ"
                  className="tour-card-image"
                />
                <div className="card-image-overlay">
                  <span className="tour-card-title-text">The Sea Explorer</span>
                </div>
                <Card.Body>
                  <Card.Subtitle className="mb-2">
                    Moderate 5-day tour
                </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Enjoy the stunning beauty of the ranges
                </Card.Subtitle>
                  <Row className="">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" />{" "}
                      Auckland, NZ
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /> June, 2021
                    </Col>
                  </Row>
                  <Row>
                    <Col className="tour-pointer">
                      <i className="fas fa-flag tour-icons" /> 3 Stops
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-user tour-icons" /> 12 People
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <Row noGutters={true}>
                    <Col className="flex-column">
                      <Col>
                        <b>$497</b> per head
                    </Col>
                      <Col className="d-inline text-nowrap">
                        <Rating
                          emptySymbol="far fa-star tour-icons"
                          fullSymbol="fas fa-star tour-icons"
                          initialRating={3.8}
                          readonly
                        />
                        <span className="text-muted">&nbsp;5</span>
                      </Col>
                    </Col>
                    <Col className="align-self-center">
                      <Button
                        variant="primary"
                        size="sm"
                        block
                        className="btn-details"
                        type="submit"
                      >
                        Details
                    </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  );
};

export default AllTours;
