import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './index.css';

export default class TabNav extends Component {
  render() {
    return (
      <div className="tabs">
        <Container>
          <button href="#" className="tab-active" variant="link">
            Record
          </button>
          <button href="#" className="tab-rest" variant="link">
            Payment
          </button>
        </Container>
      </div>
    );
  }
}
