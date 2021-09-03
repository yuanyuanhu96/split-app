import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Item from '../Item';
import './index.css';

export default class RecordTable extends Component {
  render() {
    return (
      <div>
        <Table className="record-table" striped bordered>
          {/* Table header is friends name */}
          <thead>
            <tr>
              {this.props.people.map((person) => (
                <th>{person}</th>
              ))}
            </tr>
          </thead>
          {/* Table rows is Items and money paied by earch person */}
          <tbody>
            {this.props.linedItems.map((element) => (
              <Item item={element} />
            ))}
            {/* Add new item button take a row */}

            <tr>
              <td colSpan="4">
                <Button onClick={this.props.addItem} variant="link">
                  + New Item
                </Button>
              </td>
            </tr>

            <br />
            {/* Sum and over pay shows the process of calculations, currently hidden*/}
            {/* <tr>
              {this.props.sum.map((element) => (
                <td>{element}</td>
              ))}
            </tr>
            <tr>
              {this.props.overPay.map((element) => (
                <td>{element}</td>
              ))}
            </tr> */}
          </tbody>
        </Table>
      </div>
    );
  }
}
