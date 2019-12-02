import React from "react";
import {
  Container,
  Card,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col
} from "react-bootstrap";
import Place from "./Place"

type TourPanelProps = {
    places: Place[]
    updatePlaceMarker:  (placeId: Place["id"], placeMap: Place["map"]) => void    
}

const TourPanel: React.FC<TourPanelProps> = (props) => {
  const {places, updatePlaceMarker} = props
  const handleCardAction = (actionType: "mouseEnter" | "mouseLeave" | "click", place: Place ) => {
      switch(actionType) {
        case "mouseEnter" :
          updatePlaceMarker(place.id, {show_info: place.map.show_info, focused: true} )
          break;
        case "mouseLeave" :
          updatePlaceMarker(place.id, {show_info: place.map.show_info, focused: false} )
          break;
        case "click" :
            updatePlaceMarker(place.id, {show_info: true, focused: place.map.focused} )
            break;
      }
  }
  return (
    <React.Fragment>
        {places.map((currentPlace) => {
            return (                        
                <div className="card mb-3" 
                onMouseEnter={(e) => handleCardAction("mouseEnter", currentPlace)}
                onMouseLeave={(e) => handleCardAction("mouseLeave", currentPlace)}
                onClick={(e) => handleCardAction("click", currentPlace)}>
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={currentPlace.image.small} className="img-fluid" height="150px" width="200px" alt=""/>
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h4 className="card-title">{currentPlace.name}</h4>   
                                <p className="card-text">{currentPlace.title}</p>
                                <Row className="mt-3">
                                    <Col className="tour-pointer">
                                        <i className="fas fa-map-marker-alt tour-icons" /><span> {currentPlace.starting_point}</span>
                                    </Col>
                                    <Col className="tour-pointer">
                                        <i className="fas fa-calendar tour-icons" /><span> {currentPlace.next_date}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="tour-pointer">
                                        <i className="fas fa-flag tour-icons" /><span> {currentPlace.stops} Stops</span>
                                    </Col>
                                    <Col className="tour-pointer">
                                        <i className="fas fa-user tour-icons" /><span> {currentPlace.max_participants} People</span>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </React.Fragment>
    )
}



export default TourPanel;