/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

export class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       Count: 0
    }
  }

  Increment =() =>{
    this.setState({
      Count: this.state.Count + 1
    })
  }

  Decrement =() =>{
    this.setState({
      Count: this.state.Count - 1
    })
  }
  Reset = () =>{
    this.setState({
      Count: 0
    })
  }
  
  render() {
    const { Count } = this.state;
    return (
      <div>
        <div className="counter center">
          <h1 className="counter__title">Counter App</h1>
          <div className="card center">
            <h2 className="card__title">Count: {Count}</h2>
            <div className="card__btns">
              <button onClick={this.Increment} className="btn card__btn" disabled = {Count === 5 ? true:false}>+</button>
              <button onClick={this.Decrement} className="btn card__btn" disabled = {Count === -5 ? true:false}>-</button>
              <button onClick={this.Reset} className="btn card__btn" >0</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
