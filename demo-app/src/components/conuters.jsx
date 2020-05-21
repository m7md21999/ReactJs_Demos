import React, { Component } from "react";
import Counter from "./conuter";

class Conuters extends Component {
  state = {
    conuter: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 1,
        value: 0,
      },
      {
        id: 1,
        value: 0,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.conuter.map((conuter) => (
          <Counter key={conuter.id} />
        ))}
      </div>
    );
  }
}

export default Conuters;
