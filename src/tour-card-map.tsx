import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { onApiLoad, isFilled } from "./map-utils";
import Place from "./Place";
const classNames = require("classnames");

type InfoWindowProps = {
  place: Place;
};

const InfoWindow: React.FC<InfoWindowProps> = ({ place }) => {
  const handleClick = (ev: any) => {
    ev.preventDefault();
    //Preventing bubbling up of event to map body
    ev.stopPropagation();
    //console.log("Click on Info Captured", ev)
  };
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
  key: number;
  lat: number;
  lng: number;
  text: string;
  show: boolean;
  place: Place;
  $hover?: boolean;
};

const MapMarker: React.FC<MapMarkerProps> = (props: MapMarkerProps) => {
  const markerClass = classNames({
    pin: true,
    bounce: true,
    "pin-pressed": props.show,
    "pin-over": props.$hover
  });
  return (
    <React.Fragment>
      <div className={markerClass}>
        <div className="pin-text">{props.text}</div>
      </div>
      <div className="pulse" />
      {props.show && <InfoWindow place={props.place} />}
    </React.Fragment>
  );
};

type TourcardMapProps = {
  places: Place[];
  focusedPlace: Place | null;
  updatePlaces: (places: Place[]) => void
};

class TourCardMap extends React.Component<TourcardMapProps> {

  componentDidMount() {
    console.log("Map Mounting start");
    /*fetch(this.props.filePath)
      .then(response => response.json())
      .then(data => {
        data.results.forEach((result: any) => {
          result.show = false; // eslint-disable-line no-param-reassign
        });
        this.setState({ places: data.results });
        console.log("Mounting end");
      })
      .catch(err => console.log(err));*/
  }

  componentDidUpdate(prevProps: TourcardMapProps, prevState: any) {
    console.log("!!! Map Component Has been Updated !!!")
    console.log(this.props)
    console.log(prevProps)
  }

  getPlaceById = (id: number | string) => {
    id = typeof id === "string" ? parseInt(id, 10) : id;
    const {places} = this.props
    return places.find(
      (currentPlace: any) => currentPlace.id === id
    );
  };

  closeAllInfoWindows = () => {    
    const allProps = {...this.props}
    const {places} = allProps
    places.forEach((place: Place) => (place.show = false));
    this.props.updatePlaces(places)
    console.log("InVOKED Update Places from Close Window!")
  };

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key: any, clickedMarkerProps: any) => {
    console.log("key - ", key);
    console.log("props - ", clickedMarkerProps);
    this.closeAllInfoWindows();
    console.log("InVOKED Close All Infos")    
    const allProps = {...this.props}
    const {places} = allProps
    key = typeof key === "string" ? parseInt(key, 10) : key;
    let activePlace = places.find(
      (currentPlace: any) => currentPlace.id === key
    );
    console.log("Active place", activePlace)
    if(typeof activePlace !== 'undefined') {
      activePlace.show = !activePlace.show;
      this.props.updatePlaces(places)
    }
    /*this.setState((state: any) => {
      console.log("key - ", key);
      console.log("state - ", state);
      console.log("props - ", clickedMarkerProps);
      const clickedPlace = this.getPlaceById(key);
      if(typeof clickedPlace !== 'undefined') {
        clickedPlace.show = !clickedPlace.show;
      }      
      //const index = state.places.findIndex((e:any) => e.id === parseInt(key, 10));
      //state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };*/
    
  };

  handleMapClick = (clickedProps: any) => {
    console.log("---- Click on Map Body Captured ---");
    console.log(clickedProps);
    this.closeAllInfoWindows();
  };

  createMapOptions = (maps: any) => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: true,
      styles: [
        {
          stylers: [
            { saturation: -100 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: "on" }
          ]
        }
      ]
    };
  };

  handleChange = (changeProps: any) => {
    console.log("Change noted...");
    console.log(changeProps);
  };

  render() {
    const { places } = this.props;
    console.log(" In Map Render - Places Now");
    console.log(places);
    return (
      <React.Fragment>
        {isFilled(places) && (
          <GoogleMapReact
            defaultCenter={{
              lat: 60.0,
              lng: 30.0
            }}
            defaultZoom={10}
            bootstrapURLKeys={{
              key: "AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g" //Env variables
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => onApiLoad(map, maps, places)}
            options={this.createMapOptions}
            onChildClick={this.onChildClickCallback}
            onClick={this.handleMapClick}
            onChange={this.handleChange}
            hoverDistance={25}
          >
            {places.map((place: any) => (
              <MapMarker
                key={place.id}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                show={place.show}
                place={place}
                text={place.price}
              />
            ))}
          </GoogleMapReact>
        )}
      </React.Fragment>
    );
  }
}

export default TourCardMap;
