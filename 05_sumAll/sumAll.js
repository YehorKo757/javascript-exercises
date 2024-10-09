const sumAll = function(firstNumber, lastNumber) {
    let result = 0;
    if (firstNumber < 0 || lastNumber < 0 || !Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
        return "ERROR";
    } else if (firstNumber < lastNumber) {
       for (let i = firstNumber; i <= lastNumber; i++){
            result += i;
        }
        return result;
    } else {
        for (let i = firstNumber; i >= lastNumber; i--){
            result += i;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
