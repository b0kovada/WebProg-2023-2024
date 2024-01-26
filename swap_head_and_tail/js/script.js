function swapHeadAndTail(arr) {
    let len = Math.floor(arr.length / 2),
        head = arr.slice(0, len),
        tail = arr.slice(-len);
    return newarr = tail.concat(arr.slice(len, -len), head);
  }
  
  let inputArray = [1, 2, 3, 4, 5];
  let swappedArray = swapHeadAndTail(inputArray);
  console.log(swappedArray);