import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Project from '../Project';
import './index.css';

export default class ProjCard extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Project changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <div>
        <Card className="proj-card">
          <Card.Body>
            <Card.Title>Trip name</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button onClick={this.handleClick} variant="link">
              Go to Trip
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
