import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dash from '../../home-page/Dash';
import './index.css';

export default class BackToHome extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Dash changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <span>
        <Button
          className="back-button"
          onClick={this.handleClick}
          variant="link"
        >
          &larr;
        </Button>
      </span>
    );
  }
}
