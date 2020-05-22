import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   // for every event handler you do this! OR  ## we can do arrow function ##!
  //   this.handleIncerment = this.handleIncerment.bind(this);
  // }

  // handleIncerment() {
  //   console.log("iNCREMENT CLICKED!", this);
  // }
  // arrow function for event handling

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncerment = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  // the onClick={() => this.handleIncerment(product)} won't work so i need this mehtod to get it work
  doHandleIncrement = () => {
    this.handleIncerment({ id: 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
