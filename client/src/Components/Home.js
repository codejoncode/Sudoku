import React, { Component } from "react";
import Grid from "./Grid";
class Home extends Component {
  state = {};

  render() {
    return (
      <div className = "small-container">
        <br/>
        <Grid  
         group1 = {this.props.group1}
         group2 = {this.props.group2}
         group3 = {this.props.group3}
         group4 = {this.props.group4}
         group5 = {this.props.group5}
         group6 = {this.props.group6}
         group7 = {this.props.group7}
         group8 = {this.props.group8}
         group9 = {this.props.group9}
        //  functions 
        onCellHover = {this.props.onCellHover}
        onCellHoverOut = {this.props.onCellHoverOut}
        onCellClick = {this.props.onCellClick}
         />
      </div>
    );
  }
}

export default Home;
