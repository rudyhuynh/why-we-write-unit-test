import React, { Component } from 'react';
import logo from './logo.svg';
import './HelloComponent.css';

class HelloComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      helloText: 'Hello World!'
    }
  }
  onClickHello(){
    this.setState({
      helloText: 'Hello Nhựt'
    })
  }
  onClickRefresh(){
    this.setState({
      helloText: 'Hello World!'
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="helloText">{this.state.helloText}</h2>
        </div>
        <button id="helloBtn" className="helloBtn"
          onClick={() => this.onClickHello()}>Hello!</button>{' '}
        <button id="refreshBtn" className="refreshBtn"
          onClick={() => this.onClickRefresh()}>Refresh</button>
      </div>
    );
  }
}

export default HelloComponent;
