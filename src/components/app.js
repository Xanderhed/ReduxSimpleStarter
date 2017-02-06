import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Hello puny mortals!</h3>
        {this.props.children}
      </div>
    );
  }
}
