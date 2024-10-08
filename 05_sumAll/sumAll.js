const sumAll = function(numA, numB) {
    if (numA < 0 || numB < 0){return "ERROR"} 
    if (!Number.isInteger(numA) || !Number.isInteger(numB)) {return "ERROR"}
    if (!typeof(numA) === "number" || !typeof(numB) === "number") {return "ERROR"}
    let numVar = numA;
    let allNum = [];
    if (numA < numB) {
        for (i = numA; i < numB; i++) {
            let numCurrent = numVar + 1;
            allNum.push (numCurrent);
            numVar = numCurrent
        }
    } else {
        for (i = numB; i < numA; i++) {
            let numCurrent = numVar - 1;
            allNum.push (numCurrent);
            numVar = numCurrent;
        }
    }
    allNum.push(numA)
    let sum = allNum.reduce((a, b) => a + b, 0)
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
