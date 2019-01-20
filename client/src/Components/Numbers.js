import React, { Component } from "react";

class Numbers extends Component {
  state = {};

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "erase"];
    return (
      <div className="small-container">
        <div className="number-row">
          {numbers.map((number, id) => (
            <div
              className="number"
              key = {id}
              onClick={() => this.props.onNumberClicked(number)}
              onMouseEnter={event => this.props.onNumberMouseIn(event, number)}
              onMouseLeave={event => this.props.onNumberMouseOut(event, number)}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Numbers;
