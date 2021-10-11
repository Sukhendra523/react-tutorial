import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    // when you need(updated state) to execute code after state has been changed do not placed that code after setState()
    // pass it as 2nd parameter in useState

    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('Callback', this.state.count)
    // })

    // if you change state value without setState method it'll not reflected to UI
    // this.state.count = this.state.count + 1
    // console.log(this.state.count)
  }

  incrementFive() {
    console.log("Inside incrementFive");
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* <button onClick={() => this.increment()}>Increment</button> */}

        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
