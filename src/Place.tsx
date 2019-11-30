export default interface Place {
  id: number,
  name: string,
  review_score: number,
  no_of_reviews: number,
  price: string,
  title: string,
  description: string,
  next_date: string,
  starting_point: string,
  max_participants: number,
  stops: number,
  image: {
    main: string,
    small: string
  },
  geometry: {
    location: {
      lat: number,
      lng: number
    }
  },
  map: {
    show_info: boolean,
    focused: boolean
  }  
}