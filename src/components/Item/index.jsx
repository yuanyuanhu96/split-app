import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import './index.css';

export default class Item extends Component {
  state = { itemName: '', itemCost: [] };

  componentDidMount() {
    this.splitArray();
  }

  splitArray = () => {
    const { item } = this.props;
    const itemCost = [];

    this.setState({ itemName: item[0] });

    for (let i = 1; i < item.length; i++) {
      itemCost.push(item[i]);
    }
    this.setState({ itemCost: itemCost });
  };
  deleteItem = () => {};
  render() {
    return (
      // <tr>
      //   {this.props.item.map((element) => (
      //     <td>{element}</td>
      //   ))}
      // </tr>
      <tr>
        <td className="item-name">
          {this.state.itemName}
          <Button onClick={this.deleteItem} variant="link">
            Delete
          </Button>
        </td>
        {this.state.itemCost.map((element) => (
          <td>
            <input
              className="editable-td"
              type="text"
              id="fname"
              name="fname"
              defaultValue={element}
            />
          </td>
        ))}
      </tr>
    );
  }
}
