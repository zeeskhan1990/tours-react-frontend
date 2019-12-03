import React, { useRef, useState, useEffect, ReactComponentElement, ReactChild } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import TourFilter from "./tour-filter";
import TourModal from "./tour-modal"
import TourCardList from "./tour-list-view"
import TourCardMap from "./tour-map-view"
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
        });
        setPlaces(data.results)
        console.log("Mounting end")
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log("*** All Updates Effect ***")
  })

  const findCollectionById = <T, K extends keyof T>(id: React.ReactText, collection: T[]) => {
    id = typeof id === 'string' ? parseInt(id, 10) : id
    return collection.find((currentPlace:any) => currentPlace.id === id);
  }

  //Generic array of objects update by id method
  const findAndUpdateCollectionById = <T, K extends keyof T>(id: React.ReactText, collection: T[], collectionKey: K, collectionValue: T[K]) => {
    const collectionProperty = findCollectionById(id, collection)
    if(typeof collectionProperty !== 'undefined') {
      collectionProperty[collectionKey] = collectionValue
    }
    return collection
  }

  const updatePlaces = (places: Place[]) => {
    setPlaces([...places])
  }

  const updatePlaceMarker = (placeId: Place["id"], mapParam: keyof Place["map"], mapValue: boolean) => {
    let newPlaces = [...places]
    const currentPlace = findCollectionById(placeId, newPlaces)
    //debugger
    console.log("-----********--------")
    console.log("placeId ", placeId)
    console.log("mapParam", mapParam)
    console.log("mapValue", mapValue)
    if(typeof currentPlace !== 'undefined') {
      console.log("currentPlaceMap", currentPlace.map)
      console.log("-----********--------")
      if(mapParam === "show_info" && currentPlace.map.show_info !== mapValue) {
        if(mapRef && mapRef.current) {
          mapRef.current.handleActiveMarker(placeId)
        }      
      } else if(mapParam === "focused") {
        currentPlace.map.focused = mapValue
        setPlaces(findAndUpdateCollectionById(placeId, newPlaces, "map", currentPlace.map)) 
      }
    }    
  }
  return (
    <React.Fragment>
      <Container fluid className="all-tours-title">
        <Row noGutters className="">
            <div className="d-flex my-1 justify-content-between align-items-center align-content-center all-tours-title-block">

              <h4 className="mr-2 mb-0">All Tours</h4>
              <div className="d-flex align-items-center justify-content-between">
                {showMap ? <Button variant="outline-secondary mr-3 header-filter-button" size="sm"
                onClick={() => setModalShow(true)}>
                  <span><i className="fa fa-filter"></i> Filters</span>
                </Button> : null}
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Show Map"
                  className="text-nowrap show-map-toggle"
                  onChange={() => setShowMap(!showMap)}
                  checked={showMap}
                />
              </div>
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
      {!showMap ? <div className="btn-circle-fab d-lg-none" onClick={() => setModalShow(true)}><i className="fa fa-filter tour-icons"></i></div> : null}

      <TourModal show={modalShow} onHide={() => setModalShow(false)}
      closeText="Apply" header="Tour Filters">
        <TourFilter/>
      </TourModal>
    </React.Fragment>
  );
};

export default AllTours;
