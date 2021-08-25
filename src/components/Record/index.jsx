import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class Record extends Component {
  state = {
    page: 'record',
    people: ['', 'Yuanyuan', 'Sarah', 'Evie'],
    linedItems: [
      ['Airbnb 06/21-06/23', 20, 0, 0],
      ['Car rent	', 6, 40, 0],
      ['Gas', 30, 0, 30],
    ],
    sum: [],
    overPay: [],
    result: [{}],
  };

  calculateSum = () => {
    let { linedItems } = this.state;
    let newSum = ['SUM', 0, 0, 0];
    linedItems.forEach((element) => {
      for (let i = 1; i < element.length; i++) {
        newSum[i] += element[i];
      }
    });
    this.setState({ sum: newSum });
    return newSum;
  };

  calculateAverage = (newSum) => {
    let total = 0;
    let average = 0;

    for (let i = 1; i < newSum.length; i++) {
      total += newSum[i];
      average = Math.round(total / i);
    }
    return average;
  };

  calculateOver = (average, newSum) => {
    let newOver = ['OVERPAY', 0, 0, 0];

    for (let i = 1; i < newSum.length; i++) {
      newOver[i] = newSum[i] - average;
    }
    this.setState({ overPay: newOver });
    return newOver;
  };

  calculateResult = (overPay) => {
    let { people } = this.state;
    let newResult = [];

    for (let i = 1; i < overPay.length; i++) {
      if (overPay[i] <= 0) {
        let absolutetAmount = -overPay[i];
        newResult.push({ from: people[i], to: '', amount: absolutetAmount });
      }
    }

    for (let i = 1; i < overPay.length; i++) {
      if (overPay[i] > 0) {
        newResult.forEach((element) => (element.to = people[i]));
      }
    }

    this.setState({ result: newResult });
  };

  calculate = () => {
    let newSum = this.calculateSum();
    let average = this.calculateAverage(newSum);
    let overPay = this.calculateOver(average, newSum);
    this.calculateResult(overPay);
  };

  componentDidMount() {
    this.calculate();
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {this.state.people.map((person) => (
                <th>{person}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.linedItems.map((Item) => (
              <tr>
                {Item.map((element) => (
                  <td>{element}</td>
                ))}
              </tr>
            ))}
            <tr>
              {this.state.sum.map((element) => (
                <th>{element}</th>
              ))}
            </tr>
            <tr>
              {this.state.overPay.map((element) => (
                <th>{element}</th>
              ))}
            </tr>
          </tbody>
        </Table>

        <ul>
          {this.state.result.map((element) => (
            <li>
              {element.from} need to pay {element.amount} to {element.to}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
