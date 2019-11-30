import React from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { onApiLoad, isFilled } from "./map-utils";
import Place from "./Place";
const classNames = require("classnames");

type InfoWindowProps = {
  place: Place;
  mapInstance: any
};

const InfoWindow: React.FC<InfoWindowProps> = ({ place }) => {
  const handleClick = (ev: any) => {
    ev.preventDefault();
    //Preventing bubbling up of event to map body
    ev.stopPropagation();
    //console.log("Click on Info Captured", ev)
  };
  return (
    <Card border="primary" style={{ width: "274px", zIndex:1 }}>
    <Card.Img
      variant="top"
      src={place.image.small}
      style={{ height: "184px" }}
    />
    <Card.Body>
      <Card.Title className="d-flex justify-content-between"><span>{place.name}</span><span>{place.price}</span></Card.Title>
      <Card.Subtitle>{place.title}</Card.Subtitle>
      <div className="mt-2 d-flex justify-content-between">
          <div className="tour-pointer">
            <i className="fas fa-map-marker-alt tour-icons" /><span> {place.starting_point}</span>
          </div>
          <div className="tour-pointer">
            <i className="fas fa-calendar tour-icons" /><span> {place.next_date}</span>
          </div>
        </div>
      <Card.Text>
        
      </Card.Text>
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
  key: number;
  lat: number;
  lng: number;
  text: string;
  show: boolean;
  place: Place;
  $hover?: boolean;
  focused: boolean;
  mapInstance: any
};

const MapMarker: React.FC<MapMarkerProps> = (props: MapMarkerProps) => {
  const markerClass = classNames({
    pin: true,
    bounce: true,
    "pin-pressed": props.show,
    "pin-over": props.$hover || props.focused
  });
  return (
    <React.Fragment>
      <div className={markerClass}>
        <div className="pin-text">{props.text}</div>
      </div>
      <div className="pulse" />
      {props.show && <InfoWindow place={props.place} mapInstance={props.mapInstance}/>}
    </React.Fragment>
  );
};

type TourCardMapProps = {
  places: Place[];
  updatePlaces: (places: Place[]) => void;
};

type TourCardMapState = {
  mapInstance: any
}

class TourCardMap extends React.Component<TourCardMapProps, TourCardMapState> {  

  constructor(props: TourCardMapProps) {
    super(props)
    this.state = {
      mapInstance: null
    }
  }
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

  getPlaceById = (id: number | string) => {
    id = typeof id === "string" ? parseInt(id, 10) : id;
    const { places } = this.props;
    return places.find((currentPlace: any) => currentPlace.id === id);
  };

  closeAllInfoWindows = () => {
    const allProps = { ...this.props };
    const { places } = allProps;
    places.forEach((place: Place) => (place.map.show_info = false));
    this.props.updatePlaces(places);
    console.log("InVOKED Update Places from Close Window!");
  };

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key: any, clickedMarkerProps: any) => {
    console.log("key - ", key);
    console.log("props - ", clickedMarkerProps);
    this.closeAllInfoWindows();
    console.log("InVOKED Close All Infos");
    const allProps = { ...this.props };
    const { places } = allProps;
    key = typeof key === "string" ? parseInt(key, 10) : key;
    let activePlace = places.find(
      (currentPlace: any) => currentPlace.id === key
    );
    console.log("Active place", activePlace);
    if (typeof activePlace !== "undefined") {
      activePlace.map.show_info = !activePlace.map.show_info;
      this.props.updatePlaces(places);
    }
    //this.state
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
    this.state.mapInstance.panTo({lat: clickedProps.lat, lng: clickedProps.lng})
  };

  createMapOptions = (maps: any) => {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollwheel: true,
      zoomControl: false,
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

  handleGoogleApiLoad = (map:any, maps:any, places: Place[]) => {
    console.log("Google API LOADED...");
    this.setState({mapInstance: map})
    debugger
    console.log(map)
    console.log(map.getDiv().offsetWidth)
    console.log(map.getDiv().offsetHeight)
    console.log(map.getBounds())
    onApiLoad(map, maps, places);
  }

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
            onGoogleApiLoaded={({ map, maps }) => this.handleGoogleApiLoad(map, maps, places)}
            options={this.createMapOptions}
            onChildClick={this.onChildClickCallback}
            onClick={this.handleMapClick}
            onChange={this.handleChange}
            margin={[]}
            hoverDistance={25}
          >
            {places.map((place: Place) => (
              <MapMarker
                key={place.id}
                lat={place.geometry.location.lat}
                lng={place.geometry.location.lng}
                show={place.map.show_info}
                place={place}
                text={place.price}
                focused={place.map.focused}
                mapInstance={this.state.mapInstance}
              />
            ))}
          </GoogleMapReact>
        )}
      </React.Fragment>
    );
  }
}

export default TourCardMap;
