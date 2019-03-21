import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from './toggle';

class App extends Component {
  state = { date: new Date()};
  tick(){
    this.setState({date: new Date()})
  }

  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }



  render() {
    return (
      // <div onClick={this.props.onClick}>This has been clicked {this.props.clicks} times</div>
      <div>
      <div>Time is - {this.state.date.toLocaleTimeString()}
      </div>
      <Toggle />
      </div>
    );
  }
}

// function App(props) {
//   return (<div onClick={props.onClick}>This has been clicked {props.clicks} times</div>);
// }

export default App;
