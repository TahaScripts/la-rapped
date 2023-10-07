import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home'
import About from './pages/About'


class App extends Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
      </Router>
    );
  }
}

export default App;
