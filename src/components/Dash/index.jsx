import React, { Component } from 'react';
import ProjCard from '../ProjCard';
import './index.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import NewProj from '../NewProj';

export default class Dash extends Component {
  state = { project: [0, 0, 0] };
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <NewProj changeAppState={this.props.changeAppState} />,
    });
  };

  render() {
    return (
      <div>
        <div className="dash-header">
          <Container>
            <h1> TripKeeper</h1>
            <h5>Split trip expenses with friends</h5>
            <br />
            <Button onClick={this.handleClick}>Add New Trip</Button>
          </Container>
        </div>
        <br />
        <Container>
          {this.state.project.map((element) => (
            <ProjCard changeAppState={this.props.changeAppState} />
          ))}
        </Container>
      </div>
    );
  }
}
