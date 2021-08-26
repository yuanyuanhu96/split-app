import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Record from '../Record';
import Payment from '../Payment';
import './index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import BackToHome from '../BackToHome';

export default class Project extends Component {
  state = {
    page: <Record />,
  };

  goToPayment = () => {
    this.setState({ page: <Payment /> });
  };

  goToRecord = () => {
    this.setState({ page: <Record /> });
  };

  render() {
    return (
      <div>
        <header className="project-header">
          <Container>
            <BackToHome changeAppState={this.props.changeAppState} />
            <br />

            <h2>Yellow Stone</h2>

            <br />
            <Nav variant="tabs" defaultActiveKey="/record">
              <Nav.Item>
                <Nav.Link onClick={this.goToRecord} href="/record">
                  Record
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={this.goToPayment} href="/payment">
                  Payment
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>
        <Container>
          {this.state.page}
          <div class="button-group-end">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Average
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Average</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Option-b</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option-c</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{' '}
            <span>&nbsp;</span>
            <Button variant="primary" onClick={this.goToPayment}>
              Start Payment
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
