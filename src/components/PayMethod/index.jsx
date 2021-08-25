import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import lgShow from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class PayMethod extends Component {
  close = () => {
    this.props.payment.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={lgShow}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton onClick={this.close}>
            <Modal.Title id="example-modal-sizes-title-lg">
              Payment Method
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Account</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button onClick={this.close} variant="primary" type="submit">
                Save{' '}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>{' '}
      </div>
    );
  }
}
