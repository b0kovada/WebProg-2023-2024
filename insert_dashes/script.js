function insertDash(num) {
    const numArray = num.toString().split("");
    let dashedNumber = numArray.reduce((result, digit, index) => {
        result += digit;
        if (digit % 2 && (numArray[index + 1] && numArray[index + 1] % 2)) {
            result += "-";
        }
        return result;
    }, "");

    return dashedNumber;
}