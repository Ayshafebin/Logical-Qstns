// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


function findIndex(array, str) {
    for (let j = 0; j < array.length; j++) {
      if (arr[j] === str) {
        return j;
      }
    }
    return -1;
  }

  console.log(findIndex(["a", "g", "y", "d"], "d"));
  
