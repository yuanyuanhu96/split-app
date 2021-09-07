import React, { Component } from 'react';
import Dash from '../../home-page/Dash';
import IconFinder from '../../IconFinder';
import Container from 'react-bootstrap/Container';
import BackToHome from '../BackToHome';

import './index.css';

export default class SecondaryNav extends Component {
  handleClick = () => {
    this.props.changeAppState.setState({
      load: <Dash changeAppState={this.props.changeAppState} />,
    });
  };
  render() {
    return (
      <div class="whtte-bg">
        <Container>
          <div className="secondary-nav">
            <div className="menu">
              <div>
                <BackToHome changeAppState={this.props.changeAppState} />
                <h4 className="inline-h">{this.props.projectName}</h4>{' '}
              </div>
            </div>
            <IconFinder className="avatar" name="more" href="#" />
          </div>
        </Container>
      </div>
    );
  }
}
