import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './index.css';

export default class Item extends Component {
  render() {
    const { name, spent } = this.props.item;

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
        {spent.map((data) =>
          data === 0 ? (
            <td>
              <input
                className="editable-td"
                type="number"
                id="fname"
                name="fname"
                placeholder="0"
              />
            </td>
          ) : (
            <td>
              <input
                className="editable-td"
                type="number"
                id="fname"
                name="fname"
                defaultValue={data}
              />
            </td>
          )
        )}
      </tr>
    );
  }
}
