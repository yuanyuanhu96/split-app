import React, { Component } from 'react';
import ProjCard from '../ProjCard';
import DashHeader from '../DashHeader';
import Container from 'react-bootstrap/Container';
import NewProj from '../NewProj';

import './index.css';

export default class Dash extends Component {
  state = { project: [0, 0, 0] };
  openModal = () => {
    this.setState({ modal: true });
  };
  render() {
    return (
      <div className="dash-page">
        <DashHeader changeAppState={this.props} openModal={this.openModal} />
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
