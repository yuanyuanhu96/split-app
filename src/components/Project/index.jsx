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
    people: ['Yuanyuan', 'Sarah', 'Evie'],
    // LinedItems saves all the expenses
    projectName: 'Yellow Stone ',
    linedItems: [{ name: 'Airbnb', spent: [100, 0, 0], time: 0 }],

    result: [{}],
    isRecord: true,
  };

  componentDidMount() {
    let { people, linedItems } = this.state;
    let newResult = calculator(people, linedItems);
    console.log(newResult);

    this.setState({ result: newResult });
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

  deleteItem() {
    const newItems = this.linedItems.filter(
      (item) => item.time !== this.item.time
    );
    this.project.setState({ linedItems: newItems });
    console.log(this);
  }

  editItem = () => {
    this.setState();
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
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            project={this}
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
