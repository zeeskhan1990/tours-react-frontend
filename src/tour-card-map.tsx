import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { onApiLoad, isFilled} from "./map-utils"

type InfoWindowProps = {
  place: any
}

const InfoWindow: React.FC<InfoWindowProps> = ({place}) => {
  const handleClick = (ev: any) => {
    ev.preventDefault()
    ev.stopPropagation()
    console.log("Click on Info Captured", ev)
  }
  return (
    <div className="info-window-style" onClick={handleClick}>
      <div style={{ fontSize: 16 }}>
        {place.name}
      </div>
      <div style={{ fontSize: 14 }}>
      {place.review_score}({place.no_of_reviews})
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {place.description}
      </div>
      <div style={{ fontSize: 14, color: 'grey' }}>
        {`$` + place.price}
      </div>
    </div>
  );
};

type MapMarkerProps = {
  key: number
  lat: number
  lng: number
  text: string
  show: boolean
  place: any  
}
const MapMarker: React.FC<MapMarkerProps> = (props: MapMarkerProps) => {
return (
  <React.Fragment>
    <div className="pin bounce">
      <div className="pin-text">
        {props.text}
      </div>
    </div>
    <div className="pulse"></div>
    {props.show && <InfoWindow place={props.place} />}
  </React.Fragment>    
  )
}

type TourcardMapProps = {
  filePath: string
}

class TourCardMap extends React.Component<TourcardMapProps, any> {
  constructor(props: TourcardMapProps) {
    super(props);

    this.state = {
      places: []
    };
  }

  componentDidMount() {
    console.log("Mounting start")
    fetch(this.props.filePath)
      .then(response => response.json())
      .then(data =>{
        data.results.forEach((result:any) => {
          result.show = false; // eslint-disable-line no-param-reassign
        });
        this.setState({ places: data.results });
        console.log("Mounting end")
      })
      .catch(err => console.log(err))
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key:any, props: any) => {
    this.setState((state: any) => {
      console.log(state)
      const index = state.places.findIndex((e:any) => e.id === parseInt(key, 10));
      state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  handleMapClick = (clickedProps: any) => {
    console.log("---- Click on Map Body Captured ---")
    console.log(clickedProps)
  }

  createMapOptions = (maps: any) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }

  render() {
    const { places } = this.state;
    console.log("Places now")
    console.log(places)
    return (
      <React.Fragment>
        {isFilled(places) && <GoogleMapReact
            defaultCenter={{
              lat: 60.00,
              lng: 30.00
            }}
            defaultZoom={10}
            bootstrapURLKeys={{
              key: 'AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g', //Env variables
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => onApiLoad(map, maps, places)}
            options={this.createMapOptions}
            onChildClick={this.onChildClickCallback}
            onClick={this.handleMapClick}
          >
            {
              places.map((place: any) =>
                (
                  <MapMarker
                    key={place.id}
                    lat={place.geometry.location.lat}
                    lng={place.geometry.location.lng}
                    show={place.show}
                    place={place}
                    text={place.price}
                  />
                )
              )
            }
          </GoogleMapReact>}
      </React.Fragment>
    )
  }
}


export default TourCardMap