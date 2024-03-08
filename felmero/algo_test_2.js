// 1. feladat Leonardo numbers - Leonardo számok
L = (n, L0, L1, add) => {
    t = [];
    for (let i = 0; i < n; i++) {
      t.push(L0);
      [L0, L1] = [L1, L0 + L1 + add];
    }
    return t;
  };


console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);


// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start){
   arr = arr.slice(start);
   var res = [];
   for(let i = 0; i < arr.length; i += interval) {
     res.push(arr[i]);
   }
   return res;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);


// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    var answer = [];
    for (var i = 0; i < nums.length; ++i)
    {
      var count = 0;
      for (var j = 0; j < nums.length; ++j)
        if (nums[i] == nums[j])
          count ++;
      if (count % 2 == 0)
        answer.push(nums[i]);
    }
    return answer;
  }

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);
