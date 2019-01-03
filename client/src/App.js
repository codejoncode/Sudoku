import React, { Component } from "react";

import "./App.css";
import Home from "./Components/Home";
import AppTitle from "./Components/AppTitle";
import Numbers from "./Components/Numbers";
//![sudoku_solved_by_bactracking](https://user-images.githubusercontent.com/38900224/50551230-17042300-0c43-11e9-8ddd-802f09ab2d50.gif)
class App extends Component {
  state = {
    difficulty: ["Easy", "Medium", "Hard"],
    difficultyIndex: 0,
    colors: [
      "black",
      "red",
      "blue",
      "purple",
      "pink",
      "green",
      "orange",
      "yellow"
    ],
    backTracker: {
      /*Purpose is to locate the exact spot of the grid. Purpose of backTracker 
      is to iterate through the pointers to the grid to make the change. I will also decrement 
      to redo previous if there is a problem with a current position  */
      1: [0, 0],
      2: [0, 1],
      3: [0, 2],
      4: [0, 3],
      5: [0, 4],
      6: [0, 5],
      7: [0, 6],
      8: [0, 7],
      9: [0, 8],
      10: [1, 0],
      11: [1, 1],
      12: [1, 2],
      13: [1, 3],
      14: [1, 4],
      15: [1, 5],
      16: [1, 6],
      17: [1, 7],
      18: [1, 8],
      19: [2, 0],
      20: [2, 1],
      21: [2, 2],
      22: [2, 3],
      23: [2, 4],
      24: [2, 5],
      25: [2, 6],
      26: [2, 7],
      27: [2, 8],
      28: [3, 0],
      29: [3, 1],
      30: [3, 2],
      31: [3, 3],
      32: [3, 4],
      33: [3, 5],
      34: [3, 6],
      35: [3, 7],
      36: [3, 8],
      37: [4, 0],
      38: [4, 1],
      39: [4, 2],
      40: [4, 3],
      41: [4, 4],
      42: [4, 5],
      43: [4, 6],
      44: [4, 7],
      45: [4, 8],
      46: [5, 0],
      47: [5, 1],
      48: [5, 2],
      49: [5, 3],
      50: [5, 4],
      51: [5, 5],
      52: [5, 6],
      53: [5, 7],
      54: [5, 8],
      55: [6, 0],
      56: [6, 1],
      57: [6, 2],
      58: [6, 3],
      59: [6, 4],
      60: [6, 5],
      61: [6, 6],
      62: [6, 7],
      63: [6, 8],
      64: [7, 0],
      65: [7, 1],
      66: [7, 2],
      67: [7, 3],
      68: [7, 4],
      69: [7, 5],
      70: [7, 6],
      71: [7, 7],
      72: [7, 8],
      73: [8, 0],
      74: [8, 1],
      75: [8, 2],
      76: [8, 3],
      77: [8, 4],
      78: [8, 5],
      79: [8, 6],
      80: [8, 7],
      81: [8, 8]
    },
    colorsIndex: 0,
    grid: [],
    board: [],
    boardArray: [], 
    group1: [],
    group2: [],
    group3: [],
    group4: [],
    group5: [],
    group6: [],
    group7: [],
    group8: [],
    group9: [],
    col1: [],
    col2: [],
    col3: [],
    col4: [],
    col5: [],
    col6: [],
    col7: [],
    col8: [],
    col9: [],
    row1: [],
    row2: [],
    row3: [],
    row4: [],
    row5: [],
    row6: [],
    row7: [],
    row8: [],
    row9: [],
    cellClicked: false,
    currentCell: {}, //upon clicked will set currentCell to the cell clicked
    numberClicked: false,
    currentNumber: false,
    gameOver: false
  };

  componentWillMount() {
    this.createBoard();
  }

  setUpPlayingBoard = () => {
    /*This function will set up the game board.
      If difficulty is set to easy 45 cells of the grid will be revealed. 
      If difficulty is set to medium 27 cells of the grid will be revealed. 
      If difficulty is set to hard 18  cells of the grid will be revealed 
    */
    let revealing = 0;
    switch (Number(this.state.difficultyIndex)) {
      case 0:
        revealing = 45;
        break;
      case 1:
        revealing = 27;
        break;
      case 2:
        revealing = 18;
        break;
      default:
        console.log(
          "shouldn't  have a index over two",
          this.state.difficultyIndex
        );
    }
    const revealingIndexs = [];
    while (revealingIndexs.length < revealing) {
      const j = Math.ceil(Math.random() * 81);
      if (revealingIndexs.includes(j) === false) {
        revealingIndexs.push(j);
      }
    }
    const board = [];
    for (let i = 0; i < this.state.grid.length; i++) {
      board[i] = this.state.grid[i].slice();
    }
    // removed back tracker so make backTracker equal this.state.backTracker
    const indexToGroup = {
      1: "group1",
      2: "group1",
      3: "group1",
      4: "group2",
      5: "group2",
      6: "group2",
      7: "group3",
      8: "group3",
      9: "group3",
      10: "group1",
      11: "group1",
      12: "group1",
      13: "group2",
      14: "group2",
      15: "group2",
      16: "group3",
      17: "group3",
      18: "group3",
      19: "group1",
      20: "group1",
      21: "group1",
      22: "group2",
      23: "group2",
      24: "group2",
      25: "group3",
      26: "group3",
      27: "group3",
      28: "group4",
      29: "group4",
      30: "group4",
      31: "group5",
      32: "group5",
      33: "group5",
      34: "group6",
      35: "group6",
      36: "group6",
      37: "group4",
      38: "group4",
      39: "group4",
      40: "group5",
      41: "group5",
      42: "group5",
      43: "group6",
      44: "group6",
      45: "group6",
      46: "group4",
      47: "group4",
      48: "group4",
      49: "group5",
      50: "group5",
      51: "group5",
      52: "group6",
      53: "group6",
      54: "group6",
      55: "group7",
      56: "group7",
      57: "group7",
      58: "group8",
      59: "group8",
      60: "group8",
      61: "group9",
      62: "group9",
      63: "group9",
      64: "group7",
      65: "group7",
      66: "group7",
      67: "group8",
      68: "group8",
      69: "group8",
      70: "group9",
      71: "group9",
      72: "group9",
      73: "group7",
      74: "group7",
      75: "group7",
      76: "group8",
      77: "group8",
      78: "group8",
      79: "group9",
      80: "group9",
      81: "group9"
    };
    const indexToColumn = {
      1: "col1",
      2: "col2",
      3: "col3",
      4: "col4",
      5: "col5",
      6: "col6",
      7: "col7",
      8: "col8",
      9: "col9",
      10: "col1",
      11: "col2",
      12: "col3",
      13: "col4",
      14: "col5",
      15: "col6",
      16: "col7",
      17: "col8",
      18: "col9",
      19: "col1",
      20: "col2",
      21: "col3",
      22: "col4",
      23: "col5",
      24: "col6",
      25: "col7",
      26: "col8",
      27: "col9",
      28: "col1",
      29: "col2",
      30: "col3",
      31: "col4",
      32: "col5",
      33: "col6",
      34: "col7",
      35: "col8",
      36: "col9",
      37: "col1",
      38: "col2",
      39: "col3",
      40: "col4",
      41: "col5",
      42: "col6",
      43: "col7",
      44: "col8",
      45: "col9",
      46: "col1",
      47: "col2",
      48: "col3",
      49: "col4",
      50: "col5",
      51: "col6",
      52: "col7",
      53: "col8",
      54: "col9",
      55: "col1",
      56: "col2",
      57: "col3",
      58: "col4",
      59: "col5",
      60: "col6",
      61: "col7",
      62: "col8",
      63: "col9",
      64: "col1",
      65: "col2",
      66: "col3",
      67: "col4",
      68: "col5",
      69: "col6",
      70: "col7",
      71: "col8",
      72: "col9",
      73: "col1",
      74: "col2",
      75: "col3",
      76: "col4",
      77: "col5",
      78: "col6",
      79: "col7",
      80: "col8",
      81: "col9"
    };
    let startIndex = 1;
    const boardArray = [];
    while (startIndex < 82) {
      const tempObj = {};
      const row = this.state.backTracker[startIndex][0];
      const col = this.state.backTracker[startIndex][1];
      if (revealingIndexs.includes(startIndex)) {
        tempObj.changable = false;
        tempObj.value = board[row][col];
        tempObj.repeated = false;
      } else {
        tempObj.changable = true;
        tempObj.value = " ";
        tempObj.repeated = false;
        board[row][col] = " ";
      }
      tempObj.row = `row${row + 1}`;
      tempObj.col = indexToColumn[startIndex];
      tempObj.group = indexToGroup[startIndex];
      tempObj.index = startIndex; //used to know exactly which cell to get back to
      tempObj.clicked = false; // used to know if the cell is clicked or not.

      boardArray.push(tempObj);
      startIndex += 1;
    } //end of while loop
    
    this.putGroupsTogether(board, boardArray);
  };

  putGroupsTogether = (board, boardArray) => {
    /*This function will put the groups for the grid together */
    const group1 = [];
    const group2 = [];
    const group3 = [];
    const group4 = [];
    const group5 = [];
    const group6 = [];
    const group7 = [];
    const group8 = [];
    const group9 = [];
    const col1 = [];
    const col2 = [];
    const col3 = [];
    const col4 = [];
    const col5 = [];
    const col6 = [];
    const col7 = [];
    const col8 = [];
    const col9 = [];
    const row1 = [];
    const row2 = [];
    const row3 = [];
    const row4 = [];
    const row5 = [];
    const row6 = [];
    const row7 = [];
    const row8 = [];
    const row9 = [];
    for (let obj of boardArray) {
      switch (obj.group) {
        case "group1":
          group1.push(obj);
          break;
        case "group2":
          group2.push(obj);
          break;
        case "group3":
          group3.push(obj);
          break;
        case "group4":
          group4.push(obj);
          break;
        case "group5":
          group5.push(obj);
          break;
        case "group6":
          group6.push(obj);
          break;
        case "group7":
          group7.push(obj);
          break;
        case "group8":
          group8.push(obj);
          break;
        case "group9":
          group9.push(obj);
          break;
        default:
          console.log(obj.group, "is not recognized");
      }
      switch (obj.col) {
        case "col1":
          col1.push(obj);
          break;
        case "col2":
          col2.push(obj);
          break;
        case "col3":
          col3.push(obj);
          break;
        case "col4":
          col4.push(obj);
          break;
        case "col5":
          col5.push(obj);
          break;
        case "col6":
          col6.push(obj);
          break;
        case "col7":
          col7.push(obj);
          break;
        case "col8":
          col8.push(obj);
          break;
        case "col9":
          col9.push(obj);
          break;
        default:
          console.log(obj.col, "is not recognized");
      }
      switch (obj.row) {
        case "row1":
          row1.push(obj);
          break;
        case "row2":
          row2.push(obj);
          break;
        case "row3":
          row3.push(obj);
          break;
        case "row4":
          row4.push(obj);
          break;
        case "row5":
          row5.push(obj);
          break;
        case "row6":
          row6.push(obj);
          break;
        case "row7":
          row7.push(obj);
          break;
        case "row8":
          row8.push(obj);
          break;
        case "row9":
          row9.push(obj);
          break;
        default:
          console.log(obj.row, "is not recognized");
      }
    }
    this.setState({
      // cellClicked: false, 
      // numberClicked: false,
      board,
      boardArray,
      group1,
      group2,
      group3,
      group4,
      group5,
      group6,
      group7,
      group8,
      group9,
      col1,
      col2,
      col3,
      col4,
      col5,
      col6,
      col7,
      col8,
      col9,
      row1,
      row2,
      row3,
      row4,
      row5,
      row6,
      row7,
      row8,
      row9,
    });
  };

  shuffle = array => {
    /*Purpose of this function is to return a shuffled version of the numbers checks to see if array is an array
      Also checks that values 1 - 9 is in the array needed for this program. 
    */
    // let valid = false;
    let valid = false;

    Array.isArray(array)
      ? (valid = true)
      : console.error(
          "Type Error :Unexpected Type argument should be an array line 19"
        );
    array.length === 9
      ? (valid = true)
      : console.error(
          "Type Error : Unexpected Length argument should be length 9 line 20"
        );
    array.includes(1)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 1 line 21"
        );
    array.includes(2)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 2 line 22"
        );
    array.includes(3)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 3 line 23"
        );
    array.includes(4)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 4 line 24"
        );
    array.includes(5)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 5 line 25"
        );
    array.includes(6)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 6 line 26"
        );
    array.includes(7)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 7 line 27"
        );
    array.includes(8)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 8 line 28"
        );
    array.includes(9)
      ? (valid = true)
      : console.error(
          "Type Error : Value missing array should include the integer 9 line 29"
        );

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  valueNeeded = (section, toBeAdded, from) => {
    /*Checks to see if value is needed in section
         section should be an array and toBeAdded should be an integer
         returns true or false performs a check for if section is an array. */
    
    let valid = false;
    Array.isArray(section)
      ? (valid = true)
      : console.error(
          `TypeError : Unexpected Type  section must be an array line ${from}`
        );

    if (section.includes(toBeAdded)) {
      return false;
    } else {
      return true;
    }
  };

  sumArray = (total, num) => {
    /*This will be used with the reduce method and sum up the numbers */
    return total + num;
  };

  sumTheGrid = (one, two, three, four, five, six, seven, eight, nine) => {
    /* This function will use sumArray on each of the paramaters. Paramaters should be array objects
          Performs checks if each paramater is an array. 
        */
    let valid = false;
    Array.isArray(one)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  one section must be an array line 145"
        );
    Array.isArray(two)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  two must be an array line 146"
        );
    Array.isArray(three)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  three must be an array line 147"
        );
    Array.isArray(four)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  four must be an array line 148"
        );
    Array.isArray(five)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  five must be an array line 149"
        );
    Array.isArray(six)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  six must be an array line 150"
        );
    Array.isArray(seven)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  seven must be an array line 151"
        );
    Array.isArray(eight)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  eight must be an array line 152"
        );
    Array.isArray(nine)
      ? (valid = true)
      : console.error(
          "TypeError : Unexpected Type  nine must be an array line 153"
        );
    return (
      one.reduce(this.sumArray) +
      two.reduce(this.sumArray) +
      three.reduce(this.sumArray) +
      four.reduce(this.sumArray) +
      five.reduce(this.sumArray) +
      six.reduce(this.sumArray) +
      seven.reduce(this.sumArray) +
      eight.reduce(this.sumArray) +
      nine.reduce(this.sumArray)
    );
  };

  createBoard = () => {
    /*This will create the game board */
    console.log("new board")
    const grid = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const maxInput = 405;

    const orginalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbersIndex = 0; //purpose is to be able to go through this group of numbers
    let numbers = this.shuffle(orginalNumbers); // shuffles the orginalNumbers.
    //purpose of the shuffle is so that the top row isn't 1-9;

    let backTrackerIndex = 1; //Starts back track.
    /*Start at the backTrackerIndex 1 check to see if the associated groups columns and rows need the value at numbersIndex.
          If a value is not needed try all avaiable values before back tracking. 
          If unable to find a needed value: 
          backtrack (decrement) the backTrackerIndex reset to a new number.  
          If we are successful at setting a new number, move forward  increment backTrackerIndex. 
        */
    while (
      this.sumTheGrid(
        grid[0],
        grid[1],
        grid[2],
        grid[3],
        grid[4],
        grid[5],
        grid[6],
        grid[7],
        grid[8],
        grid[9]
      ) !== maxInput
      // ||
      //this.state.backTracker > 81 //This line was done on accdient but doesn't make sense
      //when i put it to the correct && backTrackerIndex > 81 it doesn't work need to research this.
      //however right now doesn't seem to be needed.
    ) {
      /*There are three neccessary areas to check
      horizontal sections  which go east and west, or side to side. 
      We will also need to check vertically north and south or top to bottom. 
      We will also need to check the 3 cells by 3 cells sections of the board. 
    
      If a number is already in this section then we do not have a valid number to add to this section.  
      */

      //The gird will already have the rows avaialble to us.
      //Groups of 9 boxes   3 cells by 3 cells.
      // [][][]
      // [][][]
      // [][][]
      const group1 = [
        grid[0][0],
        grid[0][1],
        grid[0][2],
        grid[1][0],
        grid[1][1],
        grid[1][2],
        grid[2][0],
        grid[2][1],
        grid[2][2]
      ];
      const group2 = [
        grid[0][3],
        grid[0][4],
        grid[0][5],
        grid[1][3],
        grid[1][4],
        grid[1][5],
        grid[2][3],
        grid[2][4],
        grid[2][5]
      ];
      const group3 = [
        grid[0][6],
        grid[0][7],
        grid[0][8],
        grid[1][6],
        grid[1][7],
        grid[1][8],
        grid[2][6],
        grid[2][7],
        grid[2][8]
      ];
      const group4 = [
        grid[3][0],
        grid[3][1],
        grid[3][2],
        grid[4][0],
        grid[4][1],
        grid[4][2],
        grid[5][0],
        grid[5][1],
        grid[6][2]
      ];
      const group5 = [
        grid[3][3],
        grid[3][4],
        grid[3][5],
        grid[4][3],
        grid[4][4],
        grid[4][5],
        grid[5][3],
        grid[5][4],
        grid[6][5]
      ];
      const group6 = [
        grid[3][6],
        grid[3][7],
        grid[3][8],
        grid[4][6],
        grid[4][7],
        grid[4][8],
        grid[5][6],
        grid[5][7],
        grid[6][8]
      ];
      const group7 = [
        grid[6][0],
        grid[6][1],
        grid[6][2],
        grid[7][0],
        grid[7][1],
        grid[7][2],
        grid[8][0],
        grid[8][1],
        grid[8][2]
      ];
      const group8 = [
        grid[6][3],
        grid[6][4],
        grid[6][5],
        grid[7][3],
        grid[7][4],
        grid[7][5],
        grid[8][3],
        grid[8][4],
        grid[8][5]
      ];
      const group9 = [
        grid[6][6],
        grid[6][7],
        grid[6][8],
        grid[7][6],
        grid[7][7],
        grid[7][8],
        grid[8][6],
        grid[8][7],
        grid[8][8]
      ];
      //vertical up and down.
      const column1 = [
        grid[0][0],
        grid[1][0],
        grid[2][0],
        grid[3][0],
        grid[4][0],
        grid[5][0],
        grid[6][0],
        grid[7][0],
        grid[8][0]
      ];
      const column2 = [
        grid[0][1],
        grid[1][1],
        grid[2][1],
        grid[3][1],
        grid[4][1],
        grid[5][1],
        grid[6][1],
        grid[7][1],
        grid[8][1]
      ];
      const column3 = [
        grid[0][2],
        grid[1][2],
        grid[2][2],
        grid[3][2],
        grid[4][2],
        grid[5][2],
        grid[6][2],
        grid[7][2],
        grid[8][2]
      ];
      const column4 = [
        grid[0][3],
        grid[1][3],
        grid[2][3],
        grid[3][3],
        grid[4][3],
        grid[5][3],
        grid[6][3],
        grid[7][3],
        grid[8][3]
      ];
      const column5 = [
        grid[0][4],
        grid[1][4],
        grid[2][4],
        grid[3][4],
        grid[4][4],
        grid[5][4],
        grid[6][4],
        grid[7][4],
        grid[8][4]
      ];
      const column6 = [
        grid[0][5],
        grid[1][5],
        grid[2][5],
        grid[3][5],
        grid[4][5],
        grid[5][5],
        grid[6][5],
        grid[7][5],
        grid[8][5]
      ];
      const column7 = [
        grid[0][6],
        grid[1][6],
        grid[2][6],
        grid[3][6],
        grid[4][6],
        grid[5][6],
        grid[6][6],
        grid[7][6],
        grid[8][6]
      ];
      const column8 = [
        grid[0][7],
        grid[1][7],
        grid[2][7],
        grid[3][7],
        grid[4][7],
        grid[5][7],
        grid[6][7],
        grid[7][7],
        grid[8][7]
      ];
      const column9 = [
        grid[0][8],
        grid[1][8],
        grid[2][8],
        grid[3][8],
        grid[4][8],
        grid[5][8],
        grid[6][8],
        grid[7][8],
        grid[8][8]
      ];

      const indexToGroup = {
        1: group1,
        2: group1,
        3: group1,
        4: group2,
        5: group2,
        6: group2,
        7: group3,
        8: group3,
        9: group3,
        10: group1,
        11: group1,
        12: group1,
        13: group2,
        14: group2,
        15: group2,
        16: group3,
        17: group3,
        18: group3,
        19: group1,
        20: group1,
        21: group1,
        22: group2,
        23: group2,
        24: group2,
        25: group3,
        26: group3,
        27: group3,
        28: group4,
        29: group4,
        30: group4,
        31: group5,
        32: group5,
        33: group5,
        34: group6,
        35: group6,
        36: group6,
        37: group4,
        38: group4,
        39: group4,
        40: group5,
        41: group5,
        42: group5,
        43: group6,
        44: group6,
        45: group6,
        46: group4,
        47: group4,
        48: group4,
        49: group5,
        50: group5,
        51: group5,
        52: group6,
        53: group6,
        54: group6,
        55: group7,
        56: group7,
        57: group7,
        58: group8,
        59: group8,
        60: group8,
        61: group9,
        62: group9,
        63: group9,
        64: group7,
        65: group7,
        66: group7,
        67: group8,
        68: group8,
        69: group8,
        70: group9,
        71: group9,
        72: group9,
        73: group7,
        74: group7,
        75: group7,
        76: group8,
        77: group8,
        78: group8,
        79: group9,
        80: group9,
        81: group9
      }; /*Purpose to index to the group to check if value is needed */

      const indexToColumn = {
        1: column1,
        2: column2,
        3: column3,
        4: column4,
        5: column5,
        6: column6,
        7: column7,
        8: column8,
        9: column9,
        10: column1,
        11: column2,
        12: column3,
        13: column4,
        14: column5,
        15: column6,
        16: column7,
        17: column8,
        18: column9,
        19: column1,
        20: column2,
        21: column3,
        22: column4,
        23: column5,
        24: column6,
        25: column7,
        26: column8,
        27: column9,
        28: column1,
        29: column2,
        30: column3,
        31: column4,
        32: column5,
        33: column6,
        34: column7,
        35: column8,
        36: column9,
        37: column1,
        38: column2,
        39: column3,
        40: column4,
        41: column5,
        42: column6,
        43: column7,
        44: column8,
        45: column9,
        46: column1,
        47: column2,
        48: column3,
        49: column4,
        50: column5,
        51: column6,
        52: column7,
        53: column8,
        54: column9,
        55: column1,
        56: column2,
        57: column3,
        58: column4,
        59: column5,
        60: column6,
        61: column7,
        62: column8,
        63: column9,
        64: column1,
        65: column2,
        66: column3,
        67: column4,
        68: column5,
        69: column6,
        70: column7,
        71: column8,
        72: column9,
        73: column1,
        74: column2,
        75: column3,
        76: column4,
        77: column5,
        78: column6,
        79: column7,
        80: column8,
        81: column9
      }; /*Purpose to index to the column to check if value is needed */

      const indexToRow = {
        1: grid[0],
        2: grid[0],
        3: grid[0],
        4: grid[0],
        5: grid[0],
        6: grid[0],
        7: grid[0],
        8: grid[0],
        9: grid[0],
        10: grid[1],
        11: grid[1],
        12: grid[1],
        13: grid[1],
        14: grid[1],
        15: grid[1],
        16: grid[1],
        17: grid[1],
        18: grid[1],
        19: grid[2],
        20: grid[2],
        21: grid[2],
        22: grid[2],
        23: grid[2],
        24: grid[2],
        25: grid[2],
        26: grid[2],
        27: grid[2],
        28: grid[3],
        29: grid[3],
        30: grid[3],
        31: grid[3],
        32: grid[3],
        33: grid[3],
        34: grid[3],
        35: grid[3],
        36: grid[3],
        37: grid[4],
        38: grid[4],
        39: grid[4],
        40: grid[4],
        41: grid[4],
        42: grid[4],
        43: grid[4],
        44: grid[4],
        45: grid[4],
        46: grid[5],
        47: grid[5],
        48: grid[5],
        49: grid[5],
        50: grid[5],
        51: grid[5],
        52: grid[5],
        53: grid[5],
        54: grid[5],
        55: grid[6],
        56: grid[6],
        57: grid[6],
        58: grid[6],
        59: grid[6],
        60: grid[6],
        61: grid[6],
        62: grid[6],
        63: grid[6],
        64: grid[7],
        65: grid[7],
        66: grid[7],
        67: grid[7],
        68: grid[7],
        69: grid[7],
        70: grid[7],
        71: grid[7],
        72: grid[7],
        73: grid[8],
        74: grid[8],
        75: grid[8],
        76: grid[8],
        77: grid[8],
        78: grid[8],
        79: grid[8],
        80: grid[8],
        81: grid[8]
      }; /*Purpose to index to the row to check if value is needed */

      /*maxInput is where each column is 45 * 9 */
      let attempts = 0; // start attempts at 0 each time.
      const value = numbers.slice(numbersIndex, numbersIndex + 1); //Value is an array of 1 elements.
      
      const doesSectionNeedValue =
        this.valueNeeded(indexToGroup[backTrackerIndex], value[0], 932) &&
        this.valueNeeded(indexToColumn[backTrackerIndex], value[0], 933) &&
        this.valueNeeded(indexToRow[backTrackerIndex], value[0], 934);
      /*a && b && c  will return true only if all are true if even one is false it will return false. */
      if (doesSectionNeedValue) {
        const row = this.state.backTracker[backTrackerIndex][0]; //get the row from backTracker.
        const col = this.state.backTracker[backTrackerIndex][1]; // get the col from backTracker.
        grid[row][col] = value[0]; // set the section of the grid using the row and col  to the value  which is needed.
        numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For the next cell.
        backTrackerIndex += 1; // move forward in the indexing.
      } else {
        while (attempts !== 9) {
          attempts += 1;
          numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For trying a new number.

          const value = numbers.slice(numbersIndex, numbersIndex + 1);
          const doesSectionNeedValue =
            this.valueNeeded(indexToGroup[backTrackerIndex], value[0], 949) &&
            this.valueNeeded(indexToColumn[backTrackerIndex], value[0], 950) &&
            this.valueNeeded(indexToRow[backTrackerIndex], value[0], 951);
          if (doesSectionNeedValue) {
            const row = this.state.backTracker[backTrackerIndex][0]; //get the row from backTracker.
            const col = this.state.backTracker[backTrackerIndex][1]; // get the col from backTracker.
            grid[row][col] = value[0]; // set the section of the grid using the row and col  to the value  which is needed.
            numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For the next cell.
            backTrackerIndex += 1; // move forward in the indexing.
            break; //end the loop.
          } // end of if statement in while loop.
        } // end of while loop.
      } //end of else statement.

      if (attempts === 9) {
        /*iterated through the entire list*/
        backTrackerIndex -= 1; // decrement/backtrack reset the previous.
      }
    } // end of primary while loop
    
    this.setState({ grid }, () => {
      this.setUpPlayingBoard();
    });
  }; //end of function

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onCellHover = (event, cellData) => {
    /*On cell hover will change the color of the cell to show that 
      It can be changed.  Another function onCellClick will change the
      back ground (permanately but temporary) allowing for the user to use
      the number they wish to update the cell with after the cell is updated
      the background will be removed. Of course all of this happens on the conditon
      cellData.changable is true. Takes the event and the cellData as arguments.
      No other cell should be clicked for this feature to work. 
    */
    if (cellData.changable && this.state.cellClicked === false) {
      event.target.style.backgroundColor = "blue";
      event.target.style.cursor = "pointer"; 
    }
  };
  onCellHoverOut = (event, cellData) => {
    /*This function is the aftermath of onCellHover changing the cell back. 
      will turn the cell back to its parent with use of the inherit value as long as 
      the cell has not been clicked which is conditionally check using the clicked key on the object.
    */

    if (this.state.cellClicked === false) {
      event.target.style.backgroundColor = "inherit";
      event.target.style.cursor = "inherit"; 
    }
  };

  onCellClick = (event, cellData) => {
    /*This function will set the cell as a blue background and update the object clicked key as true.
      It will also change a propety on state cellClicked so that a user cannot click mutliple cells at 
      a time. 
    */
   const currentCell = JSON.parse(JSON.stringify(cellData)); // deep copy
   const boardArray = this.state.boardArray.slice();
    if (this.state.cellClicked === false) {
      
      currentCell.clicked = true;
      
      boardArray[currentCell.index - 1] = currentCell;
      // because cells are indexed 1-81 the position in the board array can be reached by taking the index
      // minus 1 so that the state can be updated with the correct information.
      this.setState({ cellClicked: true, currentCell, boardArray, }, () => {
        this.callTwoFunctions(boardArray)
      }
      );
    } else if (currentCell.clicked) {
      currentCell.clicked = false;
      boardArray[currentCell.index - 1] = currentCell;
      // because cells are indexed 1-81 the position in the board array can be reached by taking the index
      // minus 1 so that the state can be updated with the correct information.
      this.setState({ cellClicked: false, currentCell: {}, boardArray }, () => this.putGroupsTogether(this.state.board, boardArray));
    }
  };

  onNumberMouseIn = (event, number) => {
    /*The purpose of this function is to handle the hover of the numbers it will 
      change the background color when the mouse enters the number. Just as long as
      the numberClicked property on state is false. */
    if (this.state.numberClicked === false) {
      event.target.style.cursor = "pointer";
      event.target.style.backgroundColor = "blue";
      
    }
  };

  onNumberMouseOut = (event, number) => {
    /*The purpose of this function is to handle the hover of the numbers it will change
      the color back to the pareent color just as long as the numberClicked key on state
      is false.*/
    if (this.state.numberClicked === false) {
      event.target.style.cursor = "inherit";
      event.target.style.backgroundColor = "#00BAF6";
    }
  };

  onNumberClicked = number => {
    /*Purpose of this function is to handle the clicking of a number. As long as
      number clicked key on state is false it will allow for a click of a number and 
      set the key on state to true, then it sets currentNumber to the number.  else it will set the key on state to false and 
      it sets the current number key on state to false. */
    if (this.state.numberClicked === false) {
      this.setState({ numberClicked: true, currentNumber: number }, () =>
        // this.callTwoFunctions(this.state.boardArray.slice())
        this.updateCell()
      );
    } else {
      this.setState({ numberClicked: false, currentNumber: false });
    }
  };

  callTwoFunctions = (boardArray) => {
    this.updateCell();
    this.putGroupsTogether(this.state.board, boardArray); 
  }
  
  checkForRepeats = (row, col, group, value) => {
    /*
      Four paramaters accepted row col group value functions purpose is to return true or false for if their are repeats. 
      if false is returned this means no repeats which is good for the board.  True means there is repeats for that section.
      This is bad for the board. this function is used with updateCell and called inside of it. 
    */
    
    const groups = {
      group1: this.state.group1.slice().map(take => take.value),
      group2: this.state.group2.slice().map(take => take.value),
      group3: this.state.group3.slice().map(take => take.value),
      group4: this.state.group4.slice().map(take => take.value),
      group5: this.state.group5.slice().map(take => take.value),
      group6: this.state.group6.slice().map(take => take.value),
      group7: this.state.group7.slice().map(take => take.value),
      group8: this.state.group8.slice().map(take => take.value),
      group9: this.state.group9.slice().map(take => take.value)
    };
    const groupRepeat = groups[group].includes(value);//false if no repeat
     
    const rows = {
      row1: this.state.row1.slice().map(take => take.value),
      row2: this.state.row2.slice().map(take => take.value),
      row3: this.state.row3.slice().map(take => take.value),
      row4: this.state.row4.slice().map(take => take.value),
      row5: this.state.row5.slice().map(take => take.value),
      row6: this.state.row6.slice().map(take => take.value),
      row7: this.state.row7.slice().map(take => take.value),
      row8: this.state.row8.slice().map(take => take.value),
      row9: this.state.row9.slice().map(take => take.value)
    };
    const rowRepeat = rows[row].includes(value);// false  if no repeat
    
    const cols = {
      col1: this.state.col1.slice().map(take => take.value),
      col2: this.state.col2.slice().map(take => take.value),
      col3: this.state.col3.slice().map(take => take.value),
      col4: this.state.col4.slice().map(take => take.value),
      col5: this.state.col5.slice().map(take => take.value),
      col6: this.state.col6.slice().map(take => take.value),
      col7: this.state.col7.slice().map(take => take.value),
      col8: this.state.col8.slice().map(take => take.value),
      col9: this.state.col9.slice().map(take => take.value)
    };
    const colRepeat = cols[col].includes(value);//false if no repeat. 
    return groupRepeat || rowRepeat || colRepeat // will return true if one of them is true  false only if all are false. 
  };

  updateCell = () => {
    /*This function will handle the updating of the cells. 
      to allow a user to click the cell on the board and then a number
      or vice versa a conditional check is performed to make sure numberClicked 
      and cellClicked keys on state are both true before anything is done. 
      Then the current number is placed as the value on the currenct cell updating the
      board is done but only after a check for if the number is a repeat for that section. 
      If it is a repeat,  repeated is changed to true and that cell value will be red to indicate 
      it is not a valid choice. 
    */
    if (this.state.numberClicked && this.state.cellClicked) {
      const currentCell = JSON.parse(JSON.stringify(this.state.currentCell)); // deep copy
      
      currentCell.value = this.state.currentNumber; //set the value key to curent number.

      //Scan to make sure that is a valid move if it isn't set repeated to true on the currentCell object.
      const isThereARepeat = this.checkForRepeats(
        (currentCell.row),
        (currentCell.col),
        (currentCell.group),
        (this.state.currentNumber)
      );
      
      if(isThereARepeat){
        console.log(currentCell)
        console.log("Repeat happening")
        console.log(this.state.group1)
        console.log(this.state.group2)
        console.log(this.state.group3)
        console.log(this.state.group4)
        console.log(this.state.group4)
        console.log(this.state.group5)
        console.log(this.state.group6)
        console.log(this.state.group7)
        console.log(this.state.group8)
        console.log(this.state.group9)
        currentCell.repeated = true; 
      }
      const boardArray = this.state.boardArray.slice(); 
      boardArray[currentCell.index -1] = currentCell; 
      const columns = document.querySelectorAll(".column");

      for(let column of columns){
        column.style.backgroundColor = "inherit";
        column.style.cursor = "inherit";
      }

      const numbers = document.querySelectorAll(".number");
      for (let number of numbers){
        number.style.cursor = "inherit";
        number.style.backgroundColor = "#00BAF6";
      }

      
      this.setState({currentCell: {}, numberClicked : false, cellClicked : false, boardArray}, () => this.putGroupsTogether(this.state.board, boardArray))
    }// end of if conditional. 

  };

  gameComplete = () => {
    /*This function will check if the game is complete and update the game over key on the state.  */
  };

  adjustDifficulty = event => {
    /*This will set the difficulty index and then recreate the board*/
    this.setState({ [event.target.name]: event.target.value }, this.createBoard());
  }

  render() {
    console.log(this.state.grid);
    return (
      <div className="container">
        <header className="App-header">
          <AppTitle />
        </header>
        <div className="small-container keep-as-row">
          <button className="new-game game-button" onClick = {this.createBoard}>New Game</button>
          {/* <button className = "new-game game-button">Solver Grid</button>  */}
          <br />
          <div className="keep-as-row">
            <h5>
              Difficulty {this.state.difficulty[this.state.difficultyIndex]}
            </h5>
            <input
              type="range"
              min="0"
              max="2"
              className="slider"
              id="myRange"
              name="difficultyIndex"
              value={this.state.difficultyIndex}
              onChange={this.adjustDifficulty}
            />
          </div>
        
        </div>
        <div className="small-container">
          <Home
            grid={this.state.board}
            group1={this.state.group1}
            group2={this.state.group2}
            group3={this.state.group3}
            group4={this.state.group4}
            group5={this.state.group5}
            group6={this.state.group6}
            group7={this.state.group7}
            group8={this.state.group8}
            group9={this.state.group9}
            // functions below
            onCellHover={this.onCellHover}
            onCellHoverOut={this.onCellHoverOut}
            onCellClick={this.onCellClick}
          />
        </div>
        <Numbers
          onNumberClicked={this.onNumberClicked}
          onNumberMouseIn={this.onNumberMouseIn}
          onNumberMouseOut={this.onNumberMouseOut}
        />
      </div>
    );
  }
}

export default App;
