import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    get_movielist(limit: 50, rating: 7){
      id
      title
      genres
      rating
      summary
      language
      medium_cover_image
    }
  }
`