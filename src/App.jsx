import './App.css';
import React, { Component } from 'react';
import Dash from './components/Dash';
// import NewProj from './components/NewProj';
// import Project from './components/Project';

export default class App extends Component {
  state = { load: <Dash changeAppState={this} /> };

  render() {
    return <div>{this.state.load}</div>;
  }
}
