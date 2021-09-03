import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './index.css';

export default class Item extends Component {
  deleteItem = () => {};
  render() {
    return (
      <tr>
        <td className="item-name">
          {this.props.item.name}
          &nbsp; &nbsp;
          <Button
            className="delete-while-hover"
            onClick={this.deleteItem}
            variant="link"
          >
            Delete
          </Button>
        </td>
        {this.props.item.spent.map((data) => (
          <td>
            <input
              className="editable-td"
              type="text"
              id="fname"
              name="fname"
              defaultValue={data}
            />
          </td>
        ))}
      </tr>
    );
  }
}
