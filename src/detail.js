import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { DETAIL_PAGE } from "./queries";

const Container = styled.div`

`;

const Detail = ({
  match: { 
    params: { movieId }
    }
  }) => (
  <Container>
    {console.log(movieId)}
    <Query query={ DETAIL_PAGE } variables={{ movieId: parseInt(movieId) }}>
      {({ loading, data, error }) => {
        if(loading) return <span>loading...</span>;
        if(error) {
          console.log(error);
          return <span>error!!</span>;
        }
        return (
          <>
            {data.get_movie.title}
            {data.get_movie.rating}
            {data.get_movie.genres}
            {data.get_movie.description_intro}
            {data.get_movie.medium_cover_image}
          </>
        )
      }}
    </Query>
  </Container>
);

export default Detail;
