import './App.css';
import './bs-custom.css';

import React, { Component } from 'react';
import Dash from './components/Dash';
import TopNav from './components/TopNav';

// import NewProj from './components/NewProj';
// import Project from './components/Project';

export default class App extends Component {
  state = { load: <Dash changeAppState={this} /> };

  render() {
    return (
      <div>
        <TopNav />
        {this.state.load}
      </div>
    );
  }
}
