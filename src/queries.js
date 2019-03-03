import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    getmovielistAPI(limit: 50, rating: 7){
      id
      title
      genres
      rating
    }
  }
`