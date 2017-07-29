import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from "jquery"
import Operations from "./components/operations"
class App extends Component {
  
  constructor() {
    super()
    this.state = {
      status: 'NA',
      operations: null
    }
  }

  onClicked = () => {
    this.setState({
      status: 'fetching'
    })

    $.getJSON('data/operation.json', (d) => {
      // console.log(d)
      this.setState({
        status: 'fetched',
        operations: d
      })
    })
  }
  render() {
    let status = this.state.status

    return (
      <div className="container">
        <div>
          <button type="button" className="btn" onClick={ this.onClicked } disabled={ status === 'fetching' }>
            {
              status === 'NA' ? "LOAD" : "REFRESH" 
            }
          </button>
          {
            status === 'NA' ? <span>Load data</span> : status === 'fetching' ? <span>fetching...</span> : <span>fetched</span>
          }

          <Operations operations={ this.state.operations } />
        </div>
      </div>
    );
  }

}

export default App;
