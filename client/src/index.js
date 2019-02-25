import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
  } from 'react-router-dom'

// Components
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={ client } >
    <Root />
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
