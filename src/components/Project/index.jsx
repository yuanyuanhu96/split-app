import React, { Component } from 'react';
import RecordTable from '../RecordTable';
import Payment from '../Payment';
import ProjHeader from '../ProjHeader';
import Result from '../Result';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './index.css';
import calculator from './calculator';

export default class Project extends Component {
  state = {
    people: ['', 'Yuanyuan', 'Sarah', 'Evie'],
    // LinedItems saves all the expenses
    projectName: 'Yellow Stone ',
    linedItems: [
      ['Airbnb 06/21-06/23', 20, 0, 0],
      ['Car rent', 600, 40, 0],
      ['Gas', 30, 0, 30],
    ],
    sum: [],
    overPay: [],
    result: [{}],
    isRecord: true,
  };

  componentDidMount() {
    let { people, linedItems } = this.state;
    let newResult = calculator(people, linedItems);
    this.setState({ result: newResult });
  }

  addItem = () => {
    let { linedItems } = this.state;
    linedItems.push(['Item Name', 0, 0, 0]);
    this.setState(linedItems);
  };

  goToPayment = () => {
    this.setState({ page: <Payment /> });
  };

  goToRecord = () => {
    this.setState({ page: <RecordTable /> });
  };

  render() {
    return (
      <div>
        {/* Header contains project name and Navigation */}

        <ProjHeader
          projectName={this.state.projectName}
          changeAppState={this.props.changeAppState}
        />

        <Container>
          {/* Project content contains record table */}
          <RecordTable
            people={this.state.people}
            linedItems={this.state.linedItems}
            addItem={this.addItem}
          />

          <Result result={this.state.result} />

          <div class="button-group-end">
            <Button variant="primary" onClick={this.goToPayment}>
              Start Payment
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
