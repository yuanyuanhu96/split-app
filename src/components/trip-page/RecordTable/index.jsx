import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Item from '../Item';
import './index.css';

export default class RecordTable extends Component {
  render() {
    return (
      <div className="scroll-table">
        <Table className="record-table" bordered responsive>
          {/* Table header is friends name */}
          <thead>
            <tr>
              <th colSpan="2"></th>
              {this.props.people.map((person) => (
                <th>{person}</th>
              ))}
            </tr>
          </thead>

          {/* Table rows is Items and money paied by earch person */}
          <tbody>
            {this.props.linedItems.map((element) => (
              <Item
                key={element.time}
                id={element.time}
                linedItems={this.props.linedItems}
                item={element}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
                project={this.props.project}
              />
            ))}

            {/* Add new item button take a row */}
            <tr className="process-row">
              <td></td>
              <td>
                <b>Total Paid</b>
              </td>
              {this.props.sum.map((data) => (
                <td>{data}</td>
              ))}
            </tr>
            <tr>
              <td colSpan="5" class="new-item-row">
                <Button onClick={this.props.addItem} variant="link">
                  + New Item
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
      </div>
    );
  }
}
