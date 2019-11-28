import React from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
} from "react-bootstrap";
import Rating from "react-rating";
import TourFilter from "./tour-filter";
import TourModal from "./tour-modal"
import TourCardDeck from "./tour-card-deck"
import TourCardMap from "./tour-card-map"

const AllTours: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
          <Col xs={2} className="my-3 d-none d-lg-block">
            <TourFilter/>
          </Col>
          <Col >
            {/*<TourCardDeck/>*/}            
            <TourCardMap/>
          </Col>
        </Row>
      </Container>
      <div className="btn-circle-fab d-lg-none" onClick={() => setModalShow(true)}><i className="fa fa-filter tour-icons"></i></div>
      <TourModal show={modalShow} onHide={() => setModalShow(false)}
      closeText="Apply" header="Tour Filters">
        <TourFilter/>
        </TourModal>
    </React.Fragment>
  );
};

export default AllTours;
