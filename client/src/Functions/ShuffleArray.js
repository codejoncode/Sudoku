const shuffleArray = array => {
    /*Purpose of this function is to return a shuffled version of the numbers checks to see if array is an array
      Also checks that values 1 - 9 is in the array needed for this program. 
    */
    let valid = false;
    // let valid = false;

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

    return [array, valid];
  };

  export default shuffleArray; 