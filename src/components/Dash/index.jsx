import React, { Component } from 'react';
import ProjCard from '../ProjCard';
import './index.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import NewProj from '../NewProj';

export default class Dash extends Component {
  state = { project: [0, 0, 0] };
  openModal = () => {
    this.setState({ modal: true });
  };
  render() {
    return (
      <div>
        <div className="dash-header">
          <Container>
            <h1> TripKeeper</h1>
            <h5>Split trip expenses with friends</h5>
            <br />
            <Button onClick={this.openModal}>Add New Trip</Button>
          </Container>
        </div>
        <br />
        <Container>
          {this.state.project.map((element) => (
            <ProjCard changeAppState={this.props.changeAppState} />
          ))}
        </Container>
        {(() => {
          switch (this.state.modal) {
            case true:
              return (
                <NewProj
                  payment={this}
                  changeAppState={this.props.changeAppState}
                />
              );
            case false:
              return '';
            default:
              return '';
          }
        })()}
      </div>
    );
  }
}
