import React, { Component } from "react";

class Cell extends Component {
    state = {}

    render () {
        return (
            <div className = "column" style = {this.props.data.changable === false ? {fontWeight: 900} : {fontWeight: "normal"}  }>{this.props.data.value}</div>
        )
    }
}
export default Cell; 