import React, { Component } from "react";
import ThreeByThree from "./ThreeByThree";

class Grid extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container">
        <div>
          <ThreeByThree group={this.props.group1} />
          <ThreeByThree group={this.props.group2} />
          <ThreeByThree group={this.props.group3} />
          <ThreeByThree group={this.props.group4} />
          <ThreeByThree group={this.props.group5} />
          <ThreeByThree group={this.props.group6} />
          <ThreeByThree group={this.props.group7} />
          <ThreeByThree group={this.props.group8} />
          <ThreeByThree group={this.props.group9} />
        </div>
      </div>
    );
  }
}
export default Grid;
