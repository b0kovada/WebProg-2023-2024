function min(arr, visszateresiErtek) {
    if (visszateresiErtek === "value") {
      return Math.min(...arr);
    } else if (visszateresiErtek === "index") {
      return arr.indexOf(Math.min(...arr));
    }
  }
  const minErtek = min([1, 2, 3, 4, 5], "value");
  const minIndex = min([1, 2, 3, 4, 5], "index");

  console.log("Minimum érték:", minErtek);
  console.log("Minimum érték indexe:", minIndex);