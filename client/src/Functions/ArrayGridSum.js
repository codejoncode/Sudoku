const sumArray = (total, num) => {
    /*This will be used with the reduce method and sum up the numbers */
    return total + num;
  };

 const sumTheArrayGrid = (one, two, three, four, five, six, seven, eight, nine) => {
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
    let gridSum =  (
      one.reduce(sumArray) +
      two.reduce(sumArray) +
      three.reduce(sumArray) +
      four.reduce(sumArray) +
      five.reduce(sumArray) +
      six.reduce(sumArray) +
      seven.reduce(sumArray) +
      eight.reduce(sumArray) +
      nine.reduce(sumArray)
    );


    return gridSum
  };

  export default sumTheArrayGrid;