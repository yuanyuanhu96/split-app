import React, { Component } from 'react';
import RecordTable from '../RecordTable';
import Payment from '../Payment';
import ProjHeader from '../ProjHeader';
import TabNav from '../TabNav';
import Result from '../Result';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Visualization from '../Visualization';

import './index.css';
import calculator from './calculator';

export default class Project extends Component {
  state = {
    people: ['Yuanyuan', 'Sarah', 'Evie'],
    // LinedItems saves all the expenses
    projectName: 'Yellow Stone ',
    linedItems: [{ name: 'Airbnb', spent: [100, 0, 0], time: 0 }],
    sum: [],
    result: [{}],
    isRecord: true,
  };

  componentDidMount() {
    this.calculate();
  }

  calculate() {
    let { people, linedItems } = this.state;
    let newResult = calculator(people, linedItems)[0];
    let newSum = calculator(people, linedItems)[1];
    console.log(newResult);
    this.setState({ result: newResult, sum: newSum });
  }

  addItem = () => {
    let { linedItems } = this.state;
    linedItems.push({
      name: 'new item',
      spent: [0, 0, 0],
      time: Date.now(),
    });
    this.setState(linedItems);
  };

  deleteItem = (event) => {
    const { id } = event.target;
    const idSplited = id.split('-');
    const time = parseInt(idSplited[0]);
    const newItems = this.state.linedItems.filter((item) => item.time !== time);
    this.setState({ linedItems: newItems });
    console.log(event);
  };

  editItem = (event) => {
    // Parsing tartget id
    const { id, value } = event.target;
    const idSplited = id.split('-');
    const time = parseInt(idSplited[0]);
    const i = parseInt(idSplited[1]);
    //finding this item
    const itemIndex = this.state.linedItems.findIndex(
      (item) => item.time === time
    );
    const newItems = this.state.linedItems;

    if (event.target.type === 'number') {
      newItems[itemIndex].spent[i] = parseInt(value);
      this.calculate();
    } else if (event.target.type === 'text') {
      newItems[itemIndex].name = value;
    }

    this.setState({ linedItems: newItems });
    console.log(event.target.type);
  };

  goToPayment = () => {
    this.setState({ isRecord: false });
  };

  goToRecord = () => {
    this.setState({ isRecord: true });
  };

  render() {
    return (
      <div className="trip-page">
        {/* Header contains project name and Navigation */}

        <ProjHeader
          projectName={this.state.projectName}
          changeAppState={this.props.changeAppState}
        />

        <TabNav
          goToPayment={this.goToPayment}
          goToRecord={this.goToRecord}
          isRecord={this.state.isRecord}
        />

        <br />

        <Container>
          {/* Project content conditional rendering  */}
          {this.state.isRecord ? (
            <RecordTable
              people={this.state.people}
              linedItems={this.state.linedItems}
              sum={this.state.sum}
              addItem={this.addItem}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
              project={this}
            />
          ) : (
            <Visualization />
          )}
          <br />

          <Result result={this.state.result} />
        </Container>

        {/* action area */}

        <div className="action-block">
          <Container>
            <div class="button-group-end">
              <Button variant="primary" onClick={this.goToPayment}>
                Start Payment
              </Button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
