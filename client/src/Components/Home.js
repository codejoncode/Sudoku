import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ThreeByThree from "./ThreeByThree";
class Home extends Component {
  state = {};

  render() {
    console.log(this.props);
    // const grid = this.props.grid.flat()
    return (
      <div className = "container">
        <ThreeByThree group = {this.props.group1}/>
        <ThreeByThree group = {this.props.group2}/>
        <ThreeByThree group = {this.props.group3}/>
        <ThreeByThree group = {this.props.group4}/>
        <ThreeByThree group = {this.props.group5}/>
        <ThreeByThree group = {this.props.group6}/>
        <ThreeByThree group = {this.props.group7}/>
        <ThreeByThree group = {this.props.group8}/>
        <ThreeByThree group = {this.props.group9}/>
      </div>
    );
  }
}

export default Home;
