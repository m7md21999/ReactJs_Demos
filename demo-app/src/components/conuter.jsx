import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl:
      "https://help.github.com/assets/images/help/repository/repo-create.png",
  };

  style = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="gitHub"></img>
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
