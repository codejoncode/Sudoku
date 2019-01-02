import React, { Component } from "react";

class Cell extends Component {
  state = {};

  render() {
    console.log(this.props)
    return (
      <div
        className="column"
        onMouseEnter = {event => this.props.onCellHover(event, this.props.data)}
        onMouseLeave = {event => this.props.onCellHoverOut(event, this.props.data) }
        onClick = {() => this.props.onCellClick(this.props.data)}
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
