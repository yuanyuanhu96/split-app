import React, { Component } from 'react';
import TopNav from '../TopNav';
import FloatingButton from '../FloatingButton';
import Container from 'react-bootstrap/Container';

import './index.css';

export default class DashHeader extends Component {
  render() {
    return (
      <div className="dash-header">
        <Container>
          <TopNav />
          <div className="hero-text">
            <h1> TripKeeper</h1>
            <span>Split trip expenses with friends</span>
          </div>

          <div className="fab-container">
            <div className="fab-placeholder"></div>
            <FloatingButton className="fab" openModal={this.props.openModal} />
          </div>
        </Container>
      </div>
    );
  }
}
