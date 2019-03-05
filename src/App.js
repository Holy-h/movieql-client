import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./home";
import Detail from "./detail";
import GlobalStyle from './globalStyles';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/details/:movieId" component={Detail}/>
          </main>
        </Router>
        <GlobalStyle/>
      </ApolloProvider>
    );
  }
}

export default App;
