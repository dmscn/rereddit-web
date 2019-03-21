import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeScreen from '../HomeScreen';
import NotFoundScreen from '../NotFoundScreen';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}
