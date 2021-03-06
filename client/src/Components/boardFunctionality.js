const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  const shuffle = (array) => {
    /*Purpose of this function is to return a shuffled version of the numbers checks to see if array is an array
      Also checks that values 1 - 9 is in the array needed for this program. 
    */
    let valid = false
    let error;
  
    Array.isArray(array) ? valid = true : console.error("Type Error :Unexpected Type argument should be an array line 19");
    array.length === 9 ? valid = true : console.error("Type Error : Unexpected Length argument should be length 9 line 20");
    array.includes(1) ? valid = true : console.error("Type Error : Value missing array should include the integer 1 line 21");
    array.includes(2) ? valid = true : console.error("Type Error : Value missing array should include the integer 2 line 22");
    array.includes(3) ? valid = true : console.error("Type Error : Value missing array should include the integer 3 line 23");
    array.includes(4) ? valid = true : console.error("Type Error : Value missing array should include the integer 4 line 24");
    array.includes(5) ? valid = true : console.error("Type Error : Value missing array should include the integer 5 line 25");
    array.includes(6) ? valid = true : console.error("Type Error : Value missing array should include the integer 6 line 26");
    array.includes(7) ? valid = true : console.error("Type Error : Value missing array should include the integer 7 line 27");
    array.includes(8) ? valid = true : console.error("Type Error : Value missing array should include the integer 8 line 28");
    array.includes(9) ? valid = true : console.error("Type Error : Value missing array should include the integer 9 line 29");
  
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  
    return array;
  }
  
  const valueNeeded = (section, toBeAdded) => {
    /*Checks to see if value is needed in section
     section should be an array and toBeAdded should be an integer
     returns true or false performs a check for if section is an array. */
    console.log(section)
    console.log(toBeAdded)
    let valid = false
    Array.isArray(section) ? valid = true : console.error("TypeError : Unexpected Type  section must be an array line 46");
  
    if (section.includes(toBeAdded)) {
      return false
    } else {
      return true
    }
  }
  
  
  const sumArray = (total, num) => {
    /*This will be used with the reduce method and sum up the numbers */
    return total + num;
  }
  const sumTheGrid = (one, two, three, four, five, six, seven, eight, nine) => {
    /* This function will use sumArray on each of the paramaters. Paramaters should be array objects
      Performs checks if each paramater is an array. 
    */
    let valid = false;
    Array.isArray(one) ? valid = true : console.error("TypeError : Unexpected Type  one section must be an array line 145");
    Array.isArray(two) ? valid = true : console.error("TypeError : Unexpected Type  two must be an array line 146");
    Array.isArray(three) ? valid = true : console.error("TypeError : Unexpected Type  three must be an array line 147");
    Array.isArray(four) ? valid = true : console.error("TypeError : Unexpected Type  four must be an array line 148");
    Array.isArray(five) ? valid = true : console.error("TypeError : Unexpected Type  five must be an array line 149");
    Array.isArray(six) ? valid = true : console.error("TypeError : Unexpected Type  six must be an array line 150");
    Array.isArray(seven) ? valid = true : console.error("TypeError : Unexpected Type  seven must be an array line 151");
    Array.isArray(eight) ? valid = true : console.error("TypeError : Unexpected Type  eight must be an array line 152");
    Array.isArray(nine) ? valid = true : console.error("TypeError : Unexpected Type  nine must be an array line 153");
    return one.reduce(sumArray) + two.reduce(sumArray) + three.reduce(sumArray) + four.reduce(sumArray) + five.reduce(sumArray) + six.reduce(sumArray) + seven.reduce(sumArray) + eight.reduce(sumArray) + nine.reduce(sumArray)
  }
  
  const backTracker = {
        1: [0, 0], 2: [0, 1], 3: [0, 2], 4: [0, 3], 5: [0, 4], 6: [0, 5], 7: [0, 6],
        8: [0, 7], 9: [0, 8], 10: [1, 0], 11: [1, 1], 12: [1, 2], 13: [1, 3], 14: [1, 4],
        15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [2, 0], 20: [2, 1], 21: [2, 2],
        22: [2, 3], 23: [2, 4], 24: [2, 5], 25: [2, 6], 26: [2, 7], 27: [2, 8], 28: [3, 0],
        29: [3, 1], 30: [3, 2], 31: [3, 3], 32: [3, 4], 33: [3, 5], 34: [3, 6], 35: [3, 7],
        36: [3, 8], 37: [4, 0], 38: [4, 1], 39: [4, 2], 40: [4, 3], 41: [4, 4], 42: [4, 5],
        43: [4, 6], 44: [4, 7], 45: [4, 8], 46: [5, 0], 47: [5, 1], 48: [5, 2], 49: [5, 3],
        50: [5, 4], 51: [5, 5], 52: [5, 6], 53: [5, 7], 54: [5, 8], 55: [6, 0], 56: [6, 1],
        57: [6, 2], 58: [6, 3], 59: [6, 4], 60: [6, 5], 61: [6, 6], 62: [6, 7], 63: [6, 8],
        64: [7, 0], 65: [7, 1], 66: [7, 2], 67: [7, 3], 68: [7, 4], 69: [7, 5], 70: [7, 6],
        71: [7, 7], 72: [7, 8], 73: [8, 0], 74: [8, 1], 75: [8, 2], 76: [8, 3], 77: [8, 4],
        78: [8, 5], 79: [8, 6], 80: [8, 7], 81: [8, 8]
      }/*Purpose is to locate the exact spot of the grid. Purpose of backTracker is to iterate through the pointers to the grid to make the change. I will also decrement to redo previous if there is a problem with a current position  */
  
  const maxInput = 405;
  
  const orginalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let numbersIndex = 0; //purpose is to be able to go through this group of numbers
  let numbers = shuffle(orginalNumbers)// shuffles the orginalNumbers. 
  //purpose of the shuffle is so that the top row isn't 1-9; 
  
  let backTrackerIndex = 1; //Starts back track. 
  
  const createBoard = () => {
    /*This will create the game board */
    /*Start at the backTrackerIndex 1 check to see if the associated groups columns and rows need the value at numbersIndex.
      If a value is not needed try all avaiable values before back tracking. 
      If unable to find a needed value: 
        backtrack (decrement) the backTrackerIndex reset to a new number.  
      If we are successful at setting a new number, move forward  increment backTrackerIndex. 
    */
    while (sumTheGrid(grid[0], grid[1], grid[2], grid[3], grid[4], grid[5], grid[6], grid[7], grid[8], grid[9]) !== maxInput || backTracker > 81) {
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
      const group1 = [grid[0][0], grid[0][1], grid[0][2], grid[1][0], grid[1][1], grid[1][2], grid[2][0], grid[2][1], grid[2][2]]
      const group2 = [grid[0][3], grid[0][4], grid[0][5], grid[1][3], grid[1][4], grid[1][5], grid[2][3], grid[2][4], grid[2][5]]
      const group3 = [grid[0][6], grid[0][7], grid[0][8], grid[1][6], grid[1][7], grid[1][8], grid[2][6], grid[2][7], grid[2][8]]
      const group4 = [grid[3][0], grid[3][1], grid[3][2], grid[4][0], grid[4][1], grid[4][2], grid[5][0], grid[5][1], grid[6][2]]
      const group5 = [grid[3][3], grid[3][4], grid[3][5], grid[4][3], grid[4][4], grid[4][5], grid[5][3], grid[5][4], grid[6][5]]
      const group6 = [grid[3][6], grid[3][7], grid[3][8], grid[4][6], grid[4][7], grid[4][8], grid[5][6], grid[5][7], grid[6][8]]
      const group7 = [grid[6][0], grid[6][1], grid[6][2], grid[7][0], grid[7][1], grid[7][2], grid[8][0], grid[8][1], grid[8][2]]
      const group8 = [grid[6][3], grid[6][4], grid[6][5], grid[7][3], grid[7][4], grid[7][5], grid[8][3], grid[8][4], grid[8][5]]
      const group9 = [grid[6][6], grid[6][7], grid[6][8], grid[7][6], grid[7][7], grid[7][8], grid[8][6], grid[8][7], grid[8][8]]
      //vertical up and down. 
      const column1 = [grid[0][0], grid[1][0], grid[2][0], grid[3][0], grid[4][0], grid[5][0], grid[6][0], grid[7][0], grid[8][0]]
      const column2 = [grid[0][1], grid[1][1], grid[2][1], grid[3][1], grid[4][1], grid[5][1], grid[6][1], grid[7][1], grid[8][1]]
      const column3 = [grid[0][2], grid[1][2], grid[2][2], grid[3][2], grid[4][2], grid[5][2], grid[6][2], grid[7][2], grid[8][2]]
      const column4 = [grid[0][3], grid[1][3], grid[2][3], grid[3][3], grid[4][3], grid[5][3], grid[6][3], grid[7][3], grid[8][3]]
      const column5 = [grid[0][4], grid[1][4], grid[2][4], grid[3][4], grid[4][4], grid[5][4], grid[6][4], grid[7][4], grid[8][4]]
      const column6 = [grid[0][5], grid[1][5], grid[2][5], grid[3][5], grid[4][5], grid[5][5], grid[6][5], grid[7][5], grid[8][5]]
      const column7 = [grid[0][6], grid[1][6], grid[2][6], grid[3][6], grid[4][6], grid[5][6], grid[6][6], grid[7][6], grid[8][6]]
      const column8 = [grid[0][7], grid[1][7], grid[2][7], grid[3][7], grid[4][7], grid[5][7], grid[6][7], grid[7][7], grid[8][7]]
      const column9 = [grid[0][8], grid[1][8], grid[2][8], grid[3][8], grid[4][8], grid[5][8], grid[6][8], grid[7][8], grid[8][8]]
  
      const indexToGroup = {
        1: group1, 2: group1, 3: group1, 4: group2, 5: group2, 6: group2, 7: group3, 8: group3, 9: group3, 10: group1, 11: group1, 12: group1,
        13: group2, 14: group2, 15: group2, 16: group3, 17: group3, 18: group3, 19: group1, 20: group1, 21: group1, 22: group2, 23: group2,
        24: group2, 25: group3, 26: group3, 27: group3, 28: group4, 29: group4, 30: group4, 31: group5, 32: group5, 33: group5, 34: group6,
        35: group6, 36: group6, 37: group4, 38: group4, 39: group4, 40: group5, 41: group5, 42: group5, 43: group6, 44: group6, 45: group6,
        46: group4, 47: group4, 48: group4, 49: group5, 50: group5, 51: group5, 52: group6, 53: group6, 54: group6, 55: group7, 56: group7,
        57: group7, 58: group8, 59: group8, 60: group8, 61: group9, 62: group9, 63: group9, 64: group7, 65: group7, 66: group7, 67: group8,
        68: group8, 69: group8, 70: group9, 71: group9, 72: group9, 73: group7, 74: group7, 75: group7, 76: group8, 77: group8, 78: group8,
        79: group9, 80: group9, 81: group9
      }/*Purpose to index to the group to check if value is needed */
  
      const indexToColumn = {
        1: column1, 2: column2, 3: column3, 4: column4, 5: column5, 6: column6, 7: column7, 8: column8, 9: column9, 10: column1, 11: column2,
        12: column3, 13: column4, 14: column5, 15: column6, 16: column7, 17: column8, 18: column9, 19: column1, 20: column2, 21: column3,
        22: column4, 23: column5, 24: column6, 25: column7, 26: column8, 27: column9, 28: column1, 29: column2, 30: column3, 31: column4,
        32: column5, 33: column6, 34: column7, 35: column8, 36: column9, 37: column1, 38: column2, 39: column3, 40: column4, 41: column5,
        42: column6, 43: column7, 44: column8, 45: column9, 46: column1, 47: column2, 48: column3, 49: column4, 50: column5, 51: column6,
        52: column7, 53: column8, 54: column9, 55: column1, 56: column2, 57: column3, 58: column4, 59: column5, 60: column6, 61: column7,
        62: column8, 63: column9, 64: column1, 65: column2, 66: column3, 67: column4, 68: column5, 69: column6, 70: column7, 71: column8,
        72: column9, 73: column1, 74: column2, 75: column3, 76: column4, 77: column5, 78: column6, 79: column7, 80: column8, 81: column9
      } /*Purpose to index to the column to check if value is needed */
  
      const indexToRow = {
        1: grid[0], 2: grid[0], 3: grid[0], 4: grid[0], 5: grid[0], 6: grid[0], 7: grid[0], 8: grid[0], 9: grid[0],
        10: grid[1], 11: grid[1], 12: grid[1], 13: grid[1], 14: grid[1], 15: grid[1], 16: grid[1], 17: grid[1], 18: grid[1],
        19: grid[2], 20: grid[2], 21: grid[2], 22: grid[2], 23: grid[2], 24: grid[2], 25: grid[2], 26: grid[2], 27: grid[2],
        28: grid[3], 29: grid[3], 30: grid[3], 31: grid[3], 32: grid[3], 33: grid[3], 34: grid[3], 35: grid[3], 36: grid[3],
        37: grid[4], 38: grid[4], 39: grid[4], 40: grid[4], 41: grid[4], 42: grid[4], 43: grid[4], 44: grid[4], 45: grid[4],
        46: grid[5], 47: grid[5], 48: grid[5], 49: grid[5], 50: grid[5], 51: grid[5], 52: grid[5], 53: grid[5], 54: grid[5],
        55: grid[6], 56: grid[6], 57: grid[6], 58: grid[6], 59: grid[6], 60: grid[6], 61: grid[6], 62: grid[6], 63: grid[6],
        64: grid[7], 65: grid[7], 66: grid[7], 67: grid[7], 68: grid[7], 69: grid[7], 70: grid[7], 71: grid[7], 72: grid[7],
        73: grid[8], 74: grid[8], 75: grid[8], 76: grid[8], 77: grid[8], 78: grid[8], 79: grid[8], 80: grid[8], 81: grid[8],
      } /*Purpose to index to the row to check if value is needed */
  
  
  
  
      /*maxInput is where each column is 45 * 9 */
      let attempts = 0;// start attempts at 0 each time. 
      const value = numbers.slice(numbersIndex, numbersIndex + 1);
      const doesSectionNeedValue = valueNeeded(indexToGroup[backTrackerIndex], value[0]) && valueNeeded(indexToColumn[backTrackerIndex], value[0]) && valueNeeded(indexToRow[backTrackerIndex], value[0])
      /*a && b && c  will return true only if all are true if even one is false it will return false. */
      if (doesSectionNeedValue) {
        const row = backTracker[backTrackerIndex][0]; //get the row from backTracker. 
        const col = backTracker[backTrackerIndex][1]; // get the col from backTracker. 
        grid[row][col] = value[0];  // set the section of the grid using the row and col  to the value  which is needed. 
        numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For the next cell. 
        backTrackerIndex += 1;  // move forward in the indexing. 
  
      } else {
  
        while (attempts !== 9) {
          attempts += 1;
          numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For trying a new number.
  
          const value = numbers.slice(numbersIndex, numbersIndex + 1);
          const doesSectionNeedValue = valueNeeded(indexToGroup[backTrackerIndex], value[0]) && valueNeeded(indexToColumn[backTrackerIndex], value[0]) && valueNeeded(indexToRow[backTrackerIndex], value[0])
          if (doesSectionNeedValue) {
            const row = backTracker[backTrackerIndex][0]; //get the row from backTracker. 
            const col = backTracker[backTrackerIndex][1]; // get the col from backTracker. 
            grid[row][col] = value[0];  // set the section of the grid using the row and col  to the value  which is needed. 
            numbersIndex = (numbersIndex + 1) % numbers.length; //number set so go to next number. For the next cell. 
            backTrackerIndex += 1;  // move forward in the indexing. 
            break; //end the loop. 
          } // end of if statement in while loop. 
  
        }// end of while loop. 
      } //end of else statement. 
  
      if (attempts === 9) {
        /*iterated through the entire list*/
        backTrackerIndex -= 1; // decrement/backtrack reset the previous. 
      }
    } // end of primary while loop
    console.log(grid);
  }//end of function
  
  createBoard()
  
  
  
  
  