import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    get_movielist(limit: 50, rating: 7){
      id
      title
      genres
      rating
      description_intro
      language
      medium_cover_image
    }
  }
`;

export const DETAIL_PAGE = gql`
  query getMovieDetails($movieId: Int!){
    get_movie(id: $movieId){
      id
      title
      genres
      rating
      description_intro
      language
      medium_cover_image
    }
    get_moviesuggestion(id: $movieId){
      id
      title
      genres
      rating
      description_intro
      language
      medium_cover_image
    }
  }
`;
