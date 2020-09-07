export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.


  if (array === undefined) {
    throw new Error('Creating list from undefined array');
  }

  if (array === null) {
    throw new Error('Creating list from undefined array');
  }

  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  const list = new Array();
  var m = 0;
  for (let i = array.length - 1; i >= 0; i--) {

    let arr;
    if (i === array.length - 1) {
      arr = {
        value: array[i],
        next: null,
      }
      list.push(arr);
    }
    else {
      arr = {
        value: array[i],
        next: list[m],
      }
      list.push(arr);
      m++;
    }
  }
  list.reverse();
  return list[0];

  throw new Error('Please delete this line and implement the function');
}