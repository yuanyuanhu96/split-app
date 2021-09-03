import React, { Component } from 'react';
import './index.css';

export default class Cell extends Component {
  render() {
    const { value, id } = this.props;
    return (
      <td>
        <input
          type="number"
          defaultValue={value}
          className="data-cell"
          onClick={this.props.editItem}
          id={id}
        />
      </td>
    );
  }
}
