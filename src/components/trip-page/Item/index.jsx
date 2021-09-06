import React, { Component } from 'react';
import Cell from '../Cell';

import './index.css';

export default class Item extends Component {
  render() {
    const { name } = this.props.item;

    return (
      <tr className="record-row">
        <td className="small-cell">
          <button
            className="delete-button"
            onClick={this.props.deleteItem}
            id={this.props.item.time}
          >
            &times;
          </button>
        </td>
        <Cell
          type="text"
          value={name}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
          id={this.props.item.time + '-name'}
        />{' '}
        {this.props.item.spent.map((value, i) => (
          <Cell
            type="number"
            value={value}
            editItem={this.props.editItem}
            id={this.props.item.time + '-' + i}
          />
        ))}
      </tr>
    );
  }
}
