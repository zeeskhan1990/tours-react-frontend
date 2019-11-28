import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent: any = ({ text }) => <div>{text}</div>


const TourCardMap: React.FC = () => {
  return (
    <React.Fragment>
      <GoogleMapReact
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    </React.Fragment>
  )
}

export default TourCardMap