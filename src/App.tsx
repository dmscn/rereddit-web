import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';
import NotFoundScreen from './components/NotFoundScreen';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomeScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
}
