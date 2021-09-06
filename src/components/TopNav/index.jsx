import React, { Component } from 'react';
import Dash from '../Dash';
import IconFinder from '../IconFinder';

import './index.css';

export default class TopNav extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Dash changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <div className="app-nav">
        <div className="menu">
          <IconFinder name="menu" />
        </div>
        <IconFinder className="avatar" name="avatar" href="#home" />
      </div>
    );
  }
}
