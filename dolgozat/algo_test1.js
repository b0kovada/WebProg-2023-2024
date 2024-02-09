// All or Nothing
const possiblyPerfect = (key, answers) => {
    let allCorrect = 0;
    let allIncorrect = 0;
    
    for (let i = 0; i < key.length; i++) {
        const expected = key[i];
        const actual = answers[i];
    
        if (expected !== "_") {
            allIncorrect++;
    
            if (expected === actual) {
                allCorrect++;
            }
        }
    }
    
    return allCorrect === allIncorrect || allCorrect === 0;
    }

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    const sortedArr = [...numbers].sort((a, b) => a - b);
    const indexOfMedian = Math.floor((sortedArr.length - 1) / 2);
    const median = sortedArr[indexOfMedian];
    const mean = arr.reduce((acc, currentValue) => acc + currentValue) / numbers.length;

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

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    let len = Math.floor(arr.length / 2),
    head = arr.slice(0, len),
    tail = arr.slice(-len);
    return newarr = tail.concat(arr.slice(len, -len), head);
    }

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);