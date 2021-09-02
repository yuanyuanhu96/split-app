import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Project from '../Project';
import BackToHome from '../BackToHome';
import Dropdown from '../Dropdown';

import Container from 'react-bootstrap/Container';

export default class NewProj extends Component {
  state = { friend: [1, 1, 1] };

  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Project changeAppState={this.props.changeAppState} />,
    });
  };

  addItem = () => {
    let { friend } = this.state;
    friend.push(1);
    this.setState(friend);
  };

  render() {
    return (
      <div>
        <Container>
          <br />

          <BackToHome changeAppState={this.props.changeAppState} />

          <Form>
            <br />
            <Form.Control size="lg" type="text" placeholder="Name your Trip" />
            <br />
            <b>Invite Friends</b> <br /> <br />
            <Dropdown>
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
            </Dropdown>
            <br />
            {this.state.friend.map(() => (
              <div>
                <Form.Control type="email" placeholder="Enter email" />
                <br />
              </div>
            ))}
            <div>
              <Button onClick={this.addItem} variant="link">
                + Add Friend
              </Button>
            </div>
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
