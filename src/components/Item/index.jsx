import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Cell from '../Cell';

import './index.css';

export default class Item extends Component {
  render() {
    const { name } = this.props.item;

    return (
      <tr>
        <td className="item-name">
          <input
            className="editable-td"
            type="text"
            id="fname"
            name="fname"
            defaultValue={name}
          />
          <Button
            id={this.props.item.time}
            className="delete-while-hover"
            onClick={(id) => this.props.deleteItem(id)}
            variant="link"
            project={this.props.project}
          >
            Delete
          </Button>
        </td>

        {this.props.item.spent.map((value, i) => (
          <Cell
            value={value}
            editItem={this.props.editItem}
            id={this.props.item.time + '-' + i}
          />
        ))}
      </tr>
    );
  }
}
