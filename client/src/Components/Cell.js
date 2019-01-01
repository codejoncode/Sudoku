import React, { Component } from "react";

class Cell extends Component {
    state = {}

    render () {
        return (
            <div className = "column">{this.props.data.value}</div>
        )
    }
}
export default Cell; 