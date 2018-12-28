import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import Test from "./Components/Test";
import AppTitle from "./Components/AppTitle";

class App extends Component {
  state = {
    difficulty: ["Easy", "Medium", "Hard"],
    difficultyIndex : 0,
    colors : ["black","red", "blue", "purple", "pink", "green", "orange", "yellow"],
    colorsIndex: 0, 
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <AppTitle />
        </header>
        <div className="small-container keep-as-row">
          <button className="new-game game-button">New Game</button>
          <br/>
          <div className="keep-as-row">
            <h5>Difficulty {this.state.difficulty[this.state.difficultyIndex ]}</h5>
            <input
              type="range"
              min="0"
              max="2"
              className="slider"
              id="myRange"
              name="difficultyIndex"
              value = {this.state.difficultyIndex}
              onChange = {this.handleChange}
            />
          </div>
          <div className="keep-as-row">
            <h5 style = {{color:this.state.colors[this.state.colorsIndex] }}>Number Color {this.state.colors[this.state.colorsIndex]}</h5>
            <input
            type="range"
            min = "0"
            max = "7"
            className = "slider"
            id = "myRange"
            name = "colorsIndex"
            value = {this.state.colorsIndex}
            onChange = {this.handleChange}
            />
          </div>
        </div>
        <div className="small-container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;