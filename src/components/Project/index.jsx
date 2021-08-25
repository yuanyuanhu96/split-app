import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Record from '../Record';
import Payment from '../Payment';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Container>
          <br />

          <BackToHome changeAppState={this.props.changeAppState} />

          <br />
          <br />

          <h2>Yellow Stone</h2>
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

          {this.state.page}

          <Row>
            <Col>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Average
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Average</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Option-b</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Option-c</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col> </Col>
            <Col>
              {' '}
              <Button variant="primary" onClick={this.goToPayment}>
                Start Payment
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
