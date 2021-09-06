import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import PayMethod from '../PayMethod';

export default class Payment extends Component {
  state = { modal: false };
  openModal = () => {
    this.setState({ modal: true });
  };

  render() {
    return (
      <div>
        <br />
        You don't have payment method <br />
        <br />
        <Button variant="outline-primary" onClick={this.openModal}>
          {' '}
          Add Payment info{' '}
        </Button>
        {(() => {
          switch (this.state.modal) {
            case true:
              return <PayMethod payment={this} />;
            case false:
              return '';
            default:
              return '';
          }
        })()}
        <br />
        <br />
      </div>
    );
  }
}
