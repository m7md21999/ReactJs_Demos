import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
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

  handleIncerment = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  // the onClick={() => this.handleIncerment(product)} won't work so i need this mehtod to get it work
  // doHandleIncrement = () => {
  //   this.handleIncerment({ id: 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncerment(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>Tags list is emphty</p>;
    else {
      /* //rending lists */
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
