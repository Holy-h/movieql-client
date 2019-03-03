import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./home";
import Detail from "./detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:movieId" component={Detail}/>
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
