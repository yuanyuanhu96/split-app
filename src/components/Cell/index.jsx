import React, { Component } from 'react';
import './index.css';

export default class Cell extends Component {
  render() {
    const { value, id, type } = this.props;
    let ifNumber = true;
    if (type == 'number') {
      ifNumber = true;
    } else {
      ifNumber = false;
    }

    return ifNumber ? (
      <td>
        <input
          className="data-cell"
          type="number"
          defaultValue={value}
          onChange={this.props.editItem}
          id={id}
        />
      </td>
    ) : (
      <td className="item-name">
        <span>
          <input
            type="text"
            defaultValue={value}
            className="data-cell"
            onChange={this.props.editItem}
            id={id}
          />
        </span>
      </td>
    );
  }
}
