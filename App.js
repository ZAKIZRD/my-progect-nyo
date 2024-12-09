import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      numero: 0 
    };
  }

  plus = () => {
    this.setState(e => ({
      numero: e.numero + 1 
    }));
  };

  moin = () => {
    this.setState(e => ({
      numero: e.numero - 1 
    }));
  };

  render() {
    return (
      <div>
        <h1>Le résultat: {this.state.numero}</h1> 
        <button onClick={this.plus}>Pour plus</button> <br /> 
        <button onClick={this.moin}>Pour moins</button> 
      </div>
    );
  }
}

export default Counter;
