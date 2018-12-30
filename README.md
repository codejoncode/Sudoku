# Sudoku
The application will use the Backtracking algorithm technique to build the sudoku board.

https://en.wikipedia.org/wiki/Sudoku_solving_algorithms#Sudoku_brute_force  

I used the article above to create my own algorithm which uses Objects and indexj's to go through and set the board up.  My method is a little easier perhaps because I start off with a completely blank grid that I then update. The plan is to take the grid and only show random fields orginally.  Rather than inserting random fields and then backtracking. I believe this reduces the amount of backtracks thus making the program faster (possibly). The following simulates the backtracking technique.  

#There are three necessary areas to check: 
  horizontal sections which go east and west or from left side to right side. [1,2,3,4,5,6,7,8,9]
  Vertically north and south or top to bottom. 
  [1,
  2,
  3
  ,4,
  5,
  6,
  7,
  8,
  9]
  3 x 3 section
  1 2 3 
  4 5 6
  7 8 9
  
  Basically for a 9 x 9 grid  the idea of Sudoku is that there shouldn't be an repeated number within the horizontal, vertical or 3 x 3. 
  
  To repeat this implementation and probably some better practices are out there I did the following. 
  #Step 1: 
  I created a grid of 9 x 9 featuring zeros.   
  [
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
  This is an array of arrays featuring 9 elements. 
  
  #Step 2: 
  The next step I did was create a few functions.  
  The shuffle function is self explanatory however uses Durstenfeld shuffle algorithm to shuffle the numbers so that the first row did not start at 1 2 3 4 5 6 7 8 9. This also allows me to create several different 9 x 9 grids which can be implemented in the game. 
  
  The next function is valueNeeded it accepts two parameters. The first paramater has to be an array and a check is performed make sure it is an array if not i use console.error to provide the line and the type of error and a message.  The second parameter is the value to be added.  I check if the section includes this value and if it doesn't I return true if it does I return true answering the question if value is needed. This is a very important function for the success of the program. 
  
  The next two functions are sumArray and sumTheGrid.  SumArray is used with Javascripts reduce method. Basically it will sum the elements of the given array.   sumTheGrid basically accepts 9 arguments all must be array type or console.error is performed. I then use sumArray on each argument to return the sum.  if the grid is set it will have a sum of 405 (1-9 * 9  = 45 * 9).  There may be a better practice or method however I use this method to break out of my while loop I use for the backtracking algorithm.  
  
 For the sections I created four objects.  backTracker, indexToGroup, indexToColumn, indexToRow.   backTracker features keys 1 - 81. Basicaly a 9 x 9 grid has 81 positions.  backTracker value for each key is an array of the row and col of the grid for that key.  For example 1 = [0,0] 2 = [0,1] and so on up until 81 = [8,8]. The purpose of this is during the while loop I will start off at a backTrackerIndex of 1. I then will iterate through.   Of course  indexToGroup indexToColumn, indexToRow is neccessary in the success of iterating through.   The group is considered the 3 x 3 so I have each key 1 -81 set to a certain group as well as column and row. During the while loop i use the backtracker index to locate the correct columns and rows as well as group column and row to check if the value is needed in all three. What was important was to have these group column and row objects inside of the while loop so that I could update them as the grid upated.  Outside of the while loop the objects kept their orginal assignments of zeros.  
 
 In order to break things down in the most visual way I also have column1 through column9  and group1 through group9 which features each position of the grid in which the object references these variables. 

The pseduo code for the while loop inside of the createBoard function is avialble here: 
  /*Start at the backTrackerIndex 1 check to see if the associated groups columns and rows need the value at numbersIndex.
    If a value is not needed try all avaiable values before back tracking. 
    If unable to find a needed value: 
      backtrack (decrement) the backTrackerIndex reset to a new number.  
    If we are successful at setting a new number, move forward  increment backTrackerIndex. 
  */
  
  
  


![sudoku_solved_by_bactracking](https://user-images.githubusercontent.com/38900224/50551230-17042300-0c43-11e9-8ddd-802f09ab2d50.gif)



