import React, { Component } from 'react';
import Project from '../Project';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import BackToHome from '../BackToHome';
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
        {/* Project header,will become an componnet */}
        <header className="project-header">
          <Container>
            <div className="proj-nav">
              <BackToHome changeAppState={this.props.changeAppState} />
              <h3 className="inline-h">{this.props.projectName}</h3>
            </div>
            {/* Navigation tab switch between record and payment */}
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
      </div>
    );
  }
}
