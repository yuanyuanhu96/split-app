import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Project from '../Project';
import './index.css';

// import Dropdown from '../Dropdown';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import lgShow from 'react-bootstrap/Modal';

export default class NewProj extends Component {
  state = { friend: [1, 1] };

  creatProject = () => {
    this.props.changeAppState.setState({
      load: <Project changeAppState={this.props.changeAppState} />,
    });
  };

  close = () => {
    this.props.payment.setState({ modal: false });
  };

  addItem = () => {
    let { friend } = this.state;
    friend.push(1);
    this.setState(friend);
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
              New Trip
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h6>Trip Name</h6>
              <Form.Control type="text" placeholder="Name your Trip" />

              <br />

              <h6>Invite Friends</h6>

              {/* <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Sarah</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Megan</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Yuanyuan</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Evie</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              {this.state.friend.map(() => (
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="abc@example.com"
                    aria-label="abc@example.com"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Select
                  </Button>
                </InputGroup>
              ))}
              <div>
                <Button onClick={this.addItem} variant="link">
                  + Add Friend
                </Button>
              </div>
              <br />

              <div className="modal-action">
                <div className="nudge-block"></div>
                <div className="button-group">
                  <Button variant="secondary" type="discard">
                    Discard
                  </Button>
                  <Button
                    onClick={this.creatProject}
                    variant="primary"
                    type="submit"
                  >
                    Create Trip
                  </Button>
                </div>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
