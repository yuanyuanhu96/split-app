import React, { Component } from 'react';
import './index.css';

export default class Result extends Component {
  render() {
    return (
      <div className="result-block">
        <b>Result: &nbsp;</b>

        {this.props.result.map((element, i) =>
          element.ifPay ? (
            <span key={i}>
              {element.subject} need to pay {-element.amount}. &nbsp;
            </span>
          ) : (
            <span key={i}>
              {element.subject} need to recieve {element.amount}. &nbsp;
            </span>
          )
        )}
      </div>
    );
  }
}
