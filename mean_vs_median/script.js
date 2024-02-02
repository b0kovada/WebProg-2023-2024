const meanVsMedian = arr => {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const indexOfMedian = Math.floor((sortedArr.length - 1) / 2);
    const median = sortedArr[indexOfMedian];
    const mean = arr.reduce((acc, currentValue) => acc + currentValue) / arr.length;

    if (median > mean) {
        return "median";
    }
    else if (median < mean) {
        return "mean";
    }
    else {
        return "same";
    }
}