import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import './index.css';

export default class TabNav extends Component {
  render() {
    const { isRecord } = this.props;
    return (
      <div className="tabs">
        <Container>
          <button
            href="#"
            className={isRecord ? 'tab-active' : 'tab-rest'}
            variant="link"
            onClick={this.props.goToRecord}
          >
            Record
          </button>
          <button
            href="#"
            className={isRecord ? 'tab-rest' : 'tab-active'}
            variant="link"
            onClick={this.props.goToPayment}
          >
            Payment
          </button>
        </Container>
      </div>
    );
  }
}
