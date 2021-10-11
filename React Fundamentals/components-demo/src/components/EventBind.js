import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    //approch: 3// this.clickHandler = this.clickHandler.bind(this)
  }

  /*//approch: 0// (will  give error,require eventBinding) */
  ///approch: 1//
  ///approch: 2//
  ///approch: 3//
  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  //approch: 4//
  clickHandler = () => {
    this.setState({ message: "Goodbye" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*//approch: 0// (will  give error,require eventBinding) */}
        {/*//approch: 0// <button onClick={this.clickHandler}>Click</button> */}

        {/*//approch: 1// <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*//approch: 2// <button onClick={() => this.clickHandler()}>Click</button> */}
        {/*//approch: 3// <button onClick={this.clickHandler}>Click</button> */}

        {/* approch: 4*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
