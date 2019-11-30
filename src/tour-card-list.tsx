import React, { useEffect } from "react";
import { Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import Place from "./Place";

const TourCard: React.FC<{place: Place}> = ({place}) => {
  return (
    <Card border="primary">
      <Card.Img
        variant="top"
        src={place.image.small}
        className="tour-card-image"
      />
      <div className="card-image-overlay">
        <span className="tour-card-title-text">{place.name}</span>
      </div>
      <Card.Body>
        <Card.Subtitle className="mb-2">{place.title}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {place.description}
        </Card.Subtitle>
        <Row className="mt-3">
          <Col className="tour-pointer">
            <i className="fas fa-map-marker-alt tour-icons" /><span> {place.starting_point}</span>
          </Col>
          <Col className="tour-pointer">
            <i className="fas fa-calendar tour-icons" /><span> {place.next_date}</span>
          </Col>
        </Row>
        <Row>
          <Col className="tour-pointer">
            <i className="fas fa-flag tour-icons" /><span> {place.stops} Stops</span>
          </Col>
          <Col className="tour-pointer">
            <i className="fas fa-user tour-icons" /><span> {place.max_participants} People</span>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row noGutters={true}>
          <Col className="flex-column">
            <Col>
              <b>{place.price}</b> per head
            </Col>
            <Col className="d-inline text-nowrap">
              <Rating
                emptySymbol="far fa-star tour-icons"
                fullSymbol="fas fa-star tour-icons"
                initialRating={place.review_score}
                readonly
              />
              <span className="text-muted">&nbsp;{place.no_of_reviews}</span>
            </Col>
          </Col>
          <Col className="align-self-center">
            <Button
              variant="primary"
              size="sm"
              block
              className="btn-details"
              type="submit"
            >
              Details
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

type TourCardListProps = {
  places: Place[]
}

const TourCardList: React.FC<TourCardListProps> = (props) => {
  const getCardDeckSet = (props: TourCardListProps) => {
    const noOfPlaces = props.places.length
    const cardDeckSet = []
    for(let i = 0; i < Math.ceil(noOfPlaces/3) ; i++) {
      let j: number,k: number
      k = j = i*3
      const currentCardSet = []
      while(j < k+3 && j < noOfPlaces){
        const currentCard = <TourCard key={props.places[j].id} place={props.places[j]}/>
        currentCardSet.push(currentCard)
        j++
      }
      const currentCardDeck = (
        <CardDeck className="mb-3 mx-3">
          {[currentCardSet]}
        </CardDeck>
      )
      cardDeckSet.push(currentCardDeck)
    }
    return cardDeckSet
  }
  return (
    <React.Fragment>
      {getCardDeckSet(props)}
    </React.Fragment>
  );
};

export default TourCardList;
