import React, { useRef, useState, useEffect, ReactComponentElement, ReactChild } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
} from "react-bootstrap";
import TourFilter from "./tour-filter";
import TourModal from "./tour-modal"
import TourCardList from "./tour-card-list"
import TourCardMap from "./tour-card-map"
import TourPanel from "./tour-panel"
import Place from "./Place"
const classNames = require("classnames")



const AllTours: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [places, setPlaces] = useState(new Array<Place>());
  //Runs only on mount & unmount once because empty dependency array as argument
  const mapRef = useRef<TourCardMap>(null);
  useEffect(() => {
    console.log("---Effect start---")
    fetch('places.json')
      .then(response => response.json())
      .then(data => {
        data.results.forEach((result:Place) => {
          const initMap = {
            show_info: false,
            focused: false
          }
          result.map = initMap
          //result.show = false; // eslint-disable-line no-param-reassign
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
  const findAndUpdateCollectionById = <T, K extends keyof T>(id: React.ReactText, collection: T[], collectionKey: K, collectionValue: T[K]) => {
    id = typeof id === 'string' ? parseInt(id, 10) : id
    const collectionProperty = collection.find((currentPlace:any) => currentPlace.id === id);
    if(typeof collectionProperty !== 'undefined') {
      collectionProperty[collectionKey] = collectionValue
    }
    return collection
  }

  const updatePlaces = (places: Place[]) => {
    setPlaces([...places])
  }

  const updatePlaceMarker = (placeId: Place["id"], placeMap: Place["map"]) => {
    let newPlaces = [...places]
    debugger
    if(newPlaces[placeId].map.show_info !== placeMap.show_info) {
      if(mapRef && mapRef.current) {
        mapRef.current.handleActiveMarker(placeId)
      }      
    } else {
      //setPlaces(findAndUpdateCollectionById(placeId, newPlaces, "map", placeMap)) 
    }
    //setPlaces(findAndUpdateCollectionById(placeId, newPlaces, "map", placeMap)) 
  }
  return (
    <React.Fragment>
      <Container fluid className="all-tours-title">
        <Row noGutters className="">
            <div className="d-flex justify-content-between align-content-between all-tours-title-block">
              <h3 className="mt-3 mr-2 sticky-top">Explore all tours. </h3>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Show Map"
                className="mt-4 text-nowrap sticky-top"
                onChange={() => setShowMap(!showMap)}
                checked={showMap}
              />
            </div>
        </Row>
        <Dropdown.Divider className="m-0"/>
      </Container>
      <Container fluid className="all-tours-content">        
        <Row noGutters className="h-100">
          <Col xs={showMap ? 6 : 2} className="d-none d-lg-block">
            {showMap ? <TourPanel places={places} updatePlaceMarker={updatePlaceMarker}/> : <TourFilter/>}            
          </Col>
          <Col className="ml-lg-3">
            {showMap ? 
            <TourCardMap ref={mapRef} places={places} updatePlaces={updatePlaces} /> :
            <TourCardList places={places}/>}
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
