import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import Rating from "react-rating";

const TourCardDeck: React.FC = () => {
  return (
    <React.Fragment>
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
            <Card.Subtitle className="mb-2">Moderate 5-day tour</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Enjoy the stunning beauty of the ranges
            </Card.Subtitle>
            <Row className="">
              <Col className="tour-pointer">
                <i className="fas fa-map-marker-alt tour-icons" /> Auckland, NZ
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
    </React.Fragment>
  );
};

export default TourCardDeck;
