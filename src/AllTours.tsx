import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
} from "react-bootstrap";
import TourFilter from "./tour-filter";
import TourModal from "./tour-modal"
import TourCardDeck from "./tour-card-deck"
import TourCardMap from "./tour-card-map"
import Place from "./Place"
const classNames = require("classnames")



const AllTours: React.FC = () => {
  //Should be converted to a useReducer
  //const initialFocusedPlace: Place | null = null
  const [modalShow, setModalShow] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [places, setPlaces] = useState(new Array<Place>());
  const [focusedPlace, setFocusedPlace] = useState<Place | undefined>(undefined)
  /*const mainBlockClassName = classNames({
    tour-map-container: true,
    my-3: true,
     ml-3
  })*/
  //Runs only on mount & unmount once because empty dependency array as argument
  useEffect(() => {
    console.log("---Effect start---")
    fetch('places.json')
      .then(response => response.json())
      .then(data => {
        data.results.forEach((result:any) => {
          result.show = false; // eslint-disable-line no-param-reassign
        });
        setPlaces(data.results)
        //this.setState({ places: data.results });
        console.log("Mounting end")
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log("*** All Updates Effect ***")
  })

  //Generic array of objects update by id method
  const updateCollectionById = <T, K extends keyof T>(id: React.ReactText, collection: T[], collectionKey: K, collectionValue: T[K]) => {
    id = typeof id === 'string' ? parseInt(id, 10) : id
    const collectionProperty = collection.find((currentPlace:any) => currentPlace.id === id);
    if(typeof collectionProperty !== 'undefined') {
      collectionProperty[collectionKey] = collectionValue
    }
  }

  const updatePlaces = (places: Place[]) => {
    //setFocusedPlace(myPlaces[0])
    setFocusedPlace(undefined)

    setPlaces([...places])
  }
  return (
    <React.Fragment>
      <Container fluid>
        <div className="d-flex justify-content-between align-content-center">
          <h3 className="mt-3 mr-2">Explore all tours. </h3>
          <div className="d-flex flex-col justify-content-center">

            
          </div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Show Map"
            className="mt-4 text-nowrap"
            onChange={() => setShowMap(!showMap)}
            checked={showMap}
          />
        </div>
        <Dropdown.Divider />
        <Row noGutters>
          <Col xs={showMap ? 4 : 2} className="my-3 d-none d-lg-block">
            <TourFilter/>
          </Col>
          <Col className="tour-map-container my-3 ml-lg-3">
            {showMap ? 
            <TourCardMap places={places} focusedPlace={focusedPlace} 
            updatePlaces={updatePlaces} /> :
            <TourCardDeck/>}
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
