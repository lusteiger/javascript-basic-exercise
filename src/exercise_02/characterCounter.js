/* eslint-disable no-console */
export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string === undefined) {
    return 0;
  }
  if (string !== null && string !== '') {
    if (prediction !== undefined) {
      let str_arry = string.split('');
      let newStr = str_arry.filter(prediction).join('');
      return newStr.length;
    }
    else {
      return string.length;
    }
  }
  else {
    return 0;
  }
  throw new Error('Please delete this line and implement the function');
}
