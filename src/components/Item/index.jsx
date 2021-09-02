import React, { Component } from 'react';

import './index.css';

export default class BackToHome extends Component {
  deleteItem = () => {};
  render() {
    return (
      // <tr>
      //   {this.props.item.map((element) => (
      //     <td>{element}</td>
      //   ))}
      // </tr>
      <tr>
        {this.props.item.map((element) => (
          <td>{element}</td>
        ))}
      </tr>
    );
  }
}
