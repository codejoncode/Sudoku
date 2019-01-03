import React, { Component } from "react";

class Cell extends Component {
  state = {};

  render() {
    
    return (
      <div
        className= {this.props.data.repeated ? "column repeated" : "column"}
        onMouseEnter = {event => this.props.onCellHover(event, this.props.data)}
        onMouseLeave = {event => this.props.onCellHoverOut(event, this.props.data) }
        onClick = {(event,) => this.props.onCellClick(event, this.props.data)}
        style={
          this.props.data.changable === false
            ? { fontWeight: 900 }
            : { fontWeight: "normal" }
        }
      >
        {this.props.data.value}
      </div>
    );
  }
}
export default Cell;
