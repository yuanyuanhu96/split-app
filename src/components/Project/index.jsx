import React, { Component } from 'react';
import Dash from '../Dash';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackToHome from '../BackToHome';

export default class Project extends Component {
  render() {
    return (
      <div>
        <Container>
          <br />

          <BackToHome changeAppState={this.props.changeAppState} />

          <br />
          <br />

          <h2>Yellow Stone</h2>
          <Nav variant="tabs" defaultActiveKey="/project/record">
            <Nav.Item>
              <Nav.Link href="/project/record">Record</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/project/result">Result</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/project/payment">Payment</Nav.Link>
            </Nav.Item>
          </Nav>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Yuanyuan</th>
                <th>Sarah</th>
                <th>Evie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Airbnb 06/21-06/23</td>
                <td>$320</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Car rent</td>
                <td></td>
                <td>$600</td>
                <td></td>
              </tr>
              <tr>
                <td>Gas</td>
                <td>$30</td>
                <td></td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Sum</td>
                <td>$350</td>
                <td>$600</td>
                <td>$30</td>
              </tr>
            </tbody>
          </Table>

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
              <Button variant="primary">Start Payment</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
