import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Dash from '../Dash';

export default class ProjCard extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Dash changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="light">
          Back
        </Button>
      </div>
    );
  }
}
