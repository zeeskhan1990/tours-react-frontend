import React from "react";
import {
  Card,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";

const TourFilter: React.FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
    )
}

export default TourFilter;