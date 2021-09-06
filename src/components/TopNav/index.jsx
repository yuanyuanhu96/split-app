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
        <IconFinder className="menu" name="menu" />
        <IconFinder className="avatar" name="avatar" href="#home" />
      </div>
    );
  }
}
