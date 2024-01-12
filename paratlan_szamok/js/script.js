function paratlan(arr) {
    var osszes = 0;
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        if (typeof temp === "number") {
            if (temp % 2 === 1 && temp !== 0) {
                osszes += Math.pow(temp, 3);
            }
        } else {
            return null;
        }
    }
    if (osszes === 2) {
        return null;
    }
    return osszes;
}
var eredmeny = paratlan([1, 2, 3, 4, 5]);
console.log(eredmeny);