import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Project from '../Project';
import BackToHome from '../BackToHome';

import Container from 'react-bootstrap/Container';

export default class NewProj extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Project changeAppState={this.props.changeAppState} />,
    });
  };

  render() {
    return (
      <div>
        <Container>
          <br />

          <BackToHome changeAppState={this.props.changeAppState} />

          <Form>
            <br />
            <br />
            <Form.Control size="lg" type="text" placeholder="Name your Trip" />
            <br />
            <h4>Select Friends</h4>
            <br />
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                people
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sarah</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Megan</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Yuanyuan</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Evie</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br />
            <h4>Add Friends</h4> <br />
            <Form.Control type="text" placeholder="Name" />
            <br />
            <Form.Control type="email" placeholder="Enter email" />
            <br />
            <Button variant="secondary" type="discard">
              Discard
            </Button>
            <span>&nbsp;</span>
            <Button onClick={this.handleClick} variant="primary" type="submit">
              Create Project
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
