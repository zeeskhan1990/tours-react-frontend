import React from "react";
import {
  Container,
  Card,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Place from "./Place"

type TourPanelProps = {
places: Place[]
}
const TourPanel: React.FC<TourPanelProps> = (props) => {
  const {places} = props
  return (
    <React.Fragment>
        {places.map((currentPlace) => {
            return (
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={currentPlace.image.small} className="img-fluid" alt=""/>
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h4 className="card-title">{currentPlace.name}</h4>
                                <p className="card-text">{currentPlace.title}</p>
                                <a href="#" className="btn btn-primary">BUTTON</a>
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