import React, { Component } from 'react';
import './index.css';

export default class Result extends Component {
  render() {
    return (
      <div className="result-block">
        <b>Result</b>
        <ul>
          {this.props.result.map((element, i) =>
            element.ifPay ? (
              <li key={i}>
                {element.subject} need to pay {-element.amount}
              </li>
            ) : (
              <li key={i}>
                {element.subject} need to recieve {element.amount}
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}
