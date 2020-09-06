export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  var array = [];
  if (start === end)
    return array;
  else if (start < end) {
    for (start; start < end; start++) {
      array.push(start);
    }
    return array;
  }
  else if (start > end) {
    for (start; start > end; start--) {
      array.push(start);
    }
    return array;
  }
  throw new Error('Please delete this line and implement the function');
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (numbers.length === 0) {
    return 0;
  }
  else if (numbers.length > 0) {
    let total = 0;
    numbers.forEach(element => {
      total += element;
    });
    return total;
  }
  throw new Error('Please delete this line and implement the function');
}