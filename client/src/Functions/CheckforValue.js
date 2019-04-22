const checkForValue = (section, toBeAdded, from) => {
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


export default checkForValue; 

