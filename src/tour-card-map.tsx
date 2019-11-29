import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { onApiLoad, isFilled} from "./map-utils"
const classNames = require("classnames")

type InfoWindowProps = {
  place: any
}

const InfoWindow: React.FC<InfoWindowProps> = ({place}) => {
  const handleClick = (ev: any) => {
    ev.preventDefault()
    //Preventing bubbling up of event to map body
    ev.stopPropagation()
    //console.log("Click on Info Captured", ev)
  }
  return (
    <Card border="primary" style={{ width: '14rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/phIFdC6lA4E/512x512" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      {/*<div className="info-window-style" onClick={handleClick}>
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
    </div>*/}
    </Card>
    
  );
};

type MapMarkerProps = {
  key: number
  lat: number
  lng: number
  text: string
  show: boolean
  place: any,
  $hover?: boolean  
}


const MapMarker: React.FC<MapMarkerProps> = (props: MapMarkerProps) => {
const  markerClass = classNames({
  'pin': true,
  'bounce': true,
  'pin-pressed': props.show,
  'pin-over': props.$hover
});
return (
  <React.Fragment>
    <div className={markerClass}>
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

type TourCardMapState = {
  places: any[]
}

class TourCardMap extends React.Component<TourcardMapProps, TourCardMapState> {
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

  getPlaceById = (id: number | string, currentState?: TourCardMapState) => {
    id = typeof id === 'string' ? parseInt(id, 10) : id
    const actionState = currentState || this.state
    return actionState.places.find((currentPlace:any) => currentPlace.id === id);
  }

  closeAllInfoWindows = () => {
    this.setState((state: TourCardMapState) => {
      state.places.forEach((place: any) => place.show = false)
      return { places: state.places };
    })
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key:any, props: any) => {
    this.closeAllInfoWindows()
    this.setState((state: any) => {
      console.log('key - ', key)
      console.log('state - ', state)
      console.log('props - ', props)
      const clickedPlace = this.getPlaceById(key, state)
      clickedPlace.show = !clickedPlace.show
      //const index = state.places.findIndex((e:any) => e.id === parseInt(key, 10));
      //state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  handleMapClick = (clickedProps: any) => {
    console.log("---- Click on Map Body Captured ---")
    console.log(clickedProps)
    this.closeAllInfoWindows()
  }

  createMapOptions = (maps: any) => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: true,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    }
  }

  handleChange = (changeProps: any) => {
    console.log("Change noted...")
    console.log(changeProps)
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
            onChange={this.handleChange}
            hoverDistance={25}
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