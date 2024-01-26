function cubeOdd(arr) {
  let res = [];
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    } else {
      res.push(Math.pow(arr[i], 3));
      if (res[i] % 2 !== 0) {
        result += res[i];
      }
    }
  }

  return result;
}
var result = cubeOdd([1, 2, 3, 4, 5]);
console.log(result);
