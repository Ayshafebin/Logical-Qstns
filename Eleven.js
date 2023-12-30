// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


function findIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return i;
      }
    }
    return -1;
  }
  

  console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); 
  console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) 
  console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
  console.log(findIndex(["a", "g", "y", "d"], "d"));
  
