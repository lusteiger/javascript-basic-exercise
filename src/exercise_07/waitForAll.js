export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  promises.forEach(element => {
    if (!(element instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });




  // const results = [];
  // let promisesCompleted = 0;
  // return new Promise((resolve, reject) => {
  //   promises.forEach((promise, index) => {
  //     promise.then((val) => {
  //       results[index] = val;
  //       // console.log(promises);
  //       // console.log(promise);
  //       promisesCompleted += 1;
  //       if (promisesCompleted === promises.length) {
  //         resolve(results);
  //       }
  //     })
  //       .finally(() => {

  //         if (val === promises.length - 1 && promisesCompleted !== promises.length) {
  //           reject();
  //         // results.push = error;
  //         // if (promisesCompleted === promises.length) {
  //         //   console.log(error);
  //         //   // resolve(error);
  //         //   reject(error);

  //         }

  //       })
  //   })
  // });


  promises.forEach((promise) => {
    if (!(promise instanceof Promise)) {
      throw Error('Not all elements are promises.');
    }
  });
  return new Promise(((resolve, reject) => {
    let promisesCompleted = 0;
    for (let index = 0; index < promises.length; index += 1) {
      promises[index].then(() => {
        promisesCompleted += 1;
        if (promisesCompleted === promises.length) {
          resolve();
        }
      }, () => {
        'It should not be a success promise';
      }).finally(() => {
        if (index === promises.length - 1 && promisesCompleted !== promises.length) {
          reject();
        }
      });
    }
  }));

}
