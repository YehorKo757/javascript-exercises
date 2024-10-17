const fibonacci = function(numberInput) {
    let number = parseInt(numberInput);
    let fibonacciArray = [1, 1];
    function fibonacciNext(fibonacciArray) {
        return fibonacciArray[fibonacciArray.length-1] + fibonacciArray[fibonacciArray.length-2];
    }
    while (fibonacciArray.length < number) {
        fibonacciArray.push(fibonacciNext(fibonacciArray));
    }
    if (number == 0) {
        return 0;
    } else if (number < 0) {
        return "OOPS";
    } else {
        return fibonacciArray[number-1];
    }
};


// Do not edit below this line
module.exports = fibonacci;
