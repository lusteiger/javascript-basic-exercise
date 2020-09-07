function flatDeep(arr, d) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
    : arr.slice();
};

export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw 'Flatten undefined or null array';
  }
  else {
    var flatArray = flatDeep(array, 1);
    return flatArray;
  }


  throw new Error('Please delete this line and implement the function');
}
