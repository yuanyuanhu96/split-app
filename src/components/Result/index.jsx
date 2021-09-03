import React, { Component } from 'react';
import './index.css';

export default class Result extends Component {
  render() {
    return (
      <div className="result-block">
        <b>Result</b>
        <ul>
          {this.props.result.map((element) => (
            <li>
              {element.from} need to pay {element.amount} to {element.to}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
