import React, { Component } from "react";
import Cell from "./Cell";

class ThreeByThree extends Component {
  state = {};

  render() {
    let group1 = [];
    let group2 = [];
    let group3 = [];
    if (this.props.group.length) {
      group1 = this.props.group.slice(0, 3);
      group2 = this.props.group.slice(3, 6);
      group3 = this.props.group.slice(6, 10);
    }
    return (
      <div className="s3x3" style={{ background: this.props.color }}>
        <div className="row3x3">
          {group1.map((cell, id) => (
            <Cell
              key={id}
              onCellHover={this.props.onCellHover}
              onCellHoverOut={this.props.onCellHoverOut}
              onCellClick = {this.props.onCellClick}
              data={cell}
            />
          ))}
        </div>
        <div className="row3x3">
          {group2.map((cell, id) => (
            <Cell
              key={id}
              onCellHover={this.props.onCellHover}
              onCellHoverOut={this.props.onCellHoverOut}
              onCellClick = {this.props.onCellClick}
              data={cell}
            />
          ))}
        </div>
        <div className="row3x3">
          {group3.map((cell, id) => (
            <Cell
              key={id}
              onCellHover={this.props.onCellHover}
              onCellHoverOut={this.props.onCellHoverOut}
              onCellClick = {this.props.onCellClick}
              data={cell}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ThreeByThree;
