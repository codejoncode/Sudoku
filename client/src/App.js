import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import AppTitle from "./Components/AppTitle";
import Numbers from "./Components/Numbers";
/*
https://repl.it/@codejoncode/sudoku-challenge
 */
class App extends Component {
  state = {
    difficulty: ["Easy", "Medium", "Hard"],
    difficultyIndex : 0,
    colors : ["black","red", "blue", "purple", "pink", "green", "orange", "yellow"],
    colorsIndex: 0, 
    grid : [
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0],
    ]
  };

  boardSetUp = () => {
    const numbers = [1,2,3,4,5,6,7,8,9]

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }

    //The first part above shuffles the nummbers array. 
  }

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
          <Home grid = {this.state.grid} color = {this.state.colors[this.state.colorsIndex]}/>
        </div>
        <Numbers />
      </div>
    );
  }
}

export default App;
