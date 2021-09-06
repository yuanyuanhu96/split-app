import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Project from '../../trip-page/Project';
import IconFinder from '../../IconFinder';
import './index.css';

export default class ProjCard extends Component {
  cardClicked = () => {
    this.props.changeAppState.setState({
      load: <Project changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <div>
        <Card className="proj-card svg-button" onClick={this.cardClicked}>
          <Card.Body>
            <Card.Title>Trip name</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="link">
              Copy Link
              <IconFinder name="link" />
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
