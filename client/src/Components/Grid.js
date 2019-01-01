import React, { Component } from "react";
import ThreeByThree from "./ThreeByThree";

class Grid extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container">
        <ThreeByThree group={this.props.group1} color="#57A4BC" />
        <ThreeByThree group={this.props.group2} color="#B0CCE8" />
        <ThreeByThree group={this.props.group3} color="#0094B7" />
        <ThreeByThree group={this.props.group4} color="#0093D4" />
        <ThreeByThree group={this.props.group5} color="#4EADDD" />
        <ThreeByThree group={this.props.group6} color="#D0E3F1" />
        <ThreeByThree group={this.props.group7} color="#84BEE5" />
        <ThreeByThree group={this.props.group8} color="#8CAAD2" />
        <ThreeByThree group={this.props.group9} color="#84C4CB" />
      </div>
    );
  }
}
export default Grid;
