import React from 'react';

import {InputWindow} from '../components/InputWindow';
import {Button} from '../components/Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      input: "0"
    };

    this.handleNumberClick = this.handleNumberClick.bind(this);
  }

  handleNumberClick(num) {
    if (this.state.input === '0') {
      this.setState({input: num.toString()});
    }
    else {
      this.setState(prevState => ({input: prevState.input + num}));
    }
  }

  handlePlusClick() {
    this.setState(prevState => ({
      expression: prevState.expression + '+' + prevState.input,
      input: "0"
    }));
  }

  render() {
    return (
      <div>
        <InputWindow toDisplay={this.state.input}/>
        <Button value="1" handleBtnClick={this.handleNumberClick}/>
        <Button value="2" handleBtnClick={this.handleNumberClick}/>
        <Button value="3" handleBtnClick={this.handleNumberClick}/>
        <Button value="+" operator handleBtnClick={this.handlePlusClick}/>
      </div>
    );
  }
}
