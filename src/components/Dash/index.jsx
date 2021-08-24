import React, { Component } from 'react';
import ProjCard from '../ProjCard';
import './index.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NewProj from '../NewProj';

export default class Dash extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <NewProj changeAppState={this.props.changeAppState} />,
    });
  };

  render() {
    return (
      <div>
        <header>
          <Button onClick={this.handleClick}>Add New Trip</Button>
        </header>
        <br />
        <Container>
          <Row>
            <Col>
              {' '}
              <ProjCard changeAppState={this.props.changeAppState} />
            </Col>
            <Col>
              {' '}
              <ProjCard changeAppState={this.props.changeAppState} />
            </Col>
          </Row>
          <br />

          <Row>
            <Col>
              {' '}
              <ProjCard changeAppState={this.props.changeAppState} />
            </Col>
            <Col>
              {' '}
              <ProjCard changeAppState={this.props.changeAppState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
