import React, { Component } from "react";
import ThreeByThree from "./ThreeByThree";

class Grid extends Component {
  state = {};

  render() {
    const {onCellHoverOut, onCellHover, onCellClick, group1, group2, group3, group4, group5, group6, group7, group8, group9} = this.props;
    const groups = [group1, group2, group3, group4, group5, group6, group7, group8, group9]; 
    return (
      <div className="grid-container">
        {groups.map((group, id) => <ThreeByThree  key = {id} onCellHoverOut = {onCellHoverOut} onCellHover = {onCellHover} onCellClick = {onCellClick} group = {group}/>)}
        {/* remvoed color   color="#B0CCE8" color="#0094B7" color="#57A4BC" color="#0093D4" color="#D0E3F1" color="#8CAAD2" color="#4EADDD" color="#84BEE5" color="#8CAAD2" color="#84C4CB" */}
      </div>
    );
  }
}
export default Grid;
