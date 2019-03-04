import React from "react";
import styled from "styled-components";
import {Query} from "react-apollo";
import {HOME_PAGE} from "./queries";

const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if(loading) return <span>loading...</span>;
        if(error) return <span>error!!</span>;
        return data.getmovielistAPI.map(movie =>
          <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>
        ) 
      }}
    </Query>
  </Container>);

export default Home;
