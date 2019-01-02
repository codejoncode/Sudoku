import React, { Component } from "react";
import ThreeByThree from "./ThreeByThree";

class Grid extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container">
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group1}
          color="#57A4BC"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group2}
          color="#B0CCE8"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group3}
          color="#0094B7"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group4}
          color="#0093D4"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group5}
          color="#4EADDD"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group6}
          color="#D0E3F1"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group7}
          color="#84BEE5"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group8}
          color="#8CAAD2"
        />
        <ThreeByThree
          onCellHoverOut={this.props.onCellHoverOut}
          onCellHover={this.props.onCellHover}
          onCellClick = {this.props.onCellClick}
          group={this.props.group9}
          color="#84C4CB"
        />
      </div>
    );
  }
}
export default Grid;
