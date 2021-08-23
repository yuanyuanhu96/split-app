import React, { Component } from 'react';
import ProjCard from '../ProjCard';
import './index.css';
import Button from 'react-bootstrap/Button';
import NewProj from '../NewProj';

export default class Dash extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({ load: <NewProj /> });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Add New Project</Button>
        <ProjCard />
        <ProjCard />
      </div>
    );
  }
}
