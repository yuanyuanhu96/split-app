import React, { Component } from 'react';
import Project from '../Project';

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
              <h4 className="inline-h">{this.props.projectName}</h4>
            </div>
            {/* Navigation tab switch between record and payment */}
          </Container>
        </header>
      </div>
    );
  }
}
