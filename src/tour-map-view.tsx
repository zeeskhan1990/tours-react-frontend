import React from "react";
import { Row, Col, CardDeck, Card, Button, Image } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { onApiLoad, isFilled } from "./map-utils";
import Place from "./Place";
const classNames = require("classnames");

declare const google: any;

type InfoWindowProps = {
  place: Place;
  mapInstance: any;
};

const InfoWindow: React.FC<InfoWindowProps> = ({ place }) => {
  return (
    <Card border="primary" style={{ width: "274px", zIndex: 1 }}>
      <Card.Img
        variant="top"
        src={place.image.small}
        style={{ height: "184px" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{place.name}</span>
          <span>{place.price}</span>
        </Card.Title>
        <Card.Subtitle>{place.title}</Card.Subtitle>
        <div className="mt-3 d-flex justify-content-between">
          <div className="tour-pointer">
            <i className="fas fa-map-marker-alt tour-icons" />
            <span> {place.starting_point}</span>
          </div>
          <div className="tour-pointer">
            <i className="fas fa-calendar tour-icons" />
            <span> {place.next_date}</span>
          </div>
          <div className="tour-pointer">
            <i className="fas fa-star tour-icons" />
            <span> {place.review_score}</span>
          </div>
        </div>
        <Card.Text />
      </Card.Body>
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
  mapInstance: any;
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
      {props.show && (
        <InfoWindow place={props.place} mapInstance={props.mapInstance} />
      )}
    </React.Fragment>
  );
};

type TourCardMapProps = {
  places: Place[];
  updatePlaces: (places: Place[]) => void;
};

type TourCardMapState = {
  mapInstance: any;
  mapParams: any;
  hasActiveInfo: boolean;
  showPlacesSlider: boolean
};

class TourCardMap extends React.Component<TourCardMapProps, TourCardMapState> {
  constructor(props: TourCardMapProps) {
    super(props);

    this.state = {
      mapInstance: null,
      mapParams: null,
      hasActiveInfo: false,
      showPlacesSlider: false
    };
  }
  componentDidMount() {
    console.log("Map Mounting start");
  }

  componentDidUpdate(prevProps: TourCardMapProps, prevState: TourCardMapState) {
    const { places } = this.props;
    const currentActiveInfoState = places.some((place: Place) => place.map.show_info === true)
    if(currentActiveInfoState !== this.state.hasActiveInfo)
      this.setState({hasActiveInfo: currentActiveInfoState})
  }

  componentWillUnmount() {
    this.defocusAllMarkers()
    this.closeAllInfoWindows()
  }

  getPlaceById = (id: number | string, places?: Place[]) => {
    id = typeof id === "string" ? parseInt(id, 10) : id;
    if(typeof places === 'undefined') {
      places = this.props.places
    }
    return places.find((currentPlace: any) => currentPlace.id === id);
  };

  closeAllInfoWindows = () => {
    const allProps = { ...this.props };
    const { places } = allProps;
    places.forEach((place: Place) => (place.map.show_info = false));
    this.props.updatePlaces(places);
  };

  defocusAllMarkers = () => {
    const allProps = { ...this.props };
    const { places } = allProps;
    places.forEach((place: Place) => (place.map.focused = false));
    this.props.updatePlaces(places);
  };

  repositionMap = (activePlace: Place) => {
    const infoWindowWidth = 274;
    const infoWindowHeight = 306;
    const currentCenter = this.state.mapParams.center;

    const currentLatLng = new google.maps.LatLng(
      activePlace.geometry.location.lat,
      activePlace.geometry.location.lng
    );
    const centerLatLng = new google.maps.LatLng(
      currentCenter.lat,
      currentCenter.lng
    );
    const neLatLang = new google.maps.LatLng(
      this.state.mapParams.bounds.ne.lat,
      this.state.mapParams.bounds.ne.lng
    );
    const swLatLang = new google.maps.LatLng(
      this.state.mapParams.bounds.sw.lat,
      this.state.mapParams.bounds.sw.lng
    );

    const overlay = new google.maps.OverlayView();
    overlay.draw = function() {};
    overlay.setMap(this.state.mapInstance);
    const clickedMarkerPoint = overlay
      .getProjection()
      .fromLatLngToContainerPixel(currentLatLng);
    const centerPoint = overlay
      .getProjection()
      .fromLatLngToContainerPixel(centerLatLng);
    const nePoint = overlay
      .getProjection()
      .fromLatLngToContainerPixel(neLatLang);
    const swPoint = overlay
      .getProjection()
      .fromLatLngToContainerPixel(swLatLang);

    const xPos = infoWindowWidth + clickedMarkerPoint.x;
    const yPos = infoWindowHeight + clickedMarkerPoint.y;
    let isInfoOut = false,
      newCenterX = centerPoint.x,
      newCenterY = centerPoint.y;

    if (xPos > nePoint.x) {
      isInfoOut = true;
      const shiftX = xPos - nePoint.x;
      newCenterX = newCenterX + shiftX + 10; //buffer;
    }
    if (yPos > swPoint.y) {
      isInfoOut = true;
      const shiftY = yPos - swPoint.y;
      newCenterY = newCenterY + shiftY + 10; //buffer;
    }
    if (isInfoOut) {
      const newCenterLatLng = overlay
        .getProjection()
        .fromContainerPixelToLatLng({ x: newCenterX, y: newCenterY });
      this.state.mapInstance.panTo({
        lat: newCenterLatLng.lat(),
        lng: newCenterLatLng.lng()
      });
    }
  };
  
  handleActiveMarker = (placeId:any) => {      
    const allProps = { ...this.props };
    const { places } = allProps;
    placeId = typeof placeId === "string" ? parseInt(placeId, 10) : placeId;
    let activePlace = places.find(
      (currentPlace: any) => currentPlace.id === placeId
    );
    if (typeof activePlace !== "undefined") {
      this.setState({showPlacesSlider: false})
      this.closeAllInfoWindows();
      activePlace.map.show_info = !activePlace.map.show_info;
      this.props.updatePlaces(places);
      this.repositionMap(activePlace);
    }
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key: any, clickedMarkerProps: any) => {
    this.handleActiveMarker(key)
  };

  handleMapClick = (clickedProps: any) => {
    if(!this.state.hasActiveInfo) {
      this.setState((state, props) => {
        return {showPlacesSlider: !state.showPlacesSlider}
      })
    } else {
      this.closeAllInfoWindows();
    }
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
    this.setState({ mapParams: changeProps });
  };

  handleGoogleApiLoad = (map: any, maps: any, places: Place[]) => {
    this.setState({ mapInstance: map });
    onApiLoad(map, maps, places);
  };

  handlePlacesSliderClick = (place: Place) => {
    this.state.mapInstance.panTo({lat: place.geometry.location.lat, lng: place.geometry.location.lng})
    const newPlaces = [...this.props.places]
    newPlaces.forEach((place: Place) => (place.map.focused = false));
    const currentPlace = this.getPlaceById(place.id, newPlaces)
    currentPlace.map.focused = true
    this.props.updatePlaces(newPlaces)
  }

  render() {
    const { places } = this.props;
    return (
      <React.Fragment>
      <div className="tour-map-container sticky-top">
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
            onGoogleApiLoaded={({ map, maps }) =>
              this.handleGoogleApiLoad(map, maps, places)
            }
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
      </div>
      {this.state.showPlacesSlider ? 
      <div className="container-fluid py-2 yest d-lg-none">
          <div className="d-flex flex-row flex-nowrap">
              {places.map((place: Place) => (
                <div className="card tour-bottom-card"
                onClick={(e) => this.handlePlacesSliderClick(place)}>
                <Row noGutters>
                  <Col>
                    <Image src={place.image.small} height="100px" rounded />
                  </Col>
                  <Col>
                  <Row noGutters className="px-2 pt-1">
                    <div><h6>{place.name}</h6></div>
                  </Row>
                  <Row noGutters className="pl-2 flex-column">
                    <Col className="tour-pointer">
                      <i className="fas fa-map-marker-alt tour-icons" /><span> {place.starting_point}</span>
                    </Col>
                    <Col className="tour-pointer">
                      <i className="fas fa-calendar tour-icons" /><span> {place.next_date}</span>
                    </Col>
                  </Row>
                  </Col>
                </Row>
              </div>
              ))}
          </div>
      </div> : null}
      </React.Fragment>
    );
  }
}

export default TourCardMap;
